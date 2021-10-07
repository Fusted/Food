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

export default tabs   