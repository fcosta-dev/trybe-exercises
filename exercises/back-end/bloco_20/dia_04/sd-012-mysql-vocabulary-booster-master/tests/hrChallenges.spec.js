const { readFileSync } = require('fs');
const { Sequelize } = require('sequelize');
const Importer = require('mysql-import');

describe('Desafios iniciais', () => {
  let sequelize;
  const {
    MYSQL_USER,
    MYSQL_PASSWORD,
    HOSTNAME
  } = process.env;

  beforeAll(async () => {
    const importer = new Importer(
      { user: MYSQL_USER, password: MYSQL_PASSWORD, host: HOSTNAME }
    );

    await importer.import('./hr.sql');

    importer.disconnect();

    sequelize = new Sequelize('hr', process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {host:process.env.HOSTNAME, dialect: 'mysql'});
  });

  afterAll(async () => {
    await sequelize.query('DROP DATABASE hr;', { type: 'RAW' });
    sequelize.close();
    

    if (process.argv.some(arg => arg === '-restore')) {
      const importer = new Importer(
        { user: MYSQL_USER, password: MYSQL_PASSWORD, host: HOSTNAME }
      );
      await importer.import('./hr.sql');
    }
  });

  describe('1 - Exiba os países e indicando se cada um deles se encontra ou não na região formada pela Europa', () => {
    it('Verifica o desafio 1', async () => {
      const challengeQuery = readFileSync('desafio1.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult1');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('2 - Exiba os cargos com seu nível de renumeração associado, com base no salário máximo do cargo', () => {
    it('Verifica o desafio 2', async () => {
      const challengeQuery = readFileSync('desafio2.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult2');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('3 - Exiba os cargos com a diferença entre seus salários máximo e mínimo', () => {
    it('Verifica o desafio 3', async () => {
      const challengeQuery = readFileSync('desafio3.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult3');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('4 - Exiba a média salarial e o nível de senioridade de todas as pessoas empregadas, agrupadas pelo cargo', () => {
    it('Verifica o desafio 4', async () => {
      const challengeQuery = readFileSync('desafio4.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult4');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('5 - Exiba os cargos com sua variação salarial e suas médias máxima e mínima mensal, considerando salários máximo e minímo como anuais', () => {
    it('Verifica o desafio 5', async () => {
      const challengeQuery = readFileSync('desafio5.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult5');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('6 - Faça um relatório que mostra o **histórico de cargos das pessoas empregadas**', () => {
    it('Verifica o desafio 6', async () => {
      const challengeQuery = readFileSync('desafio6.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult6');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('7 - Faça um relatório que mostra o **histórico de cargos das pessoas empregadas** que iniciaram seus cargos nos meses de janeiro, fevereiro ou março', () => {
    it('Verifica o desafio 7', async () => {
      const challengeQuery = readFileSync('desafio7.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult7');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('12 - Faça um relatório que lista todas as pessoas funcionárias **que possuem o mesmo cargo**', () => {
    it('Verifica o desafio 12', async () => {
      const challengeQuery = readFileSync('desafio12.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult12');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('15 - Crie uma procedure chamada `buscar_media_por_cargo` que recebe como parâmetro o nome de um cargo e em retorno deve mostrar a média salarial de todas as pessoas que possuem esse cargo', () => {
    it('Verifica o desafio 15', async () => {
      const challengeQuery = readFileSync('desafio15.sql', 'utf8').trim();
      const createProcedureQuery = /CREATE PROCEDURE.*END/si.exec(challengeQuery)[0];

      await sequelize.query(createProcedureQuery);

      const result = await sequelize.query('CALL buscar_media_por_cargo(\'Programmer\');');
      const expectedResult = require('./challengesResults/challengeResult15');

      expect(result).toEqual(expectedResult);
    });
  });

  describe('16 - Crie uma função chamada `buscar_quantidade_de_empregos_por_funcionario` no banco de dados `hr` que, ao receber o **email de uma pessoa funcionária**, retorne a quantidade de empregos **presentes em seu histórico**', () => {
    it('Verifica o desafio 16', async () => {
      const challengeQuery = readFileSync('desafio16.sql', 'utf8').trim();
      const createFunctionQuery = /CREATE FUNCTION.*END/si.exec(challengeQuery)[0];

      await sequelize.query(createFunctionQuery);

      const result = await sequelize.query(
        `SELECT buscar_quantidade_de_empregos_por_funcionario(\'NKOCHHAR\') AS total_empregos;`,
        { type: 'SELECT' },
      );

      const expectedResult = require('./challengesResults/challengeResult16');

      expect(result).toEqual(expectedResult);
    });
  });

  describe('18 - Faça um relatório que mostra o **histórico de cargos das pessoas empregadas**, mostrando as datas de início e de saída, assim como os anos que ela ficou nesse cargo', () => {
    it('Verifica o desafio 18', async () => {
      const challengeQuery = readFileSync('desafio18.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult18');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('19 - Crie uma função chamada `exibir_quantidade_pessoas_contratadas_por_mes_e_ano` no banco de dados `hr` que, dados o mês e ano como parâmetros nessa ordem, retorna a quantidade de pessoas funcionárias **que foram contratadas** nesse mês e ano', () => {
    it('Verifica o desafio 19', async () => {
      const challengeQuery = readFileSync('desafio19.sql', 'utf8').trim();
      const createFunctionQuery = /CREATE FUNCTION.*END/si.exec(challengeQuery)[0];

      await sequelize.query(createFunctionQuery);

      const result = await sequelize.query(
        `SELECT exibir_quantidade_pessoas_contratadas_por_mes_e_ano(6, 1987) AS total;`,
        { type: 'SELECT' },
      );

      const expectedResult = require('./challengesResults/challengeResult19');

      expect(result).toEqual(expectedResult);
    });
  });

  describe('20 - Toda pessoa funcionária no banco `hr` possui um histórico completo de cargos. Logo, crie uma procedure chamada `exibir_historico_completo_por_funcionario` que, dado o e-mail de uma pessoa funcionária, retorna todos os cargos em seu histórico', () => {
    it('Verifica o desafio 20', async () => {
      const challengeQuery = readFileSync('desafio20.sql', 'utf8').trim();
      const createProcedureQuery = /CREATE PROCEDURE.*END/si.exec(challengeQuery)[0];

      await sequelize.query(createProcedureQuery);

      const result = await sequelize.query('CALL exibir_historico_completo_por_funcionario(\'NKOCHHAR\');');
      const expectedResult = require('./challengesResults/challengeResult20');

      expect(result).toEqual(expectedResult);
    });
  });
});