const { readFileSync } = require('fs');
const { Sequelize } = require('sequelize');
const Importer = require('mysql-import');

describe('Queries de seleção', () => {
  let sequelize;

  beforeAll(async () => {
    const importer = new Importer(
      { user: process.env.MYSQL_USER, password: process.env.MYSQL_PASSWORD, host: process.env.HOSTNAME },
    );

    try {
      await importer.import('./desafio1.sql');
    }
    catch(error) {
      console.log('Erro ao restaurar o dump!');
    }

    importer.disconnect();
    sequelize = new Sequelize('SpotifyClone', process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {host:process.env.HOSTNAME, dialect: 'mysql'})
  });

  afterAll(async () => {
    await sequelize.query('DROP DATABASE SpotifyClone;', { type: 'RAW' });
    sequelize.close();

    const importer = new Importer(
      { user: process.env.MYSQL_USER, password: process.env.MYSQL_PASSWORD, host: process.env.HOSTNAME }
    );
    await importer.import('./desafio1.sql');
    await importer.disconnect();
  });

  describe('1 - Normalize as tabelas para a 3ª Forma Normal', () => {
    const hasForeignKey = async (table, referencedTable) => {
      const [{ REFERENCE_COUNT: referenceCount }] = await sequelize.query(
        `SELECT COUNT(COLUMN_NAME) AS REFERENCE_COUNT
        FROM information_schema.KEY_COLUMN_USAGE
        WHERE
          TABLE_SCHEMA = 'SpotifyClone'
            AND TABLE_NAME = '${table}'
            AND REFERENCED_TABLE_NAME = '${referencedTable}'
            AND REFERENCED_COLUMN_NAME = (
            SELECT COLUMN_NAME
                FROM information_schema.KEY_COLUMN_USAGE
                WHERE TABLE_SCHEMA = 'SpotifyClone' AND TABLE_NAME = '${referencedTable}' AND CONSTRAINT_NAME = 'PRIMARY'
            );`,
        { type: 'SELECT' },
      );

      return (referenceCount === 1);
    };

    const composedPrimaryKey = async (table) => {
      const [{ PK_COUNT: pkCount }] = await sequelize.query(
        `SELECT COUNT(COLUMN_NAME) AS PK_COUNT
        FROM information_schema.KEY_COLUMN_USAGE
        WHERE TABLE_SCHEMA = 'SpotifyClone' AND TABLE_NAME = '${table}' AND CONSTRAINT_NAME = 'PRIMARY';`,
        { type: 'SELECT' },
      );

      return (pkCount > 1);
    };

    it('Verifica os planos', async () => {
      const {
        coluna_plano: planColumn,
        tabela_que_contem_plano: planTable,
        tabela_que_contem_usuario: userTable,
      } = JSON.parse(readFileSync('desafio1.json', 'utf8'));

      expect(planTable).not.toBe(userTable);

      const plansCount = await sequelize.query(
        `SELECT COUNT(${planColumn}) AS quantidade_planos FROM ${planTable};`,
        { type: 'SELECT' },
      );

      expect(plansCount).toEqual([{ quantidade_planos: 3 }]);

      expect(await hasForeignKey(userTable, planTable)).toBeTruthy();
    });

    it('Verifica o histórico de reprodução', async () => {
      const {
        coluna_historico_de_reproducoes: reproductionHistoryColumn,
        tabela_que_contem_historico_de_reproducoes: reproductionHistoryTable,
        tabela_que_contem_usuario: userTable,
        tabela_que_contem_cancoes: songTable,
      } = JSON.parse(readFileSync('desafio1.json', 'utf8'));

      expect(reproductionHistoryTable).not.toBe(userTable);
      expect(reproductionHistoryTable).not.toBe(songTable);

      const reproductionHistoryCount = await sequelize.query(
        `SELECT COUNT(${reproductionHistoryColumn}) AS musicas_escutadas FROM ${reproductionHistoryTable};`,
        { type: 'SELECT' },
      );

      expect(reproductionHistoryCount).toEqual([{ musicas_escutadas: 14 }]);

      expect(await hasForeignKey(reproductionHistoryTable, songTable)).toBeTruthy();
      expect(await hasForeignKey(reproductionHistoryTable, userTable)).toBeTruthy();
      expect(await composedPrimaryKey(reproductionHistoryTable)).toBeTruthy();
    });

    it('Verifica pessoas seguindo artistas', async () => {
      const {
        coluna_seguindo_artistas: followedArtistColumn,
        tabela_que_contem_seguindo_artistas: followingTable,
        tabela_que_contem_usuario: userTable,
        tabela_que_contem_artista: artistTable,
      } = JSON.parse(readFileSync('desafio1.json', 'utf8'));

      expect(followingTable).not.toBe(userTable);
      expect(followingTable).not.toBe(artistTable);

      const followedArtistsCount = await sequelize.query(
        `SELECT COUNT(${followedArtistColumn}) AS artistas_seguidos FROM ${followingTable};`,
        { type: 'SELECT' },
      );

      expect(followedArtistsCount).toEqual([{ artistas_seguidos: 8 }]);

      expect(await hasForeignKey(followingTable, artistTable)).toBeTruthy();
      expect(await hasForeignKey(followingTable, userTable)).toBeTruthy();
      expect(await composedPrimaryKey(followingTable)).toBeTruthy();
    });

    it('Verifica os álbuns', async () => {
      const {
        coluna_album: albumColumn,
        tabela_que_contem_album: albumTable,
        tabela_que_contem_artista: artistTable,
      } = JSON.parse(readFileSync('desafio1.json', 'utf8'));

      expect(albumTable).not.toBe(artistTable);

      const albumsCount = await sequelize.query(
        `SELECT COUNT(${albumColumn}) AS quantidade_albuns FROM ${albumTable};`,
        { type: 'SELECT' },
      );

      expect(albumsCount).toEqual([{ quantidade_albuns: 5 }]);

      expect(await hasForeignKey(albumTable, artistTable)).toBeTruthy();
    });

    it('Verifica as canções', async () => {
      const {
        coluna_cancoes: songColumn,
        tabela_que_contem_cancoes: songTable,
        tabela_que_contem_album: albumTable,
      } = JSON.parse(readFileSync('desafio1.json', 'utf8'));

      expect(songTable).not.toBe(albumTable);

      const songsCount = await sequelize.query(
        `SELECT COUNT(${songColumn}) AS quantidade_cancoes FROM ${songTable};`,
        { type: 'SELECT' },
      );

      expect(songsCount).toEqual([{ quantidade_cancoes: 18 }]);

      expect(await hasForeignKey(songTable, albumTable)).toBeTruthy();
    });

    it('Verifica as pessoas usuárias', async () => {
      const {
        coluna_usuario: userColumn,
        tabela_que_contem_usuario: userTable,
      } = JSON.parse(readFileSync('desafio1.json', 'utf8'));

      const usersCount = await sequelize.query(
        `SELECT COUNT(${userColumn}) AS quantidade_usuarios FROM ${userTable};`,
        { type: 'SELECT' },
      );

      expect(usersCount).toEqual([{ quantidade_usuarios: 4 }]);
    });

    it('Verifica as pessoas artistas', async () => {
      const {
        coluna_artista: artistColumn,
        tabela_que_contem_artista: artistTable,
      } = JSON.parse(readFileSync('desafio1.json', 'utf8'));

      const artistsCount = await sequelize.query(
        `SELECT COUNT(${artistColumn}) AS quantidade_artistas FROM ${artistTable};`,
        { type: 'SELECT' },
      );

      expect(artistsCount).toEqual([{ quantidade_artistas: 4 }]);
    });
  });

  describe('2 - Exibe as estatísticas musicais', () => {
    it('Verifica o desafio 2', async () => {
      const challengeQuery = readFileSync('desafio2.sql', 'utf8');

      await sequelize.query(challengeQuery, { type: 'RAW' });

      const result = await sequelize.query('SELECT * FROM estatisticas_musicais;', { type: 'SELECT' });

      expect(result).toEqual([{ cancoes: 18, artistas: 4, albuns: 5 }]);
    });
  });

  describe('3 - Exibe o histórico de reprodução para cada pessoa usuária', () => {
    it('Verifica o desafio 3', async () => {
      const challengeQuery = readFileSync('desafio3.sql', 'utf8');

      await sequelize.query(challengeQuery, { type: 'RAW' });

      const result = await sequelize.query('SELECT * FROM historico_reproducao_usuarios;', { type: 'SELECT' });
      const expectedResult = [
        { nome: 'Magic Circus', usuario: 'Bill' },
        { nome: 'Thang Of Thunder', usuario: 'Bill' },
        { nome: 'Troubles Of My Inner Fire', usuario: 'Bill' },
        { nome: 'Home Forever', usuario: 'Cintia' },
        { nome: 'Honey, Let\'s Be Silly', usuario: 'Cintia' },
        { nome: 'Reflections Of Magic', usuario: 'Cintia' },
        { nome: 'Words Of Her Life', usuario: 'Cintia' },
        { nome: 'Celebration Of More', usuario: 'Roger' },
        { nome: 'Dance With Her Own', usuario: 'Roger' },
        { nome: 'Without My Streets', usuario: 'Roger' },
        { nome: 'Diamond Power', usuario: 'Thati' },
        { nome: 'Magic Circus', usuario: 'Thati' },
        { nome: 'Soul For Us', usuario: 'Thati' },
        { nome: 'Thang Of Thunder', usuario: 'Thati' },
      ];

      expect(result).toEqual(expectedResult);
    });
  });

  describe('4 - Exibe top 3 artistas com maior quantidade de pessoas seguidoras', () => {
    it('Verifica o desafio 4', async () => {
      const challengeQuery = readFileSync('desafio4.sql', 'utf8');

      await sequelize.query(challengeQuery, { type: 'RAW' });

      const result = await sequelize.query('SELECT * FROM top_3_artistas;', { type: 'SELECT' });
      const expectedResult = [
        { artista: 'Walter Phoenix', seguidores: 3 },
        { artista: 'Freedie Shannon', seguidores: 2 },
        { artista: 'Lance Day', seguidores: 2 },
      ];

      expect(result).toEqual(expectedResult);
    });
  });

  describe('5 - Exibe top 2 hits mais tocados no momento', () => {
    it('Verifica o desafio 5', async () => {
      const challengeQuery = readFileSync('desafio5.sql', 'utf8');

      await sequelize.query(challengeQuery, { type: 'RAW' });

      const result = await sequelize.query('SELECT * FROM top_2_hits_do_momento;', { type: 'SELECT' });
      const expectedResult = [
        { cancao: 'Magic Circus', reproducoes: 2 },
        { cancao: 'Thang Of Thunder', reproducoes: 2 },
      ];

      expect(result).toEqual(expectedResult);
    });
  });

  describe('6 - Exibe o relatório de faturamento da empresa', () => {
    it('Verifica o desafio 6', async () => {
      const challengeQuery = readFileSync('desafio6.sql', 'utf8');

      await sequelize.query(challengeQuery, { type: 'RAW' });

      const result = await sequelize.query('SELECT * FROM faturamento_atual;', { type: 'SELECT' });
      const expectedResult = [
        {
          faturamento_maximo: '7.99',
          faturamento_medio: '3.50',
          faturamento_minimo: '0.00',
          faturamento_total: '13.98',
        },
      ];

      expect(result).toEqual(expectedResult);
    });
  });

  describe('7 - Exibe uma relação de todos os álbuns produzidos por cada artista', () => {
    it('Verifica o desafio 7', async () => {
      const challengeQuery = readFileSync('desafio7.sql', 'utf8');

      await sequelize.query(challengeQuery, { type: 'RAW' });

      const result = await sequelize.query('SELECT * FROM perfil_artistas;', { type: 'SELECT' });
      const expectedResult = [
        { album: 'Envious', artista: 'Walter Phoenix', seguidores: 3 },
        { album: 'Exuberant', artista: 'Walter Phoenix', seguidores: 3 },
        { album: 'Temporary Culture', artista: 'Freedie Shannon', seguidores: 2 },
        { album: 'Incandescent', artista: 'Lance Day', seguidores: 2 },
        { album: 'Hallowed Steam', artista: 'Peter Strong', seguidores: 1 },
      ];

      expect(result).toEqual(expectedResult);
    });
  });

  describe('9 - Crie uma procedure chamada `albuns_do_artista` que, dado o nome da pessoa artista, retorna todos seus álbuns', () => {
    it('Verifica o desafio 9', async () => {
      const challengeQuery = readFileSync('desafio9.sql', 'utf8').trim();
      const createProcedureQuery = /CREATE PROCEDURE.*END/si.exec(challengeQuery)[0];

      await sequelize.query(createProcedureQuery);

      const result = await sequelize.query('CALL albuns_do_artista(\'Walter Phoenix\');');
      const expectedResult = [
        { album: 'Envious', artista: 'Walter Phoenix' },
        { album: 'Exuberant', artista: 'Walter Phoenix' },
      ];

      expect(result).toEqual(expectedResult);
    });
  });

  describe('10 - Crie uma function chamada de `quantidade_musicas_no_historico` que exibe a quantidade de músicas que estão presente atualmente no histórico de reprodução de uma pessoa usuária', () => {
    it('Verifica o desafio 10', async () => {
      const {
        tabela_que_contem_usuario: userTable,
        coluna_usuario: userColumn,
      } = JSON.parse(readFileSync('desafio1.json', 'utf8'));
      const challengeQuery = readFileSync('desafio10.sql', 'utf8').trim();
      const createFunctionQuery = /CREATE FUNCTION.*END/si.exec(challengeQuery)[0];
      const [{ COLUMN_NAME: userIdColumn }] = await sequelize.query(`
        SELECT COLUMN_NAME
        FROM information_schema.KEY_COLUMN_USAGE
        WHERE TABLE_SCHEMA = 'SpotifyClone' AND TABLE_NAME = '${userTable}' AND CONSTRAINT_NAME = 'PRIMARY';
      `, { type: 'SELECT' });
      const userId = (await sequelize.query(
        `SELECT ${userIdColumn} FROM ${userTable} WHERE ${userColumn} = 'Bill';`,
        { type: 'SELECT' },
      ))[0][userIdColumn];

      await sequelize.query(createFunctionQuery);

      const result = await sequelize.query(
        `SELECT quantidade_musicas_no_historico(${userId}) AS quantidade_musicas_no_historico;`,
        { type: 'SELECT' },
      );

      expect(result).toEqual([{ quantidade_musicas_no_historico: 3 }]);
    });
  });

  describe('11 - Crie uma `VIEW` chamada `cancoes_premium` que exiba o nome e a quantidade de vezes que cada canção foi tocada por pessoas usuárias do plano familiar ou universitário', () => {
    it('Verifica o desafio 11', async () => {
      const createViewQuery = readFileSync('desafio11.sql', 'utf8').trim();

      await sequelize.query(createViewQuery);

      const result = await sequelize.query('SELECT * FROM cancoes_premium;', { type: 'SELECT' });
      const expectedResult = [
        { nome: 'Home Forever', reproducoes: 1 },
        { nome: 'Honey, Let\'s Be Silly', reproducoes: 1 },
        { nome: 'Magic Circus', reproducoes: 1 },
        { nome: 'Reflections Of Magic', reproducoes: 1 },
        { nome: 'Thang Of Thunder', reproducoes: 1 },
        { nome: 'Troubles Of My Inner Fire', reproducoes: 1 },
        { nome: 'Words Of Her Life', reproducoes: 1 },
      ];

      expect(result).toEqual(expectedResult);
    });
  });
});

