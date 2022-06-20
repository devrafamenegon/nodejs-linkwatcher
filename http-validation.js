//mantendo o padrão de import commonJS
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function statusCheck(urlArray) {
  //Promises async await
  const arrayStatus =  await Promise.all(urlArray.map(async url => {
    const res = await fetch(url);
    return res.status;
  }))
  return arrayStatus;
}

function urlGenerator(linksArray) {
  let urls = [];
  linksArray.forEach((linksChild) =>{
    linksChild.map(linkObject => urls.push(Object.values(linkObject).join()));
  })

  return urls;
}

async function urlValidate(linksArray) {
  const links = urlGenerator(linksArray);
  const statusLinks = await statusCheck(links);
  return statusLinks;
}

module.exports = urlValidate;