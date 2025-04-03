const imagenes = document.querySelector('.contenedor-imagenes');
let contador = 0;
setInterval(() => {
    if (contador == 1500)
        contador = 0;
    else
        contador += 500;
    imagenes.style.transform = `translateX(-${contador}px)`
}, 5000);