const chalk = require('chalk');
const fs = require('fs');

function handleError(e) {
  throw new Error(chalk.red(e.code, 'There is no file available in the path'));
}

async function getFile(filepath) {
  const encoding = 'utf-8';
  try {
    const text = await fs.promises.readFile(filepath, encoding)
    console.log(chalk.green(text));
  } catch(error) {
    handleError(error);
  }
}

//usando .then
/*
function getFile(filepath) {
  const encoding = 'utf-8'
  fs.promises.readFile(filepath, encoding)
  .then((data) => console.log(chalk.green(data)))
  .catch((error) => handleError(error))
}
*/

//sintaxe do fs
/*
function getFile(filepath) {
  const encoding = 'utf-8'
  fs.readFile(filepath, encoding, (error, data) => {
    if(error) handleError(error);
    console.log(chalk.green(data));
  })
}
*/

getFile('./arquivos/texto1.md');