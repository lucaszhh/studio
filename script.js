/* LISTADO CATEGORIAS */
const categorias = [
    {
        id: 1, // numero de tecla presionada
        categoria: "animacion",
        banner: "./banner/animacion.png",
        animacion: "./animacion/mario.gif"
    },
    {
        id: 2, // numero de tecla presionada
        categoria: "deportes",
        banner: "./banner/deportes.png",
        animacion: "./animacion/messi.gif"
    },
    {
        id: 3, // numero de tecla presionada
        categoria: "dibujo digital",
        banner: "./banner/dibujoDigital.png",
        animacion: "./animacion/calamar.gif"
    },
    {
        id: 4, // numero de tecla presionada
        categoria: "musica",
        banner: "./banner/musica.png",
        animacion: "./animacion/musica.gif"
    },
    {
        id: 5, // numero de tecla presionada
        categoria: "animacion",
        banner: "./banner/programacion.png",
        animacion: "./animacion/mago.gif"
    },
    {
        id: 6, // numero de tecla presionada
        categoria: "scratch",
        banner: "./banner/scratch.png",
        animacion: "./animacion/spiderman.gif"
    },
    {
        id: 7, // numero de tecla presionada
        categoria: "videojuegos",
        banner: "./banner/videojuegos.png",
        animacion: "./animacion/pacman.gif"
    },
]

/* NODOS */
const banner = document.querySelector(".banner")
const pantalla = document.querySelector(".pantalla")
const animacion = document.querySelector(".animacion")

/* FUNCIONES */

function verAnimacion(id) {
    const teclaPresionada = id - 1
    const categoria = categorias[teclaPresionada]
    animacion.innerHTML = ""
    animacion.innerHTML += `<img src="${categoria.animacion}" alt="${categoria.categoria}">`
    animacion.classList.toggle("verAnimacion")
}

function verBanner(id) {
    const teclaPresionada = id - 1
    const categoria = categorias[teclaPresionada]
    banner.innerHTML = ""
    banner.innerHTML = `<img src="${categoria.banner}" alt="${categoria.categoria}">`
    banner.classList.toggle("verBanner")
}


/* LOGICA TECLADO */
document.addEventListener('keydown', function (event) {
    var key = event.keyCode// Obtener la tecla presionada
    // Realizar una acción basada en la tecla presionada
    switch (key) {
        case 49: // Tecla uno
            verAnimacion(1)
            verBanner(1)
            break
        case 50: // Tecla dos
            verAnimacion(2)
            verBanner(2)
            break
        case 51: // Tecla tres
            verAnimacion(3)
            verBanner(3)
            break
        case 52: // Tecla cuatro
            verAnimacion(4)
            verBanner(4)
            break
        case 53: // Tecla cinco
            verAnimacion(5)
            verBanner(5)
            break
        case 54: // Tecla seis
            verAnimacion(6)
            verBanner(6)
            break
        case 55: // Tecla siete
            verAnimacion(7)
            verBanner(7)
            break
    }
});

