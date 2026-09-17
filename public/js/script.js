console.log("Javascript listo");

const boton_contacto = document.getElementById("boton_contacto");
const mensaje = document.getElementById("mensaje");

boton_contacto.addEventListener("click", () => {
    mensaje.textContent = "Gracias!";
});

