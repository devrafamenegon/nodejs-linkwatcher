const chalk = require('chalk');
const getFile = require('./index');

const path = process.argv;

async function processText(pathFile) {
  const result = await getFile(pathFile[2]);
  console.log(chalk.yellow('lista de links'), result);
}

processText(path);