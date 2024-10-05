/*Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.
Utiliza este array para probar tu función.*/

const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
]

function findOldestXMen(xMen) {
  let oldest = xMen[0] // Inicializamos con el primer miembro del array

  for (let i = 1; i < xMen.length; i++) {
    if (xMen[i].year < oldest.year) {
      oldest = xMen[i] // Actualizamos si encontramos un miembro máas antiguo
    }
  }
  return oldest
}
const oldestXMen = findOldestXMen(xMen)
console.log(
  `El miembro más antiguo de los X-Men es ${oldestXMen.name}, apareció en ${oldestXMen.year}.`
)
/*En este caso, sólo devuelve el primer personaje del array cuya fecha es más antigua. Podríamos imprimir todos aquellos que
tienen el mismo año con otro buble "for" y otro "if" añadiéndolo a la variable con "push" a medida que recorremos el array.
 
------------------------------------------------------------------------------------------------------
for (let i = 0; i < xMen.length; i++) {
    if (xMen[i].year === oldestYear) {
      oldestMembers.push(xMen[i]); 
    }
  } 
------------------------------------------------------------------------------------------------------
    */
