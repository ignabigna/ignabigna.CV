function mostrar(x) {
    var elemento = document.getElementById("te"+x);
    if (elemento.className == "oculto") {
      elemento.className = "visible";
    }else {
      elemento.className = "oculto";
    }
}

