let button = document.querySelector('.menu-open');
let menu = document.querySelector('.menu');
let lil = document.getElementsByClassName('lil')
let toTop = document.getElementById('idTop')
let header = document.getElementById('header')
button.onclick = function() {
	menu.classList.toggle('show-menu');
	for (let i = 0; i < lil.length; i++) {
		lil[i].classList.toggle('show-lil')
	}
}
toTop.onclick = function() {
	header.scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	})
}