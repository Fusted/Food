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

export default timer