$('.down-arrow').click(function() {
  $('html, body').animate({
    scrollTop: $('#team').offset().top
  }, 500)
})
