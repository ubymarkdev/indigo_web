console.log("Javascript listo");

const boton_contacto = document.getElementById("boton_contacto");
const mensaje = document.getElementById("mensaje");

boton_contacto.addEventListener("click", () => {
    mensaje.textContent = "Gracias!";
});


const grupo1 = document.querySelectorAll(".grupo-1");
const grupo2 = document.querySelectorAll(".grupo-2");
const grupo3 = document.querySelectorAll(".grupo-3");

window.addEventListener("scroll", () => {

    grupo1.forEach((burbuja) => {
        burbuja.style.transform =
            `translateY(${window.scrollY * 0.2}px)`;
    });

    grupo2.forEach((burbuja) => {
        burbuja.style.transform =
            `translateY(${window.scrollY * 0.4}px)`;
    });

    grupo3.forEach((burbuja) => {
        burbuja.style.transform =
            `translateY(${window.scrollY * 0.7}px)`;
    });

});

