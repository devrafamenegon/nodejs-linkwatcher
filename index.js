const chalk = require('chalk');
const fs = require('fs');

function handleError(e) {
  throw new Error(chalk.red(e.code, 'There is no file available in the path'));
}

function getFile(filepath) {
  const encoding = 'utf-8'
  fs.readFile(filepath, encoding, (error, data) => {
    if(error) handleError(error);
    console.log(chalk.green(data));
  })
}

getFile('./arquivos/texto1.md');