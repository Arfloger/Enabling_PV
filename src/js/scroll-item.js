function scrollNav() {
    $("a[href^='#scroll-']").on('click', function () {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top - 60 + "px"
        });
        return false;
    });
}
scrollNav();