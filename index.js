const chalk = require('chalk');
const fs = require('fs');
//const path = require('path');

function extractLinks(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResults = [];

  let temp;
  while((temp = regex.exec(text)) !== null) {
    arrayResults.push({
      [temp[1]]: temp[2],
    });
  }
  
  return arrayResults.length === 0 ? 'Não há links' : arrayResults;
}

function handleError(e) {
  throw new Error(chalk.red(e.code, 'There is no file available in the path'));
}

async function getFile(filepath) {
  const encoding = 'utf-8';
  
  try {
    const text = await fs.promises.readFile(filepath, encoding);
    return extractLinks(text);
  } catch(error) {
    return handleError(error);
  }
}

module.exports = getFile;


/*

//função para ler todos os arquivos mardown que estiverem dentro da pasta ./arquivos

async function getFile(filepath) {
  const absolutePath = path.join(__dirname, '.', filepath);
  const encoding = 'utf-8';
  
  try {
    const files = await fs.promises.readdir(absolutePath, { encoding });
    console.log('files', files);

    const result = await Promise.all(files.map(async (file) => {
      const fileLocation = `${absolutePath}/${file}`;
      const text = await fs.promises.readFile(fileLocation, encoding);
      return extractLinks(text);
    }));

    return result;

  } catch(error) {
    return handleError(error);
  }
}

*/