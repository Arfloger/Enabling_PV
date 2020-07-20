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

const resetForm = () => {
    $(`.input-field`).removeClass(`error`)
    $(`.project-input`).val(``)
    $(`.project-textarea`).val(``)
    $(`.project-select__item`).removeClass(`active`)
    $(`.project-select__label`).text(`Кто вы?`)
    $(`.error-text`).removeClass(`open`)
    $(`.contacts-form__button`).attr(`disabled`, `disabled`)
}

// Сброс формы тест
$(`.contacts-form__button`).click(resetForm)