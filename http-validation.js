function urlGenerator(linksArray) {
  let links = [];
  linksArray.forEach((linksChild) =>{
    linksChild.map(linkObject => links.push(Object.values(linkObject).join()));
  })

  return links;
}

function urlValidate(linksArray) {
  return urlGenerator(linksArray);
}

module.exports = urlValidate;