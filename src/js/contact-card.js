if ($('.contact-cards').length > 0) {
    const $slick_slider = $('.contact-cards');
    const settings = {
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                infinite: false,
                variableWidth: true
            }
        }]
    }

    if ($(window).width() <= 480) {
        $slick_slider.slick(settings);
    }

    $(window).on('resize', function () {
        if ($(window).width() > 479) {
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
