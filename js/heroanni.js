//头部点击出现搜索框
$('.search i').on('click', function () {
  $('.head>.centent').fadeOut(300)
  $('.ssinput').fadeIn(300)
})
$('.close i').on('click', function () {
  $('.head>.centent').show()
  $('.ssinput').hide()
})
// 二维码显示效果
$('.zmicon').on('mouseenter', function () {
  $('.head-ewm-h').stop().animate({
    top: 57,
  }, 200)
  $('.head-ewm-h').show()
})
$('.zmicon').on('mouseleave', function () {
  $('.head-ewm-h').stop().animate({
    top: 54,
  }, 10)
  $('.head-ewm-h').hide()
})
$('.head-ewm-h').on('mouseenter', function () {
  $('.head-ewm-h').stop().animate({
    top: 57,
  }, 200)
  $('.head-ewm-h').show()
})
$('.head-ewm-h').on('mouseleave', function () {
  $('.head-ewm-h').stop().animate({
    top: 54,
  }, 10)
  $('.head-ewm-h').hide()
})
// 登录显示效果
$('.enroll').on('mouseenter', function () {
  $('.head-login').stop().animate({
    paddingTop: 78,
  })
  $('.head-login').show()
})
$('.head-login').on('mouseleave', function () {
  $('.head-login').stop().animate({
    paddingTop: 70,
  }, 10)
  $('.head-login').hide()
})
// 顶部菜单下拉效果
$('.head .centent>ul').on('mouseleave', function () {
  $('.head-nav').stop().animate({
    paddingTop: 80,
  }, 200)
  $('.head-nav').hide()
})
$('.head .centent>ul').on('mouseenter', function () {
  $('.head-nav').stop().animate({
    paddingTop: 88,
  }, 200)
  $('.head-nav').show()
})
$('.head-nav').on('mouseenter', function () {
  $('.head-nav').stop().animate({
    paddingTop: 88,
  })
  $('.head-nav').show()
})
$('.head-nav').on('mouseleave', function () {
  $('.head-nav').stop().animate({
    paddingTop: 80,
  })
  $('.head-nav').hide()
})
// 点击轮播图
let offWidth = $('.skin-lbt').width()
$('.skinbtn-all li').on('click', function () {
  $('.skinbtn-all li a').removeClass('bor')
  let index = $(this).index()
  $('.skin-all').animate({ 'left': -index * offWidth }, 200)
  $('.skinbtn-all li').eq(index).find('a').addClass('bor')
  $('.skinname').html($(this).find('a').attr('title'))
})