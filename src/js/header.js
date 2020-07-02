$(window).scroll(function() {
    const header = $(`.main-header`)
    if ($(window).scrollTop() > 10 && header.hasClass(`border`)) {
        return
    } else if ($(window).scrollTop() < 10) {
        header.removeClass(`border`)
        return
    }
    header.addClass(`border`)
})