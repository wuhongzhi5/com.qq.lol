//侧边栏
let head = $('.legend-bottom').offset().top
let db = $('.legend-head').offset().top
let sec1 = $('.sec1').offset().top
let sec2 = $('.sec2').offset().top
let sec3 = $('.sec3').offset().top
let sec4 = $('.sec4').offset().top
let sec5 = $('.sec5').offset().top
$(document).scroll(function () {
  if ($(this).scrollTop() >= head) {
    $('.top-jt').css('color', '#eed49d')
    $('.top-jt').on('mouseleave', function () {
      $(this).css('color', '#eed49d')
    })
  } else {
    $('.top-jt').css('color', '#fff')
    $('.top-jt').on('mouseleave', function () {
      $(this).css('color', '#fff')
    })
  }
  if ($(this).scrollTop() < db) {
    $('.top-jt').css('color', '#eed49d')
    $('.top-jt').on('mouseleave', function () {
      $(this).css('color', '#eed49d')
    })
  }
  if ($(this).scrollTop() >= head && $(this).scrollTop() < sec2) {
    $('.nav2').css('color', '#fff')
    $('.nav2 i').show()
    show('.nav2')
  } else {
    $('.nav2').css('color', '#eed49d')
    $('.nav2 i').hide()
    hide('.nav2')
  }
  if ($(this).scrollTop() >= sec2 && $(this).scrollTop() < sec3) {
    $('.nav3').css('color', '#fff')
    $('.nav3 i').show()
    show('.nav3')
  } else {
    $('.nav3').css('color', '#eed49d')
    $('.nav3 i').hide()
    hide('.nav3')
  }
  if ($(this).scrollTop() >= sec3 && $(this).scrollTop() < sec4) {
    $('.nav4').css('color', '#fff')
    $('.nav4 i').show()
    show('.nav4')
  } else {
    $('.nav4').css('color', '#eed49d')
    $('.nav4 i').hide()
    hide('.nav4')
  }
  if ($(this).scrollTop() >= sec4 && $(this).scrollTop() < sec5) {
    $('.nav5').css('color', '#fff')
    $('.nav5 i').show()
    show('.nav5')
  } else {
    $('.nav5').css('color', '#eed49d')
    $('.nav5 i').hide()
    hide('.nav5')
  }
})
let flag = true
$('.top-jt').on('click', function () {
  flag = false
  $('html').animate({ 'scrollTop': db }, 1000)
})
$('.side-nav a:nth-child(-n+6)').on('mouseenter', function () {
  $(this).find('i').show()
  $(this).css('color', '#fff')
})
$('.side-nav a:nth-child(-n+6)').on('mouseleave', function () {
  $(this).find('i').hide()
  $(this).css('color', '#eed49d')
})
function hide(name) {
  $('.side-nav a:nth-child(-n+6)').on('mouseleave', function () {
    $(name).find('i').hide()
    $(name).css('color', '#eed49d')
  })
}
function show(name) {
  $('.side-nav a:nth-child(-n+6)').on('mouseleave', function () {
    $(name).find('i').show()
    $(name).css('color', '#fff')
  })
}
$('.top-jt').on('mouseenter', function () {
  $(this).css('color', '#fff')
})
$('.top-jt').on('mouseleave', function () {
  $(this).css('color', '#eed49d')
})
let video1 = $('.video-1').offset().top
$('.nav1').on('click', function () {
  $('html').animate({ 'scrollTop': video1 }, 1000)
})
$('.nav2').on('click', function () {
  $('html').animate({ 'scrollTop': sec1 }, 1000)
})
$('.nav3').on('click', function () {
  $('html').animate({ 'scrollTop': sec2 }, 1000)
})
$('.nav4').on('click', function () {
  $('html').animate({ 'scrollTop': sec3 }, 1000)
})
$('.nav5').on('click', function () {
  $('html').animate({ 'scrollTop': sec4 }, 1000)
})
$('.nav6').on('click', function () {
  $('html').animate({ 'scrollTop': sec5 }, 1000)
})
if ($(document).scrollTop() >= head) {
  $('.top-jt').css('color', '#eed49d')
  $('.top-jt').on('mouseleave', function () {
    $(this).css('color', '#eed49d')
  })
} else if ($(document).scrollTop() < head) {
  $('.top-jt').css('color', '#fff')
  $('.top-jt').on('mouseleave', function () {
    $(this).css('color', '#fff')
  })
}