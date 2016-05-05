$('.down-arrow').click(() => {
  $('html, body').animate({
    scrollTop: $('#team').offset().top
  }, 500)
})
