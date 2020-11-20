const URL = 'http://my-json-server.typicode.com/MIDAS26/MIDAS26.github.io/db';
const section = document.getElementsByTagName('section')[0]
const head = document.getElementsByTagName('head')[0]


function getObj(url) {
    return fetch(url).then(data => data.json());
}

function renderItem(id) {
    head.removeChild(head.lastElementChild)
    let style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', 'css/item.css');
    head.appendChild(style)
    while (section.firstChild) {
        section.removeChild(section.firstChild)
    }
    JSON.stringify(getObj(URL).then(data => {
        for (let key in data.items) {
            console.log(data.items[key].id);
            if (data.items[key].id == id) {
                console.log('Item')
                let white = document.createElement('div');
                white.setAttribute('class', 'white');
                section.appendChild(white);
                let title = document.createElement('div');
                title.setAttribute('class', 'title');
                section.appendChild(title);
                let h1 = document.createElement('h1');
                h1.innerHTML = data.items[key].productName
                title.appendChild(h1);
                let containerMain = document.createElement('div');
                containerMain.setAttribute('class', 'container-main');
                section.appendChild(containerMain);
                let col = document.createElement('div');
                col.setAttribute('class', 'col');
                containerMain.appendChild(col);
                let image = document.createElement('div');
                image.setAttribute('class', 'image');
                col.appendChild(image);
                let item = document.createElement('img');
                item.setAttribute('class', 'item');
                item.setAttribute('src', data.items[key].images[0]);
                image.appendChild(item);
                let imgUl = document.createElement('ul');
                imgUl.setAttribute('class', 'img-ul');
                image.appendChild(imgUl);
                for (let i = 1; i < 4; i++) {
                    let li = document.createElement('li');
                    imgUl.appendChild(li);
                    let linkSImg = document.createElement('div');
                    linkSImg.setAttribute('class', 'link-s-img q' + i);
                    li.appendChild(linkSImg);
                    let SImg = document.createElement('img');
                    SImg.setAttribute('class', 's-img');
                    SImg.setAttribute('src', data.items[key].images[i]);
                    linkSImg.appendChild(SImg);
                }
                let colR = document.createElement('div');
                colR.setAttribute('class', 'col r')
                containerMain.appendChild(colR)
                let description = document.createElement('div');
                description.setAttribute('class', 'description')
                colR.appendChild(description)
                let sTitle = document.createElement('div');
                sTitle.setAttribute('class', 's-title')
                description.appendChild(sTitle)
                let h11 = document.createElement('h1');
                h11.innerHTML = data.items[key].productName
                sTitle.appendChild(h11)
                let price = document.createElement('div');
                price.setAttribute('class', 'price')
                description.appendChild(price)
                let h2 = document.createElement('h2');
                h2.innerHTML = data.items[key].price
                price.appendChild(h2)
                let ordering = document.createElement('div');
                ordering.setAttribute('class', 'ordering')
                description.appendChild(ordering)
                let button = document.createElement('button');
                button.innerHTML = 'Оформить заказ'
                ordering.appendChild(button)
                let textDescription = document.createElement('div');
                textDescription.setAttribute('class', 'text-description')
                description.appendChild(textDescription)
                let h5 = document.createElement('h5');
                h5.innerHTML = 'Описание'
                textDescription.appendChild(h5)
                let p = document.createElement('p');
                p.innerHTML = data.items[key].info
                textDescription.appendChild(p)
                let ul = document.createElement('ul');
                textDescription.appendChild(ul)
                for (let i = 0; i < 4; i++) {
                    let li = document.createElement('li');
                    li.innerHTML = data.items[key].materials[i]
                    ul.appendChild(li)
                }
                let sizeGrid = document.createElement('div');
                sizeGrid.setAttribute('class', 'size-grid')
                textDescription.appendChild(sizeGrid)
                let img = document.createElement('img');
                img.setAttribute('src', data.items[key].sizeGrid)
                sizeGrid.appendChild(img)
                setTimeout(() => {
                    let q1 = document.getElementsByClassName('q1')[0]
                    let q2 = document.getElementsByClassName('q2')[0]
                    let q3 = document.getElementsByClassName('q3')[0]
                    let img = document.getElementsByClassName('item')[0]
                    q1.onclick = function () {
                        img.src = data.items[key].images[0]
                    }
                    q2.onclick = function () {
                        img.src = data.items[key].images[4]
                    }
                    q3.onclick = function () {
                        img.src = data.items[key].images[5]
                    }
                }, 500);


            }
        }
    }))
}

function renderProducts() {
    head.removeChild(head.lastElementChild)
    let style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', 'css/products.css');
    head.appendChild(style);
    JSON.stringify(getObj(URL).then(data => {
        console.log('Products')
        let white = document.createElement('div');
        white.setAttribute('class', 'white');
        section.appendChild(white);
        let top = document.createElement('div');
        section.appendChild(top);
        let idTop = document.createElement('a');
        idTop.setAttribute('id', 'idTop');
        top.appendChild(idTop);
        let title = document.createElement('div');
        title.setAttribute('class', 'title');
        section.appendChild(title);
        let h1 = document.createElement('h1');
        h1.innerHTML = 'Товары'
        title.appendChild(h1);
        let container = document.createElement('div');
        container.setAttribute('class', 'container');
        section.appendChild(container);
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);
        let wrap1 = document.createElement('div');
        wrap1.setAttribute('class', 'wrap1');
        row.appendChild(wrap1)
        let wrap2 = document.createElement('div');
        wrap2.setAttribute('class', 'wrap2');
        row.appendChild(wrap2)
        c = 0
        for (let key in data.items) {
            c += 1
            let col = document.createElement('div');
            col.setAttribute('class', 'col-' + c);
            if (c<=3){
                wrap1.appendChild(col)
            }else {
                wrap2.appendChild(col)
            }
            let item = document.createElement('img');
            item.setAttribute('class', 'item');
            item.setAttribute('src', data.items[key].images[0]);
            col.appendChild(item)
            let h4 = document.createElement('h4');
            col.appendChild(h4)
            let name = document.createElement('a');
            name.setAttribute('class', 'name');
            name.innerHTML = data.items[key].productName
            h4.appendChild(name)
            let price = document.createElement('div');
            price.setAttribute('class', 'price');
            col.appendChild(price)
            let priceNew = document.createElement('span')
            priceNew.setAttribute('class', 'price-new')
            priceNew.innerHTML = data.items[key].price
            price.appendChild(priceNew)
            let some = document.createElement('div');
            some.setAttribute('class', 'some');
            some.setAttribute('onclick', "renderItem('" + data.items[key].id + "');");
            col.appendChild(some)
        }
    }))
}

renderProducts()

// setTimeout(() => {
//     let q1 = document.getElementsByClassName('q1')[0]
//     let q2 = document.getElementsByClassName('q2')[0]
//     let q3 = document.getElementsByClassName('q3')[0]
//     let img = document.getElementsByClassName('item')[0]
//     q1.onclick = function () {
//         img.src = "https://alanterz.com/image/cache/catalog/hoodies/Incurection%202.0-370x472.jpg"
//     }
//     q2.onclick = function () {
//         img.src = "https://alanterz.com/image/cache/catalog/Freedom%20Girl%202-870x1110.jpg"
//     }
//     q3.onclick = function () {
//         img.src = "https://alanterz.com/image/cache/catalog/Freedom%20Girl%202-870x1110.jpg"
//     }
// }, 2000);

