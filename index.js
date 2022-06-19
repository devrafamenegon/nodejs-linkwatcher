const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

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
  const absolutePath = path.join(__dirname, '.', filepath);
  const encoding = 'utf-8';
  
  try {
    const files = await fs.promises.readdir(absolutePath, { encoding });
    console.log('arquivos', files);

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

module.exports = getFile;



/*

//ALTERNATIVAS AO ASYNC/AWAIT-------------------------------
//usando .then

function getFile(filepath) {
  const encoding = 'utf-8'
  fs.promises.readFile(filepath, encoding)
  .then((data) => console.log(chalk.green(data)))
  .catch((error) => handleError(error))
}

//sintaxe do fs

function getFile(filepath) {
  const encoding = 'utf-8'
  fs.readFile(filepath, encoding, (error, data) => {
    if(error) handleError(error);
    console.log(chalk.green(data));
  })
}

*/