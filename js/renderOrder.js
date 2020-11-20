const name = 'cart'
const container = document.getElementsByClassName('column')[0]
let local = [{id: 'q1', counter: 1},{id: 'q2', counter: 1},{id: 'q3', counter: 1}]

// function getLocal() {
//     let arr = []
//     if (localStorage.getItem(name) == null) {
//         arr = []
//     } else {
//         let object = localStorage.getItem(name)
//         arr = JSON.parse(object)
//     }
//     return arr
// }

window.onload = () => {
    localStorage.setItem(name, JSON.stringify(local))
    render()
}
function render() {
    if (localStorage.getItem(name)) {
        let items = JSON.parse(localStorage.getItem(name))
        items.forEach((obj) => {
            let item = document.createElement('div');
            item.setAttribute('id', obj.id);
            item.setAttribute('class','block');
            item.setAttribute('onclick', "check('"+obj.id+"')");
            container.appendChild(item)
            let block = document.createElement('div');
            block.setAttribute('class','img-title');
            item.appendChild(block)
            let img = document.createElement('img');
            img.setAttribute('class','bask-img')
            img.setAttribute('src','https://alanterz.com/image/cache/catalog/hoodies/Remtants%20of%20the%20past%20(1)-100x100.png')
            block.appendChild(img)
            let desc = document.createElement('div');
            desc.setAttribute('class','desc');
            block.appendChild(desc)
            let h4 = document.createElement('h4');
            h4.innerHTML = '123123'
            desc.appendChild(h4)
            let p = document.createElement('p');
            p.innerHTML = '1233'
            desc.appendChild(p)
            let count = document.createElement('div');
            count.setAttribute('class','count')
            item.appendChild(count)
            let plus = document.createElement('button');
            plus.setAttribute('class','plus')
            plus.innerHTML = '+'
            count.appendChild(plus)
            let counter = document.createElement('p');
            counter.setAttribute('class','counter')
            counter.innerHTML = obj.counter
            count.appendChild(counter)
            let minus = document.createElement('button');
            minus.setAttribute('class','minus')
            minus.innerHTML = '-'
            count.appendChild(minus)
            let trash = document.createElement('img')
            trash.setAttribute('src', 'img/close-512.png')
            trash.setAttribute('style','width: 27px;height: 27px;margin-bottom: 0px;')
            item.appendChild(trash)
            let hr = document.createElement('hr');
            hr.setAttribute('style',"width: 100%;")
            container.appendChild(hr)
        })
    }
}
function createObject() {
    return {id: 123, counter: 1, size: '' }
}



