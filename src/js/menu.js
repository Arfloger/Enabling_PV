let yCoard

function openMenu() {
    yCoard = window.pageYOffset;
    $(".mob-menu-back").addClass("opened")
    $('body').addClass('no-scroll')
    $('body').css({
        top: -yCoard + 'px'
    });
    $('.search').css({
        'z-index': -1
    })
    $('.lang').css({
        'z-index': -1
    })
};

function closeMenu() {
    $(".mob-menu-back").removeClass("opened")
    $('body').removeClass('no-scroll')
    $('body').removeAttr('style')
    $('.search').removeAttr('style')
    $('.lang').removeAttr('style')
    window.scrollTo(0, yCoard)
};

$(".burger").click(function (evt) {
    evt.preventDefault()
    openMenu()
});

$(".close-btn").click(function (evt) {
    evt.preventDefault()
    closeMenu()
});

$('.nav__item--inner').click(function () {

    if ($(this).hasClass('active')) {
        $(this).removeClass('active')
        $(this).find('.mob-inner-list').slideUp()
        return
    }

    $('.nav__item--inner.active').find('.mob-inner-list').slideUp()
    $('.nav__item--inner.active').removeClass('active')

    $(this).addClass('active')
    $(this).find('.mob-inner-list').slideDown()

});