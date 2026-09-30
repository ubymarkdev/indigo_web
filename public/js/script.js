/*
const boton_contacto = document.getElementById("boton_contacto");
const mensaje = document.getElementById("mensaje");

boton_contacto.addEventListener("click", () => {
    mensaje.textContent = "Gracias!";
});
*/


const burbujas = document.querySelectorAll(".burbujas img");

const parallax = new SimpleParallax(burbujas, {
    orientation: "up",
    scale: 1.4,
    delay: 0.4
});