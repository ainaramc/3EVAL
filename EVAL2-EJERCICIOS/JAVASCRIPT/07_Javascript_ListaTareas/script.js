const formulario =  document.querySelector('#form');
const tareas = document.querySelector('ul');
const input = document.querySelector ('input');

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
        const lista = document.createElement('li')
        lista.innerText= input.value
       
        lista.addEventListener('contextmenu', (e) =>{
            lista.remove()
        })
        tareas.appendChild(lista)


        lista.addEventListener('click', (e) =>{
            lista.classList.toggle('completada')
        })

})