function openModal(modalTrigger, startModalId){
   const modal = document.querySelector(modalTrigger)
   modal.classList.add('show')
   modal.classList.remove('hidden')
   document.body.style.overflow = 'hidden'
   if (startModalId){
      clearInterval(startModalId) 
   }
}

function closeModal(modalTrigger){
   const modal = document.querySelector(modalTrigger)

   modal.classList.add('hidden')
   modal.classList.remove('show')
   document.body.style.overflow = ''
}

function modal(bttnModal, modalTrigger){
     // модальное окно
   const modal = document.querySelector(modalTrigger), 
   bttn = document.querySelectorAll(bttnModal)
   
   bttn.forEach(e => {
      e.addEventListener('click', () => {
         openModal(modalTrigger, startModalId)
      })
   })

   modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.getAttribute('data-btn-close') == ''){
         closeModal(modalTrigger)
      }
      
   })

   document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && document.body.style.overflow === 'hidden'){
         closeModal(modalTrigger)
      }
   });

   const startModalId = setTimeout(() => openModal(modalTrigger), 3000)

   function showModalByScroll(){
      if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
         openModal(modalTrigger, startModalId)
         window.removeEventListener('scroll', showModalByScroll)
      }
   }
   window.addEventListener('scroll', showModalByScroll)
   
}


export default modal
export {openModal}
export {closeModal}