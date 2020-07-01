
$('.project-select__wrapper, .project-select__label').click(toggleSelect);
$('.project-select__item').click(checkSelectItem);

$(document).on("touchstart click", function (e) {
    var div = $('.project-select')
    if (!$('.project-select').hasClass('open')) {
        return
    }
    var btnFilter = $('.project-select__item')
    if ( !div.is(e.target) && div.has(e.target).length === 0 && !btnFilter.is(e.target)) {
        let currentSelect = $('.project-select')
        currentSelect.hasClass('open') ? $(currentSelect).removeClass('open') : $(currentSelect).addClass('open')
    }
  });

function toggleSelect() {
    let currentSelect = $(this).closest('.project-select')
    currentSelect.hasClass('open') ? $(currentSelect).removeClass('open') : $(currentSelect).addClass('open')
}

function checkSelectItem() {
    let dataVal = $(this).data('value')
    $('.project-select__item.active').removeClass('active')
    $('.project-select__label').text(dataVal)
    $(this).addClass('active')
    $('.project-select__input').attr('value', dataVal)
    $('.project-select').removeClass('open')
}
 