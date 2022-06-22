const getFile = require('../index');

const arrayResult = [
  {
    FileList : `https://developer.mozilla.org/pt-BR/docs/Web/API/FileList`
  }
]

describe('getFile', () => {
  it('need no be a function', () => {
    expect(typeof getFile).toBe('function');
  })
  it('need to return array with results', async () => {
    const result = await getFile('F:/Pessoal/Estudo/Alura/formacao_nodejs/nodejs_criando_biblioteca/test/arquivos/texto1.md')
    expect(result).toEqual(arrayResult)
  })
})

