const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};


// Sem Object.values
const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};
console.log(listSkillsValuesWithFor(student));

// Com Object.values
const listSkillsValuesWithValues = (student) => Object.values(student);
console.log(listSkillsValuesWithValues(student));

