if ($('.share').length > 0) {
    const shareBtn = $('.share__main-btn')
    const shareList = $('.share__list')

    function closeList() {
        shareBtn.removeClass('active')
        shareList.removeClass('active')
    }

    function showList() {
        shareBtn.addClass('active')
        shareList.addClass('active')
    }

    shareBtn.click(function() {
        shareBtn.hasClass('active') ? closeList() : showList()

        if (shareBtn.hasClass('active')) {
            $(document).on("touchstart click", function (e) {
                var div = shareList
                var btnFilter = shareBtn
                if (!div.is(e.target) && div.has(e.target).length === 0 && !btnFilter.is(e.target)) {
                    closeList()
                }
            });
        } 
    })

    $('.share__btn--close').click(closeList)

}