let txtNombre = document.getElementById("txtNombre");
let btnGuardar = document.getElementById("btnGuardar");


// Para index.html
btnGuardar.addEventListener("click", function (event) {
    event.preventDefault();
    let nombre = txtNombre.value;
    localStorage.setItem("nombre", nombre);
});


