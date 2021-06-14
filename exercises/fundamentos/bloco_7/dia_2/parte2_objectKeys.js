const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};


const listaHabilidades = (student) => {
  const arraydeSkills = Object.keys(student);
  console.log(Object.keys(student))
  for(index in arraydeSkills) {
    console.log(`${arraydeSkills[index]}, Nível: ${student[arraydeSkills[index]]}`)
  }
};

console.log('***** Estudante 1 *****')
listaHabilidades(student1)

console.log('***** Estudante 2 *****')
listaHabilidades(student2)
