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