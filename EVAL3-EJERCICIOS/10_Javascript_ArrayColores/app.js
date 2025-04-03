
const colors = [
	'red',
	'orange',
	'green',
	'purple',
	'indigo',
	'violet',
	'blue',
	'silver',
	'lightgreen'
];
const cajas = document.querySelector('#boxes');
const body = document.querySelector('body')

for (let index =0 ;index < colors.length; index++){
	const caja = document.createElement('div');
	caja.classList.toggle("caja");
	caja.innerText = colors[index];	
	caja.style.backgroundColor = colors[index];
	cajas.appendChild(caja);
	
	caja.addEventListener('mouseover',()=>{
		body.style.backgroundColor = caja.style.backgroundColor
	})
}