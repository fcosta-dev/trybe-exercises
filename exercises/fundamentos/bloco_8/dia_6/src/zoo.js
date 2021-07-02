/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const { species } = require('./data');
const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) { // EXERCICIO 01
  return species
    .filter((elemento) => ids.includes(elemento.id));
}

function getAnimalsOlderThan(animal, age) { // EXERCICIO 02
  return species
    .find((elemento) => elemento.name === animal).residents
    .every((elemento) => elemento.age >= age);
}

function getEmployeeByName(employeeName) { // EXERCICIO 03
  if (!employeeName) return {};
  return employees
    .find((elemento) => elemento.firstName === employeeName || elemento.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) { // EXERCICIO 04
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) { // EXERCICIO 05
  return employees
    .forEach((elemento) => { // Percorre todos os ids
      elemento.managers
        .find((elemento2) => elemento2 === id);
    });
}
console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}
