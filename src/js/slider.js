$(`.slider`).slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: true,
    infinite: false,
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

$(`.slider-mode`).slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    dots: true,
    infinite: false,
    variableWidth: false,
    // appendDots: $(`.slider__dots`),
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
if ($('.logos-slider').length > 0) {
    const $slick_slider = $('.logos-slider');
    const settings = {
        slidesToShow: 8,
        slidesToScroll: 8,
        autoplay: true,
        arrows: false,
        dots: true,
        infinite: false,
        appendDots: $(`.slider__dots`),
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                    autoplay: true,
                    arrows: false,
                    dots: true,
                    infinite: false,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    autoplay: true,
                    arrows: false,
                    dots: true,
                    infinite: false,
                }
            },
        ]
    }

    if ($(window).width() > 640) {
        $slick_slider.slick(settings);
    }

    $(window).on('resize', function () {
        if ( $(window).width() < 640) {
            if ($slick_slider.hasClass('slick-initialized')) {
                $slick_slider.slick('unslick');
            }
            return
        }

        if (!$slick_slider.hasClass('slick-initialized')) {
            return $slick_slider.slick(settings);
        }
    });
}