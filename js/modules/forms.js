import {openModal, closeModal} from './modal'
import {postData} from '../services/service'

function forms(formSelector, modalTrigger) {
    // Forms
    const forms = document.querySelectorAll(formSelector)
    
    const message = {
        loading: 'img/spinner.svg',
        success: 'Все готово',
        failure: 'Ошибка',
    }


    forms.forEach(item => {
        bindPostData(item)
    })

    

    function bindPostData(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            
            const statusMessege = document.createElement('img')
            const statusMessegesrc = message.loading
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
                console.log(data)
                openModal(modalTrigger)
                showThanksModal(message.success)
            }).catch(() => {
                showThanksModal(message.failure)
            }).finally(() => {
                form.reset()
            })
        })
    }
    

    function showThanksModal(messege){
        const modal = document.querySelector(modalTrigger)
        
        const prevModal = document.querySelector('.modal__dialog ')
        prevModal.classList.add(`hidden`)
        prevModal.classList.remove(`show`)
        const newModal = document.createElement('div')
        newModal.classList.add('modal__dialog')
        newModal.innerHTML = `
        <div class="modal__content">
           <div data-btn-close class="modal__close">&times;</div>
           <div class="modal__title">${messege}</div>
           <button class="btn btn_dark btn_min">Перезвонить мне</button>
        </div>
        `
        
        modal.insertAdjacentElement('beforeend', newModal)  
  
        setTimeout(() => {
           newModal.remove()
           prevModal.classList.add(`show`)
           prevModal.classList.remove(`hidden`)
           
           closeModal(modalTrigger)
        }, 5000) 
     }
  
}

export default forms;



