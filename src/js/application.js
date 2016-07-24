$('.mobile-menu-toggle').click(() => {
  $('.menu').toggleClass('mobile-menu-active')
})

$('.menu a').click(() => {
  $('.menu').removeClass('mobile-menu-active')
})
