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


export default slider