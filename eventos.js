const container = document.getElementById("container");

container.addEventListener("click", () => {
    alert("Hola! Soy el Div");
});

const boton =  document.getElementById("btn-saludar");

boton.addEventListener("click", (event) => {
    alert("Hola");
    event.stopImmediatePropagation();
});