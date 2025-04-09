let btnEliminar = document.getElementById("btnEliminar");
let encabezado1 = document.getElementsByTagName("h1").item(0);

// Para welcome.html
if (localStorage.getItem("nombre") != null) {
    let nombre = localStorage.getItem("nombre");
    encabezado1.innerText = `Hola ${nombre}, bienvenid@ de nuevo`;
} else {
    encabezado1.innerText = "Por favor ve al index e ingresa tu nombre";
}


btnEliminar.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem("nombre");
    encabezado1.innerText = "Por favor ve al index e ingresa tu nombre";
});