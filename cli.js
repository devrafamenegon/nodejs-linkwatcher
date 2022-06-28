#!/usr/bin/env node

const chalk = require('chalk');
const getFile = require('./index');
const urlValidate = require('./http-validation')

const path = process.argv;

async function processText(pathFile) {
  const result = await getFile(pathFile[2]);
  if(pathFile[3] === 'validate'){
    console.log(chalk.yellow('validated links'), await urlValidate(result));
  } else {
    console.log(chalk.yellow('list of links'), result);  
  }
}

processText(path);