describe('Queries de deleção', () => {
  let importer;
  let sequelize;

  beforeAll(() => {
    importer = new Importer(
      { user: process.env.MYSQL_USER, password: process.env.MYSQL_PASSWORD, host: process.env.HOSTNAME },
    );

    sequelize = new Sequelize(
      `mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_PASSWORD}@${process.env.HOSTNAME}:3306/`,
    );
  });

  afterAll(() => {
    importer.disconnect();
    sequelize.close();
  });

  beforeEach(async () => {
    try {
      await importer.import('./desafio1.sql');
    }
    catch(error) {
      console.log('Erro ao restaurar o dump!');
    }

    await sequelize.query('USE SpotifyClone;', { type: 'RAW' });
  });

  afterEach(async () => await sequelize.query('DROP DATABASE SpotifyClone;', { type: 'RAW' }));

  describe('8 - Crie uma trigger chamada `trigger_usuario_delete` que deve ser disparada sempre que uma pessoa usuária for excluída do banco de dados, refletindo essa exclusão em todas as tabelas que ela estiver', () => {
    it('Verifica o desafio 8', async () => {
      const {
        tabela_que_contem_usuario: userTable,
        coluna_usuario: userColumn,
      } = JSON.parse(readFileSync('desafio1.json', 'utf8'));
      const challengeQuery = readFileSync('desafio8.sql', 'utf8').trim();
      const createTriggerQuery = /CREATE TRIGGER.*END/si.exec(challengeQuery)[0];

      await sequelize.query(createTriggerQuery);

      const [{ COLUMN_NAME: userIdColumn }] = await sequelize.query(`
        SELECT COLUMN_NAME
        FROM information_schema.KEY_COLUMN_USAGE
        WHERE TABLE_SCHEMA = 'SpotifyClone' AND TABLE_NAME = '${userTable}' AND CONSTRAINT_NAME = 'PRIMARY';
      `, { type: 'SELECT' });
      const userId = (await sequelize.query(
        `SELECT ${userIdColumn} FROM ${userTable} WHERE ${userColumn} = 'Thati';`,
        { type: 'SELECT' },
      ))[0][userIdColumn];

      await sequelize.query(`DELETE FROM ${userTable} WHERE ${userColumn} = 'Thati';`);

      const userReferencedTables = await sequelize.query(`
        SELECT TABLE_NAME, COLUMN_NAME
        FROM information_schema.KEY_COLUMN_USAGE
        WHERE TABLE_SCHEMA = 'SpotifyClone' AND REFERENCED_TABLE_NAME = '${userTable}';
      `, { type: 'SELECT' });

      for (let i = 0; i < userReferencedTables.length; i += 1) {
        const { TABLE_NAME: tableName, COLUMN_NAME: columnName } = userReferencedTables[i];
        const userCount = await sequelize.query(
          `SELECT COUNT(*) AS user_count FROM ${tableName} WHERE ${columnName} = ${userId};`,
          { type: 'SELECT' },
        );

        expect(userCount).toEqual([{ user_count: 0 }]);
      }
    });
  });
});
