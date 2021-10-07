import {getResourses} from '../services/service'

function cards(){
    class MenuCard {
        constructor(src, alt, title, text, price, parent, ...classes){
            this.src = src
            this.alt = alt
            this.title = title
            this.text = text 
            this.classes = classes
            this.price = price
            this.parent = document.querySelector(parent)
        }

         render() {
             const html = document.createElement('div')
             if (this.classes.length == 0){
                 html.classList.add('menu__item')
             } else {
                this.classes.forEach(className => html.classList.add(className))
             }
             
             html.innerHTML += `
                <img src="${this.src}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}"</h3>
                <div class="menu__item-descr">${this.text}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `
            this.parent.append(html)
         }
    }
    

    
    getResourses('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr,price}) => {
            new MenuCard(img, altimg, title, descr,price, '.menu .container').render()
        })
    })

    
}

export default cards