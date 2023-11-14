import peliculas from './peliculas.js'
//genre_ids: genero
//poster_path: imagenes
//title: título

const mostrarPeliculaPorGenero = (generoId, contenedorId) => {
    const contenedor = document.getElementById(contenedorId)
    const peliculaGenero = peliculas.filter((pelicula) => pelicula.genre_ids.includes(generoId))

    let i = 0
    while ( i < peliculaGenero.length) {
    let pelicula = peliculaGenero[i]; 
    let templatePelis = `
    <div class="pelicula">
        <img src="https://image.tmdb.org/t/p/w200/${pelicula.poster_path}" alt="${pelicula.title}" />
        <h3>${pelicula.title}</h3>
    </div>`
    contenedor.innerHTML += templatePelis;
    i++;
}}

mostrarPeliculaPorGenero(28, "genero-28")
mostrarPeliculaPorGenero(53, "genero-53")
mostrarPeliculaPorGenero(12, "genero-12")