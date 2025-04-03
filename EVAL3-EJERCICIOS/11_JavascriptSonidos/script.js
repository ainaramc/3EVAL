const botones = document.querySelector('#buttons');
const sonidos = document.querySelectorAll('audio');

sonidos.forEach((sonidos) => {
    const btt = document.createElement('button');
    btt.classList.add('btn');
    btt.id = sonidos.id;

    btt.innerText = `${sonidos.id}`;
    botones.appendChild(btt);

    btt.addEventListener('click', () => {
        if(!sonidos.paused){
            sonidos.pause();
            sonidos.currentTime = 0;
        }
        else{
            sonidos.play();
        }
    });
})

const detsonido = ()=> {
    sonidos.pause();
    sonidos.currentTime = 0;
}