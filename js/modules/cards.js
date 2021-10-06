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


    const getResourses = (async (url) => {
        const res = await fetch(url)

        if(!res){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    })

    
    axios.get('http://localhost:3000/menu')
    .then(data => {
        data.data.forEach(({img, altimg, title, descr,price}) => {
            new MenuCard(img, altimg, title, descr,price, '.menu .container').render()
        })
    })

    const forms = document.querySelectorAll('form')
    
    const message = {
        loading: 'img/spinner.svg',
        success: 'Все готово',
        failure: 'Ошибка'
    }


    forms.forEach(item => {
        bindPostData(item)
    })

    const postData = (async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json'}
        })

        return await res.json()
    })

    function bindPostData(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            
            const statusMessege = document.createElement('img')
            statusMessegesrc = message.loading
            statusMessege.textContent = message.loading
            statusMessege.style.cssText = `
                display: block;
                margin: 0 auto;
            `
            
            const formData = new FormData(form) //
            
            const json = JSON.stringify(Object.fromEntries(formData.entries()))
            

            form.insertAdjacentElement('afterend', statusMessege)
        
            postData('http://localhost:3000/requests', json)
            .then((data) => {
                openModal()
                showThanksModal(message.success)
            }).catch(() => {
                showThanksModal(message.failure)
            }).finally(() => {
                form.reset()
            })
        })
    }
}

module.exports = cards