const fs = require('fs').promises;

const readFileContent = async () => {
  const fileContent = await fs.readFile('./talker.json');
  return JSON.parse(fileContent);
};

module.exports = { readFileContent };
