/*Desarrolla una función que reciba un país por parámetro y devuelva su capital.
Utiliza un objeto para almacenar los países y sus capitales.
La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.*/

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
}

function getCapital(country) {
  // Verificamos si el país existe en el objeto de capitales
  if (capitals[country]) {
    return `La capital de ${country} es ${capitals[country]}.`
  } else {
    return `Lo siento, no tengo información sobre la capital de ${country}.`
  }
}

console.log(getCapital('Spain'))
console.log(getCapital('France'))
console.log(getCapital('Argentina'))
console.log(getCapital('Italy'))

//****DUDA!!****
/*El ejercicio no funciona si no coinciden todos los caracteres (mayúsculas y minúsculas) por lo que
debe estar escrito exactamente igual que en nuestra "base de datos"
Cómo haríamos para que independientmente de como se introduzca, funcione? Es decir, que convierta la primera
letra a mayúscula y el resto a minúsculas para que coincida con el texto de nuestro array??*/
