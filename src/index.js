import 'slick-carousel'
//import '@fancyapps/fancybox'

// import './js/common'
// import './js/lang'
// import './js/select'
// import './js/menu'
// import './js/header'
// import './js/contact-card'


import './assets/scss/main.scss'
import './assets/css/main.css'

$(`.slider`).slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: true,
    infinite: true,
    variableWidth: false,
    appendDots: $(`.slider__dots`),
    prevArrow: $(`.slider__prev`),
    nextArrow: $(`.slider__next`),
    responsive: [{
        breakpoint: 641,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
    },
    {
        breakpoint: 481,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrow: false,
            variableWidth: true
        }
    }]

})