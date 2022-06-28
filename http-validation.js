//mantendo o padrão de import commonJS
const fetch = (...args) => import('node-fetch')
  .then(({default: fetch}) => fetch(...args));

function handleError(e) {
  throw new Error(e.message);
}

async function statusCheck(urlArray) {
  try {
    const arrayStatus =  await Promise
    .all(urlArray
      .map(async url => {
        const res = await fetch(url);
        return (`${res.status} - ${res.statusText}`);
    }))
    return arrayStatus;
  } catch(error) {
    handleError(error);
  }
}

function urlGenerator(linksArray) {
  return linksArray.map(linkObject => Object.values(linkObject).join());
}

async function urlValidate(linksArray) {
  const links = urlGenerator(linksArray);
  const statusLinks = await statusCheck(links);

  const results = linksArray.map((object, index) => ({
    ...object, status: statusLinks[index] 
  }))

  return results;
}

module.exports = urlValidate;


/*

//lógica para desestruturar os dados do array 
//que possui um array referente a cada página que guarda os links

linksArray.forEach((linksChild) =>{
      linksChild.map(linkObject => urls
        .push(Object.values(linkObject).join()));
  })

  */