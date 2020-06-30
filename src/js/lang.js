if ($('.lang').length > 0) {
    const langBtn = $('.lang__btn--main')
    const langList = $('.lang__list')

    function closeList() {
        langBtn.removeClass('active')
        langList.removeClass('active')
    }

    function showList() {
        langBtn.addClass('active')
        langList.addClass('active')
    }

    langBtn.click(function() {
        langBtn.hasClass('active') ? closeList() : showList()

        if (langBtn.hasClass('active')) {
            $(document).on("touchstart click", function (e) {
                if (!langList.is(e.target) && langList.has(e.target).length === 0 && !langBtn.is(e.target)) {
                    closeList()
                }
            });
        } 
    })

    $('.lang__btn--close').click(closeList)
}
