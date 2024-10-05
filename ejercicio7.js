/*Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.
Utiliza bucles para estructurar este objeto e imprime el resultado por consola*/
const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
]

const tracksByGenre = {}

// Sacamos el género de cada cación
for (let i = 0; i < tracks.length; i++) {
  const genre = tracks[i].genre

  // Si el género no existe como clave en el objeto lo creamos en forma de array vacio
  if (!tracksByGenre[genre]) {
    tracksByGenre[genre] = []
  }
  // Añadimos las canciones al array correspondiente segúun su género
  tracksByGenre[genre].push(tracks[i].title)
}

// Imprimimos el objeto final por consola
console.log(tracksByGenre)
