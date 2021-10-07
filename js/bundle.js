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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
        
        const element = document.querySelector(id)
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

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/service */ "./js/services/service.js");


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
    

    
    Object(_services_service__WEBPACK_IMPORTED_MODULE_0__["getResourses"])('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr,price}) => {
            new MenuCard(img, altimg, title, descr,price, '.menu .container').render()
        })
    })

    
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/service */ "./js/services/service.js");



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
            Object(_services_service__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', json)
            .then((data) => {
                console.log(data)
                Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])(modalTrigger)
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
           
           Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(modalTrigger)
        }, 5000) 
     }
  
}

/* harmony default export */ __webpack_exports__["default"] = (forms);



/*
  const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });
    
        return await res.json();
    };



    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
        
            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }
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
*/

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default, openModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
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


/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider(){
    //slides
    let slideIndex = 1,
        offset = 0
        
    const slides = document.querySelectorAll('.offer__slide'),
            slider = document.querySelector('.offer__slider-inner'),
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


/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabSelector, tabHeaderItemSelector, activeClass){
    const tabItems = document.querySelectorAll(tabSelector),
        tabHeaderItem = document.querySelectorAll(tabHeaderItemSelector)
    
    function hideTabs() {
        tabItems.forEach((item, i) => {
            item.classList.add('hidden')
            item.classList.remove('show')
            tabHeaderItem[i].classList.remove(activeClass)
        });
    } 

    function showTab(i = 0) {
        hideTabs()
        tabItems[i].classList.add('show')
        tabItems[i].classList.remove('hidden')
        tabHeaderItem[i].classList.add(activeClass)
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

/* harmony default export */ __webpack_exports__["default"] = (tabs);   

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(id, deadline){
    
    //timer
    function getTimeRemaining(endTime){
        let t = Date.parse(endTime) - Date.parse(new Date()),
             days = Math.floor(t/(1000*60*60*24)),
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
        const timeInterval = setInterval(updateClock, 1000)
        
        function updateClock(){
            let t = getTimeRemaining(endTime)
            days.textContent = t.days
            hours.textContent = t.hours
            minutes.textContent = t.minutes
            seconds.textContent = t.seconds 
            
            if (t.total <= 0){
                clearInterval(timeInterval)
            }
        }
        
    }
    
    setClock(id, deadline)
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");








document.addEventListener('DOMContentLoaded', () =>{
    Object(_modules_forms__WEBPACK_IMPORTED_MODULE_6__["default"])('form', '.modal')
    Object(_modules_cards__WEBPACK_IMPORTED_MODULE_1__["default"])()
   // modal('[data-btn]', '.modal')
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"])()
    Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_4__["default"])('.tabcontent', '.tabheader__items .tabheader__item', 'tabheader__item_active')
   // timer('.timer', '2022-01-01')
    Object(_modules_calc__WEBPACK_IMPORTED_MODULE_0__["default"])()
})



    // fetch('http://localhost:3000/menu')
    // .then(data => (data.json()))
    
    


/***/ }),

/***/ "./js/services/service.js":
/*!********************************!*\
  !*** ./js/services/service.js ***!
  \********************************/
/*! exports provided: getResourses, postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourses", function() { return getResourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
const postData = (async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json'}
    })

    return await res.json()
})

const getResourses = (async (url) => {
    const res = await fetch(url)

    if(!res){
        throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }

    return await res.json()
})





/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map