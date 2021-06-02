// Pode receber um ou mais valores numéricos
// Deve restornar um unico número
// Deve gerar um erro se receber um paramentro não npumero
// Deve retornar zero caso não receba nenhum parâmetro

function calcularMedia() {
  let total = 0
  const qtd = arguments.length
  if (arguments.length === 0) {
    return 0
  }
  for (let i = 0; i < qtd; i++) {
    if (typeof arguments[i] !== 'number') {
      throw Error('only numbers')
    }

    total += arguments[i]
  }
  return (total / qtd)
}

const media = calcularMedia()
console.log(media)