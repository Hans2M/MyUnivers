// Listas de palabras para generar la dedicatoria
const adjetivos = ["maravilloso", "increíble", "único", "especial", "admirable", "extraordinario"];
const cualidades = ["tu sonrisa", "tu bondad", "tu inteligencia", "tu valentía", "tu generosidad", "tu amor"];
const verbos = ["ilumina", "embellece", "llena de alegría", "inspira", "cautiva", "transforma"];
const lugares = ["mi vida", "mi corazón", "mi mundo", "mi día", "mi alma", "mi ser"];

// Frases para el tema de amor
const frasesLove = [
    "Eres la razón de mi sonrisa cada día 💌.",
    "Tu amor hace que mi vida sea completa 💌 .",
    "Cada momento contigo es un tesoro 💌.",
    "Eres mi sol en los días nublados💌.",
    "Tu amor ilumina mi camino 💌."
];

// Frases para el tema de amistad sincera
const frasesPlus = [
    "La verdadera amistad es un tesoro invaluable 😎.",
    "Gracias por ser un amigo tan increíble 😎.",
    "Tu amistad es un regalo que valoro cada día 😎.",
    "Eres un amigo en quien siempre puedo confiar 😎.",
    "La vida es mejor con amigos como tú 😎."
];

// Poemas para el tema de ánimo
const poemas = [
    "Aunque el camino sea difícil, siempre hay luz al final del túnel. ¡Sigue adelante! ✨💫",
    "Cada día es una nueva oportunidad para brillar. ¡Tú puedes! ✨💫",
    "La vida es como un arcoíris: necesita un poco de lluvia y un poco de sol para ser perfecta. ✨💫",
    "No importa cuán lento avances, lo importante es que no te detengas. ✨💫",
    "Eres más fuerte de lo que crees y más valiente de lo que imaginas.✨💫"
];

const inicio = [
    "💌💫 Bienvenidos, Dar click Arriba 💌💫"
];

// Recursos para cada tema
const temas = {
    inicio: {
        imagenes: ["img/bien.gif", "img/bien_3.gif", "img/bien_2.gif"],
        musica: "assets/audio_2.mp3",
        clase: ""
    },
    plus: {
        imagenes: ["img/goku_1.gif", "img/goku_2.gif", "img/goku_3.gif"],
        musica: "assets/plus.mp3",
        clase: "tema-plus"
    },
    love: {
        imagenes: ["img/panda_6.gif", "img/panda_5.gif", "img/panda_4.gif"],
        musica: "assets/love.mp3",
        clase: "tema-love"
    },
    animo: {
        imagenes: ["img/mot_4.gif", "img/mot_5.gif", "img/mot_6.webp"],
        musica: "assets/animo.mp3",
        clase: "tema-animo"
    }
};

let temaActual = "inicio";
let musicaActual = ""; // Variable para rastrear la música actual

// Función para generar una dedicatoria dinámica
function generarDedicatoria() {
    let dedicatoria = "";

    if (temaActual === "animo") {
        // Generar un poema aleatorio para el tema de ánimo
        const poemaAleatorio = poemas[Math.floor(Math.random() * poemas.length)];
        dedicatoria = poemaAleatorio;
    } else if (temaActual === "inicio") {
        // Mensaje predeterminado para el tema "inicio"
        dedicatoria = inicio[0];
    } else if (temaActual === "love") {
        // Generar una frase aleatoria para el tema de amor
        const fraseAleatoria = frasesLove[Math.floor(Math.random() * frasesLove.length)];
        dedicatoria = fraseAleatoria;
    } else if (temaActual === "plus") {
        // Generar una frase aleatoria para el tema de amistad sincera
        const fraseAleatoria = frasesPlus[Math.floor(Math.random() * frasesPlus.length)];
        dedicatoria = fraseAleatoria;
    } else {
        // Generar una dedicatoria normal
        const adjetivo = adjetivos[Math.floor(Math.random() * adjetivos.length)];
        const cualidad = cualidades[Math.floor(Math.random() * cualidades.length)];
        const verbo = verbos[Math.floor(Math.random() * verbos.length)];
        const lugar = lugares[Math.floor(Math.random() * lugares.length)];
        dedicatoria = `Para ti, que eres ${adjetivo}, ${cualidad} ${verbo} ${lugar}.`;
    }

    // Mostrar la dedicatoria
    document.getElementById("dedicatoria").textContent = dedicatoria;

    // Cambiar la imagen y el emoji de la flor
    const imagenFlor = document.getElementById("flor-imagen");
    const emojiFlor = document.getElementById("flor-emoji");

    const imagenAleatoria = temas[temaActual].imagenes[Math.floor(Math.random() * temas[temaActual].imagenes.length)];
    imagenFlor.src = imagenAleatoria;
    imagenFlor.style.display = "block"; // Mostrar la imagen
    emojiFlor.textContent = ""; // Ocultar el emoji si se muestra la imagen

    // Reproducir la música solo si el tema ha cambiado
    const musica = document.getElementById("musica");
    if (musicaActual !== temas[temaActual].musica) {
        musica.src = temas[temaActual].musica;
        musica.play().catch(() => {
            console.log("La reproducción de música fue bloqueada por el navegador.");
        });
        musicaActual = temas[temaActual].musica; // Actualizar la música actual
    }
}

// Función para solicitar contraseña para el tema Love
function solicitarContrasena() {
    const contrasena = prompt("Por favor, ingresa la contraseña para acceder a este contenido:");
    if (contrasena === "amor") {
        temaActual = "love";
        document.querySelector(".container").className = "container tema-love";
        generarDedicatoria();
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
}

// Cambiar al tema Plus
document.getElementById("btn-plus").addEventListener("click", function() {
    temaActual = "plus";
    document.querySelector(".container").className = "container tema-plus";
    generarDedicatoria();
});

// Cambiar al tema Love
document.getElementById("btn-love").addEventListener("click", function() {
    solicitarContrasena();
});

// Cambiar al tema Ánimo
document.getElementById("btn-animo").addEventListener("click", function() {
    temaActual = "animo";
    document.querySelector(".container").className = "container tema-animo";
    generarDedicatoria();
});

// Generar una dedicatoria al cargar la página
window.onload = function() {
    temaActual = "inicio";
    document.querySelector(".container").className = "container tema-inicio";
    generarDedicatoria();
};