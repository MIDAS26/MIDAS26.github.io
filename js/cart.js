// id, name, link-photo, price - obj of items этот жс файл в айтеме

function check(id) {
    console.log(id)
    let idcheck =  document.getElementById(id)
    idcheck.children[1].children[0].onclick = () => {
        let current = Number(idcheck.children[1].children[1].innerHTML)
        idcheck.children[1].children[1].innerHTML  = String(current + 1)
    }
    idcheck.children[1].children[2].onclick = () => {
        let current = Number(idcheck.children[1].children[1].innerHTML)
        if (idcheck.children[1].children[1].innerHTML!=='1'){
            idcheck.children[1].children[1].innerHTML  = String(current - 1)
        }
    }
}