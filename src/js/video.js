const overlay = $('.video__overlay')

overlay.click(function(evt) {
    var video = $(this).closest(`.video`).find(`video`)

    if (overlay.hasClass(`active`)) {
        video.get(0).pause()
        overlay.removeClass(`active`)
        return
    }

    video.get(0).play()
    overlay.addClass(`active`)
})