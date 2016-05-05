$('.down-arrow').click(() => {
  $('html, body').animate({
    scrollTop: $('#team').offset().top
  }, 500)
})

function shuffle(a) {
  let j
  let x
  let i
  for (i = a.length; i; i -= 1) {
    j = Math.floor(Math.random() * i)
    x = a[i - 1]
    a[i - 1] = a[j]
    a[j] = x
  }
}

$('#team .row').each((i, e) => {
  const cards = ($(e).find('li'))
  shuffle(cards)
  $(e).html(cards)
})
