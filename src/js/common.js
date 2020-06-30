$('.input-field input, .input-field textarea').each(function(i, it) {
    $(it).val().length > 0 ? $(it).closest('.input-field').find('label').addClass('active') : null;
});

$('.input-field input, .input-field textarea').focus(function () {
    $(this).closest('.input-field').find('label').addClass('active');
})

$('.input-field input, .input-field textarea').blur(function () {
    if ($(this).val().trim()) {
        return
    }
    $(this).closest('.input-field').find('label').removeClass('active');
});
