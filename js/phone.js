$('.navu li:nth-child(-n+8').on('click', function () {
  let index = $(this).index()
  $('.navu li').removeClass('moren')
  $(this).addClass('moren')
  $(this).css('color', '#fff')
  if (index < $('.navu li').length - 1) {
    $('.main').removeClass('main-show')
    $('.main').eq(index).addClass('main-show')
  }
  if ($('.main').eq(index).height() < 540) {
    $('.main').eq(index).css('height', '540px')
  }
})
$('.navu li').on('mouseenter', function () {
  if ($(this).hasClass('moren')) {
    $(this).css('color', '#fff')
  } else {
    $(this).css('color', '#c08c02')
  }
})
$('.navu li').on('mouseleave', function () {
  $(this).css('color', '#fff')
})