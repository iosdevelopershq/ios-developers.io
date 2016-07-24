$('.down-arrow').click(() => {
  $('html, body').animate({
    scrollTop: $('#team').offset().top
  }, 500)
})

function shuffle(a) {
  const aa = a
  let j
  let x
  let i
  for (i = aa.length; i; i -= 1) {
    j = Math.floor(Math.random() * i)
    x = aa[i - 1]
    aa[i - 1] = aa[j]
    aa[j] = x
  }
}

$('#team .row').each((i, e) => {
  const cards = ($(e).find('li'))
  shuffle(cards)
  $(e).html(cards)
})
