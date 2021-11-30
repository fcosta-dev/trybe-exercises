const fs = require('fs').promises;

const readContentFile = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
};

const writeContentFile = async (path, content) => {
  try {
    const arrContent = await readContentFile(path);

    arrContent.push(content);
    await fs.writeFile(path, JSON.stringify(arrContent));

    return content;
  } catch (error) {
    return null;
  }
};

module.exports = {
  readContentFile,
  writeContentFile,
};