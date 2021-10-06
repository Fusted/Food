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