// Simulación de carga
function simularCarga() {
    const barraProgreso = document.querySelector(".progreso");
    const textoCarga = document.querySelector(".texto-carga");

    let width = 0;
    const intervalo = setInterval(() => {
        if (width >= 100) {
            clearInterval(intervalo);
            // Redirigir a la página de dedicatoria
            window.location.href = "index_2.html";
        } else {
            width += 10; // Incrementa el progreso
            barraProgreso.style.width = width + "%";
            textoCarga.textContent = `Espere un momento ❣️... ${width}%`;
        }
    }, 600); // Velocidad de la carga (300ms por cada 10%)
}

// Iniciar la simulación de carga al cargar la página
window.onload = simularCarga;