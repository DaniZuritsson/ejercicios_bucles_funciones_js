/*Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder. */
const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
]

function findMutantByPower(mutants, power) {
  const matchingMutants = [] //creamos una constante donde guardar los posibles resultados

  for (let i = 0; i < mutants.length; i++) {
    if (mutants[i].power === power) {
      matchingMutants.push(mutants[i].name)
    }
  }
  // Verificamos si encontramos algún mutante con el poder indicad
  if (matchingMutants.length > 0) {
    return `Se encontraron los siguientes mutantes con el poder '
    ${power}': ${matchingMutants.join(', ')}.`
  } else {
    return `No se encontró ningún mutante con el poder '${power}'.`
  }
}

console.log(findMutantByPower(mutants, 'telepathy'))
console.log(findMutantByPower(mutants, 'flight'))
