// ATENÇÃO!!! Não edite este arquivo. Altere apenas os arquivos da pasta 'test'.
const specialists = [{ nome: 'Tunico', classe: 'Mestre dos Magos' },
  { nome: 'Cremoso', classe: 'Cavaleiro Negro' },
  { nome: 'Gordinho', classe: 'Pirata' },
  { nome: 'Lobo Solitário', classe: 'Samurai' },
  { nome: 'Ousado', classe: 'Mago' },
  { nome: 'Anjo Loiro', classe: 'Clérigo' }];

const enemies = [{ nome: 'Barata', ataque: 'Voado' },
  { nome: 'Esquilo', ataque: 'Mordido' },
  { nome: 'Pé da mesa', ataque: 'Tropicado' },
  { nome: 'Dragão', ataque: 'Soprado' }];

const randomAttack = () => {
  const randomMonster = enemies[Math.floor(Math.random() * 4)];
  const randomSpecialistIndex = Math.floor(Math.random() * specialists.length);
  const randomSpecialist = specialists[randomSpecialistIndex];

  const { ataque, nome: monsterNome } = randomMonster;
  const { nome, classe } = randomSpecialist;

  console.log(`${nome}, the ${classe} has been ${ataque} by a ${monsterNome}`);
  console.log(`Rest in peace, ${nome}...`);
  specialists.splice(randomSpecialistIndex, 1);
};

module.exports = { specialists, randomAttack };
