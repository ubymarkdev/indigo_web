console.log("Javascript listo");

const boton_contacto = document.getElementById("boton_contacto");
const mensaje = document.getElementById("mensaje");

boton_contacto.addEventListener("click", () => {
    mensaje.textContent = "Gracias!";
});


const grupo1 = document.querySelectorAll(".grupo-1");
const grupo2 = document.querySelectorAll(".grupo-2");
const grupo3 = document.querySelectorAll(".grupo-3");

const burbujas = [
    ...grupo1,
    ...grupo2,
    ...grupo3
];

const posicionesIniciales = new Map();

burbujas.forEach((burbuja) => {
    posicionesIniciales.set(
        burbuja,
        burbuja.getBoundingClientRect().top
    );
});


window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    burbujas.forEach((burbuja) => {

        let velocidad;

        if (burbuja.classList.contains("grupo-1")) {
            velocidad = 0.15;
        }

        if (burbuja.classList.contains("grupo-2")) {
            velocidad = 0.35;
        }

        if (burbuja.classList.contains("grupo-3")) {
            velocidad = 0.60;
        }

        const posicionInicial = posicionesIniciales.get(burbuja);

        const alturaBurbuja = burbuja.offsetHeight;

        const recorrido = window.innerHeight + alturaBurbuja;

        const nuevaPosicion =
            ((posicionInicial + scroll * velocidad) % recorrido + recorrido)
            % recorrido;

        const movimiento = nuevaPosicion - posicionInicial;

        burbuja.style.transform =
            `translateY(${movimiento}px)`;
    });

});