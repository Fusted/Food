function modal(){
     // модальное окно
     const modal = document.querySelector('.modal'), 
     bttn = document.querySelectorAll('[data-btn]')
     

      function openModal(){
         modal.classList.add('show')
         modal.classList.remove('hidden')
         document.body.style.overflow = 'hidden'
         //clearInterval(startModalId)
      }

      function closeModal(){
         modal.classList.add('hidden')
         modal.classList.remove('show')
         document.body.style.overflow = ''
      }
      bttn.forEach(e => {
         e.addEventListener('click', () => {
            openModal()
         })
      })



      modal.addEventListener('click', (e) => {
         if (e.target === modal || e.target.getAttribute('data-btn-close') == ''){
            closeModal()
         }
         
      })

      document.addEventListener('keydown', (e) => {
         if (e.code === 'Escape' && document.body.style.overflow === 'hidden'){
            closeModal()
         }
      });

      //const startModalId = setTimeout(openModal, 15000)

      function showModalByScroll(){
         if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal()
            window.removeEventListener('scroll', showModalByScroll)
         }
      }
      //window.addEventListener('scroll', showModalByScroll)
      function showThanksModal(messege){
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
         const modal = document.querySelector('.modal')
         modal.insertAdjacentElement('beforeend', newModal)  

         setTimeout(() => {
            newModal.remove()
            prevModal.classList.add(`show`)
            prevModal.classList.remove(`hidden`)
            closeModal()
         }, 5000) 
      }
}

module.exports = modal