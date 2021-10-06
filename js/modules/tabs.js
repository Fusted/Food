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