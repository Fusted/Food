/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc(){
    let person = {
        gender: 'female',
        activity: 1.375,
        height: 0,
        weight: 0,
        age: 0,
    }
    let gender = person.gender,
        height = person.height,
        weight = person.weight,
        age = person.age

    function checkLocal(key, parent){
        if (localStorage.getItem(key)){
            person[key] = localStorage.getItem(key)
            
            document.querySelectorAll(`#${key} .calculating__choose-item`).forEach(item =>{
                item.classList.remove('calculating__choose-item_active')
            })
            console.log
            document.getElementById(person[key]).classList.add('calculating__choose-item_active')
        }
    }
    checkLocal('gender')
    checkLocal('activity')
    getStaticInformation('#gender', '.calculating__choose-item', 'gender')
    getStaticInformation('#activity', '.calculating__choose-item', 'activity')
    getDynamicInformation('#height', 'height')
    getDynamicInformation('#weight', 'weight')
    getDynamicInformation('#age', 'age')

    
    if (localStorage.getItem('gender')){
        person.gender = localStorage.getItem('gender')

    }

    function getStaticInformation(parentSelector, activeClass, par){
        const parent = document.querySelector(parentSelector),
              items = document.querySelectorAll(`${parentSelector} ${activeClass}`)
              
        items.forEach(item => {
            item.addEventListener('click', e => {
                items.forEach(i =>{
                    i.classList.remove('calculating__choose-item_active')
                })
                e.target.classList.add('calculating__choose-item_active')
                person[par] = parent.querySelector('.calculating__choose-item_active').id 
                localStorage.setItem(par, person[par]) 
                calcTotal()
            })
        })
    }

    
    function getDynamicInformation(id, par){
        element = document.querySelector(id)
        element.addEventListener('input', e => {
            if (e.target.value.match(/\D/g)){
                e.target.style.border = '1px solid red'
            } else {
                e.target.style.border = 'none'
                person[par] = +e.target.value
                calcTotal()
            }
            
        })
    }
    let bmr
    function calcTotal(){
        if (!person.gender || !person.activity || !person.height || !person.weight || !person.age){
            
            return
        } else {
            console.log('flag')
            if (person.gender == 'female'){
                bmr  = (88.36 + (13.4 * person.weight) + (4.8 * person.height) - (5.7 * person.age) * person.activity)
            } else {
                bmr  = (447.6 + (9.2 * person.weight) + (3.1 * person.height) - (4.3 * person.age) * person.activity)
            }
            document.querySelector('.calculating__result span').textContent = Math.round(bmr)
        }
    }
}

module.exports = calc

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider(){
    //slides
    let slideIndex = 1,
        offset = 0

    const slides = document.querySelectorAll('.offer__slide'),
            slider = document.querySelector('.offer__slider-inner')
            prev = document.querySelector('.offer__slider-prev'),
            next = document.querySelector('.offer__slider-next'),
            total = document.querySelector('#total'),
            current = document.querySelector('#current'),
            slidesWrapper = document.querySelector('.offer__slider-wrapper'),
            width = window.getComputedStyle(slidesWrapper).width,
            slidesField = document.querySelector('.offer__slider-inner');

    
    slidesWrapper.style.overflow = 'hidden'

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slides.forEach(slide => {
        slide.style.width = slidesWrapper.width;
    });

    
    slidesWrapper.style.position = 'relative'

    const indicators = document.createElement('ol')
    indicators.classList.add('carousel-indicators')

    slidesWrapper.append(indicators)
    for (let i = 0; i < slides.length; i++){
        const dot = document.createElement('li')
        dot.classList.add('dot')
        dot.setAttribute(`data-slide-to`, i)
        indicators.append(dot)
    }

    const dots = document.querySelectorAll('.dot')
    
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            document.querySelector('.dot-active').classList.remove('dot-active')
            e.target.classList.add('dot-active')
            const a = e.target.getAttribute('data-slide-to')
            offset = +width.slice(0, (width.length - 2)) * a
            slidesField.style.transform = `translateX(-${offset}px)`
            setSlides(+a)
        })
    })


    function setSlides(i){
        slideIndex = i
        if (i < 10){
            current.textContent = `0${i + 1}`
        } else {
            current.textContent = i + 1
        }
    }

    next.addEventListener('click', () => {
        dots[slideIndex].classList.remove('dot-active')
        if (offset == +width.slice(0, (width.length - 2)) * (slides.length - 1)){
            setSlides(0)
            offset = 0
        } else {
            setSlides(slideIndex + 1)
            offset += +width.slice(0, (width.length - 2))
        }
        dots[slideIndex].classList.add('dot-active')
        slidesField.style.transform = `translateX(-${offset}px)`
    })

    prev.addEventListener('click', () => {
        dots[slideIndex].classList.remove('dot-active')
        if (offset == 0){
            setSlides(slides.length - 1)
            offset = +width.slice(0, (width.length - 2)) * (slides.length - 1)
        } else {
            setSlides(slideIndex -1)
            offset -= +width.slice(0, (width.length - 2))
        }    
        dots[slideIndex].classList.add('dot-active')
        slidesField.style.transform = `translateX(-${offset}px)`
    })
    setSlides(0)
    dots[0].classList.add('dot-active')
}


module.exports = slider

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs(){
    const tabItems = document.querySelectorAll('.tabcontent'),
        tabHeaderItem = document.querySelectorAll('.tabheader__items .tabheader__item')
    
    function hideTabs() {
        tabItems.forEach((item, i) => {
            item.classList.add('hidden')
            item.classList.remove('show')
            tabHeaderItem[i].classList.remove('tabheader__item_active')
        });
    } 

    function showTab(i = 0) {
        tabItems[i].classList.add('show', 'fade')
        tabItems[i].classList.add('hidden')
        tabHeaderItem[i].classList.add('tabheader__item_active')
    }
    
    tabHeaderItem.forEach((item, i) => { 
        item.addEventListener('click', () => {
            hideTabs()
            showTab(i) 
        }) 
    });
    hideTabs()
    showTab()
}

module.exports = tabs   

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer(){
    
    //timer
    function getTimeRemaining(endTime){
        t = Date.parse(endTime) - Date.parse(new Date())
        let days = Math.floor(t/(1000*60*60*24)),
            hours = Math.floor((t/(1000*60*60))%24),
            minutes = Math.floor((t/(1000*60))%60),
            seconds = Math.floor((t/(1000))%60)
        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        }
    }

    function setClock(selector, endTime){
        let timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds')
            
        updateClock()   
        timeInterval = setInterval(updateClock, 1000)
        
        function updateClock(){
            t = getTimeRemaining(endTime)
            days.textContent = t.days
            hours.textContent = t.hours
            minutes.textContent = t.minutes
            seconds.textContent = t.seconds 
            
            if (t.total <= 0){
                clearInterval(timeInterval)
            }
        }
        
    }
    
    
    deadline = '2022-01-01'
    setClock('.timer', deadline)
}

module.exports = timer

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

document.addEventListener('DOMContentLoaded', () =>{
    const calc = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js"),
          cards = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js"),
          modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js"),
          slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js"),
          tabs = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js"),
          timer = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js")


    calc()
    cards()
    modal()
    slider()
    tabs()
    timer()
})



    // fetch('http://localhost:3000/menu')
    // .then(data => (data.json()))
    
    


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map