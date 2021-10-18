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

    await importer.import('./w3schools.sql');

    importer.disconnect();

    sequelize = new Sequelize('w3schools', process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {host:process.env.HOSTNAME, dialect: 'mysql'});
  });

  afterAll(async () => {
    await sequelize.query('DROP DATABASE w3schools;', { type: 'RAW' });

    if (process.argv.some(arg => arg === '-restore')) {
      const importer = new Importer(
        { user: MYSQL_USER, password: MYSQL_PASSWORD, host: HOSTNAME }
      );
  
      await importer.import('./w3schools.sql');
    }

    sequelize.close();
  });

  describe('8 - Exibe todas as **pessoas consumidoras** cujos pedidos já foram enviados pelas empresas `Speedy Express` ou `United Package`', () => {
    it('Verifica o desafio 8', async () => {
      const challengeQuery = readFileSync('desafio8.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult8');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('9 - Exibe todos as pessoas funcionárias que já realizaram algum pedido, mostrando também seu total de pedidos feitos', () => {
    it('Verifica o desafio 9', async () => {
      const challengeQuery = readFileSync('desafio9.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult9');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('10 - Exibe todos os produtos que já foram pedidos, que possuem uma média de quantidade nos pedidos registrados acima de `20.00`', () => {
    it('Verifica o desafio 10', async () => {
      const challengeQuery = readFileSync('desafio10.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult10');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('11 - Exibe todas as pessoas clientes **que possuem compatriotas**, mostrando a quantidade de compatriotas para cada pessoa cliente', () => {
    it('Verifica o desafio 11', async () => {
      const challengeQuery = readFileSync('desafio11.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult11');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('13 - Exibe todos produtos **que já tiveram um pedido associado requerindo uma quantidade desse produto maior que 80**', () => {
    it('Verifica o desafio 13', async () => {
      const challengeQuery = readFileSync('desafio13.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult13');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('14 - Considerando o conjunto formado pelas pessoas consumidoras e empresas fornecedoras de produtos, queremos saber quais são os cinco primeiros países distintos, em ordem alfabética, presentes nesse conjunto', () => {
    it('Verifica o desafio 14', async () => {
      const challengeQuery = readFileSync('desafio14.sql', 'utf8').trim();
      const expectedResult = require('./challengesResults/challengeResult14');

      expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
    });
  });

  describe('17 - Crie uma TRIGGER que, a cada nova inserção realizada na tabela `orders`, insira automaticamente a data atual na coluna `OrderDate`', () => {
    it('Verifica o desafio 17', async () => {
      const challengeQuery = readFileSync("desafio17.sql", "utf8").trim();
      const expectedResult = require("./challengesResults/challengeResult17");
      
      const createTriggerQuery = /CREATE TRIGGER.*END/si.exec(challengeQuery)[0];

      await sequelize.query(createTriggerQuery);

      await sequelize.query(`INSERT INTO orders (CustomerID, EmployeeID, ShipperID) VALUES (4,2,2);`, { type: 'INSERT' });
      
      const result = await sequelize.query(`SELECT CustomerID, EmployeeID, OrderDate, ShipperID FROM orders WHERE CustomerID = 4;`, { type: 'SELECT' });

      expect(result[0]).toEqual(expectedResult[0]);
      expect(result[1]).toEqual(expectedResult[1]);
      expect(result[2]).toEqual(expectedResult[2]);
    });
  });
});
