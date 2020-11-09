let button = document.querySelector('.menu-open');
let menu = document.querySelector('.menu');
let lil = document.getElementsByClassName('lil')
let q1 = document.getElementsByClassName('q1')[0]
let q2 = document.getElementsByClassName('q2')[0]
let q3 = document.getElementsByClassName('q3')[0]
let img = document.getElementsByClassName('item')[0]
let toTop = document.getElementById('idTop')
let header = document.getElementById('top')
button.onclick = function() {
    menu.classList.toggle('show-menu');
    for (let i = 0; i < lil.length; i++) {
        lil[i].classList.toggle('show-lil')
    }
}
// toTop.onclick = function() {
//     header.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//     })
// }
// q1.addEventListener('mouseenter',(e)=>{
//     let child = item[i].getElementsByClassName('order')[0];
//     child.style.display = 'block';
// })

q1.onclick = function () {
    img.src = "https://alanterz.com/image/cache/catalog/hoodies/Incurection%202.0-370x472.jpg"
}
q2.onclick = function () {
    img.src = "https://alanterz.com/image/cache/catalog/%20Цепи%203%20(1)-870x1110.jpg"
}
q3.onclick = function () {
    img.src = "https://alanterz.com/image/cache/catalog/hoodies/DSCF4608-870x1110.jpg"
}