$('.down-arrow').click(() => {
  $('html, body').animate({
    scrollTop: $('#team').offset().top
  }, 500)
})

$('.mobile-menu-toggle').click(() => {
  $('.menu').toggleClass('mobile-menu-active')
})
