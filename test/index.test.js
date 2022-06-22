const getFile = require('../index');

const arrayResult = [
  {
    FileList : `https://developer.mozilla.org/pt-BR/docs/Web/API/FileList`
  }
]

describe('getFile', () => {
  it('need to be a function', () => {
    expect(typeof getFile).toBe('function')
  })
  it('need to return array with results', async () => {
    const result = await getFile('F:/Pessoal/Estudo/Alura/formacao_nodejs/nodejs_criando_biblioteca/test/arquivos/texto1.md');
    expect(result).toEqual(arrayResult)
  })
  it('need to return message "There is no file available in the path"', async () => {
    const result = await getFile('F:/Pessoal/Estudo/Alura/formacao_nodejs/nodejs_criando_biblioteca/test/arquivos/texto1_semlinks.md')
    expect(result).toBe('Any links founded')
  })
  it('need to return an error', async () => {
    await expect(getFile('F:/Pessoal/Estudo/Alura/formacao_nodejs/nodejs_criando_biblioteca/test/arquivos')).rejects.toThrow(/There is no file available in the path/)
  })
  it('need to solve the function with successfully', async () => {
    await expect(getFile('F:/Pessoal/Estudo/Alura/formacao_nodejs/nodejs_criando_biblioteca/test/arquivos/texto1.md')).resolves.toEqual(arrayResult)
  })
})

