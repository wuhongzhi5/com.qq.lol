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
// 顶部固定功能
$(document).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $('.head-bck').animate({ height: 360 })
    $('.big').hide()
    $('.small').show()
    $('.look').css('bottom', '32px')
  }
})
// 第一部分轮播图
let index = 0
let w = $('.lbt')[0].offsetWidth
$('.lbt ul').width($('.lbt ul li').length * w)
$('.lbt-tab span').on('mouseover', function () {
  $('.lbt-tab span').removeClass('xuanding')
  index = $(this).index()
  $('.lbt ul').stop().animate({
    left: -index * w
  }, 200)
  $('.lbt-tab span').eq(index).addClass('xuanding')
})
setInterval(function () {
  $('.lbt-tab span').removeClass('xuanding')
  index++
  if (index >= $('.lbt ul li').length) {
    index = 0
    $('.lbt ul').stop().animate({
      left: 0
    })
    $('.lbt-tab span').eq(0).addClass('xuanding')
  } else {
    $('.lbt ul').stop().animate({
      left: -index * w
    }, 200)
    $('.lbt-tab span').eq(index).addClass('xuanding')
  }
}, 3000)
//第一部分右侧tab切换
$('.tab-top ul li').on('mouseover', function () {
  let index = $(this).index()
  $('.tab-top ul li').removeClass('tab-top-xd')
  $(this).addClass('tab-top-xd')
  $('.new ul').removeClass('new-show')
  $('.new ul').eq(index).addClass('new-show')
})
//热门活动tab切换
$('.hot-top ul li').on('mouseover', function () {
  let index = $(this).index()
  $('.hot-top ul li').removeClass('tab-top-xd')
  $(this).addClass('tab-top-xd')
  $('.hot-bottom ul').removeClass('hot-show')
  $('.hot-bottom ul').eq(index).addClass('hot-show')
})
//视频显示，鼠标移入第一板块视频显示下拉
$('.hero-right').on('mouseenter', function () {
  $('.video-show').fadeIn(200)
  $('.tx-video video')[0].play()
  $('.more').stop().animate({ 'overflow': 'visible', 'marginTop': '42px', 'height': '117px' }, 300)
})
$('.video-show').on('mouseleave', function () {
  $('.video-show').fadeOut(0)
  $('.tx-video video')[0].pause()
  $('.more').stop().animate({ 'overflow': 'hidden', 'marginTop': '0', 'height': '0' }, 300)
})
$('.more').on('mouseenter', function () {
  $('.more').stop().animate({ 'overflow': 'visible', 'marginTop': '42px', 'height': '117px' }, 300)
})
$('.more').on('mouseleave', function () {
  $('.more').stop().animate({ 'overflow': 'hidden', 'marginTop': '0', 'height': '0' }, 300)
})
//10.8显示
$('.nav1').on('mouseenter', function () {
  $('.nav1-hover').fadeIn(200)
})
$('.nav1-hover').on('mouseleave', function () {
  $('.nav1-hover').fadeOut(0)
})
//鼠标移入周免显示周免
$('.weekfree').on('mouseenter', function () {
  $('.week-hover').show()
  $('.week-hover').stop().animate({ 'top': '315px' }, 200)
})
$('.weekfree').on('mouseleave', function () {
  $('.week-hover').hide()
  $('.week-hover').stop().animate({ 'top': '310px' })
})
$('.week-hover').on('mouseenter', function () {
  $('.week-hover').show()
  $('.week-hover').stop().animate({ 'top': '315px' }, 200)
})
$('.week-hover').on('mouseleave', function () {
  $('.week-hover').hide()
  $('.week-hover').stop().animate({ 'top': '310px' })
})
//最新视频tab切换
$('.new-video-top>ul li').on('mouseover', function () {
  let index = $(this).index()
  console.log(index)
  $('.new-video-top>ul li').removeClass('tab-top-xd')
  $(this).addClass('tab-top-xd')
  $('.new-video>ul').removeClass('video-item')
  $('.new-video>ul').eq(index).addClass('video-item')
  if (index == 0) {
    $('.new-video-top span').text('换一批').append('<i></i>')
    $('.new-video-top span i').css('background-position', '-369px -46px')
  } else {
    $('.new-video-top span').text('下一页').append('<i></i>')
    $('.new-video-top span i').css('background-position', '-308px -99px')
  }
})
//热门专辑轮播图
let num = 0
let flag = true
let lbtLeft = $('.program-bottom').width() + 15
$('.program-right').on('click', function () {
  if (flag) {
    flag = false
    num++
    $('.program-bottom-show').stop().animate({ 'left': -num * lbtLeft }, 300, function () {
      flag = true
    })
    if (num == 2) {
      num = 0
      $('.program-bottom-show').animate({ 'left': num }, 0)
    }
  }
})
$('.program-left').on('click', function () {
  if (flag) {
    flag = false
    if (num == 0) {
      num = 2
      $('.program-bottom-show').animate({ 'left': -num * lbtLeft }, 0)
    }
    num--
    $('.program-bottom-show').animate({ 'left': -num * lbtLeft }, 300, function () {
      flag = true
    })
  }
})

//热门专辑tab切换
$('.program-top>ul li').on('mouseover', function () {
  num = 0
  $('.program-bottom-show').animate({ 'left': num }, 0)
  let index = $(this).index()
  $('.program-top>ul li').removeClass('tab-top-xd')
  $(this).addClass('tab-top-xd')
  $('.program-bottom ul').removeClass('program-bottom-show')
  $('.program-bottom ul').eq(index).addClass('program-bottom-show')
})
//热门专辑轮播图自动轮播
let timer = setInterval(function () {
  $('.program-right').click()
}, 3000)
$('.program-bottom').on('mouseover', function () {
  clearInterval(timer)
})
$('.program-bottom').on('mouseout', function () {
  timer = setInterval(function () {
    $('.program-right').click()
  }, 3000)
})
//赛事中心swiper轮播
var swiper = new Swiper('.game-show', {
  slidesPerView: 5,
  slidesPerGroup: 5,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//积分榜滚动条
var s = new Swiper('.list', {
  direction: 'vertical',
  slidesPerView: 'auto',
  freeMode: true,
  scrollbar: {
    el: '.swiper-item',
    draggable: true,
    snapOnRelease: false
  },
  mousewheel: true
});
s.scrollbar.$dragEl.css('background', '#abc0c3');
s.scrollbar.$el.css({ 'backgroundColor': '#fff' })
$('.list').on('mouseover', function () {
  s.scrollbar.$el.css('width', '8px');
})
$('.list').on('mouseout', function () {
  s.scrollbar.$el.css('width', '5px');
})
//赛事中心tab切换
let arr = []
let gameTab1 = $('.game-container')
let gameTab2 = $('.game-sec')
arr.push(gameTab1, gameTab2)
$('.game-top>ul li').on('mouseover', function () {
  let index = $(this).index()
  $('.game-top>ul li').removeClass('tab-top-xd')
  $(this).addClass('tab-top-xd')
  for (let i = 0; i < arr.length; i++) {
    arr[i].removeClass('match-show')
  }
  arr[index].addClass('match-show')
})
//英雄资料滚动条
function fn() {
  var hero = new Swiper('.heropeople', {
    //上下滑动
    direction: 'vertical',
    // 设置slider容器能够同时显示的slides数量,'auto'则自动根据slides的宽度来设定数量
    slidesPerView: 'auto',
    // slide会根据惯性滑动可能不止一格且不会贴合。
    freeMode: true,
    //滚动条
    scrollbar: {
      el: '.swiper-hero',
      draggable: true,
      snapOnRelease: false
    },
    mousewheel: true,
    //启动动态检查器,自动初始化swiper
    observer: true,
  })
  hero.scrollbar.$dragEl.css('background', '#abc0c3');
  hero.scrollbar.$el.css({ 'backgroundColor': 'transparent' })
  $('.heropeople').on('mouseover', function () {
    hero.scrollbar.$el.css('width', '10px');
  })
  $('.heropeople').on('mouseout', function () {
    hero.scrollbar.$el.css('width', '5px');
  })
}
fn()
//英雄资料tab切换
var ss = 0
$('.hero-ul li').on('mouseover', function () {
  $(this).addClass('hero-li')
})
$('.hero-ul li').on('mouseout', function () {
  $(this).removeClass('hero-li')
  $('.hero-ul li').eq(ss).addClass('hero-li')
})
$('.hero-ul li').on('click', function () {
  ss = $(this).index()
  $('.hero-ul li').removeClass('hero-li')
  $(this).addClass('hero-li')
  $('.heropeople ul').removeClass('hero-hide')
  $('.heropeople ul').eq(ss).addClass('hero-hide')
  fn()
})
//合作媒体滚动条
var work = new Swiper('.partener-container', {
  direction: 'vertical',
  slidesPerView: 'auto',
  freeMode: true,
  scrollbar: {
    el: '.swiper-work',
    draggable: true,
    snapOnRelease: false
  },
  mousewheel: true,
  observer: true,
});
work.scrollbar.$dragEl.css('background', '#abc0c3');
work.scrollbar.$el.css({ 'backgroundColor': '#fff' })
$('.partener-container').on('mouseover', function () {
  work.scrollbar.$el.css('width', '8px');
})
$('.partener-container').on('mouseout', function () {
  work.scrollbar.$el.css('width', '5px');
})
//合作媒体移入显示
$('#fanart-partener').on('mouseenter', function () {
  $('.partener-container').fadeIn(10).animate({ 'top': '58px' }, 100)
})
$('#fanart-partener').on('mouseleave', function () {
  $('.partener-container').fadeOut(0).animate({ 'top': '54px' }, 20)
})
//侧边栏
function initial() {
  //移入
  $('.remen').on('mouseenter', function () {
    $('.remen a').css({ 'color': '#309cac', 'fontWeight': '700' })
    $('.remen i').css({ 'backgroundPosition': '-216px -99px', 'animation': ' nav ease 1.5s' })
  })
  $('.videocenter').on('mouseenter', function () {
    $('.videocenter a').css({ 'color': '#309cac', 'fontWeight': '700' })
    $('.videocenter i').css({ 'backgroundPosition': '-193px -99px', 'animation': ' nav ease 1.5s' })
  })
  $('.contest').on('mouseenter', function () {
    $('.contest a').css({ 'color': '#309cac', 'fontWeight': '700' })
    $('.contest i').css({ 'backgroundPosition': '-247px -46px', 'animation': ' nav ease 1.5s' })
  })
  $('.heroziliao').on('mouseenter', function () {
    $('.heroziliao a').css({ 'color': '#309cac', 'fontWeight': '700' })
    $('.heroziliao i').css({ 'backgroundPosition': '-293px -72px', 'animation': ' nav ease 1.5s' })
  })
  $('.fanartnav').on('mouseenter', function () {
    $('.fanartnav a').css({ 'color': '#309cac', 'fontWeight': '700' })
    $('.fanartnav i').css({ 'backgroundPosition': '-258px -12px', 'animation': ' nav ease 1.5s' })
  })
  //移出
  $('.remen').on('mouseleave', function () {
    $('.remen a').css({ 'color': '#92a8ab', 'fontWeight': '400' })
    $('.remen i').css({ 'backgroundPosition': '-239px -99px', 'animation': ' na' })
  })
  $('.videocenter').on('mouseleave', function () {
    $('.videocenter a').css({ 'color': '#92a8ab', 'fontWeight': '400' })
    $('.videocenter i').css({ 'backgroundPosition': '-262px -99px', 'animation': ' na' })
  })
  $('.contest').on('mouseleave', function () {
    $('.contest a').css({ 'color': '#92a8ab', 'fontWeight': '400' })
    $('.contest i').css({ 'backgroundPosition': '-220px -46px', 'animation': ' na' })
  })
  $('.heroziliao').on('mouseleave', function () {
    $('.heroziliao a').css({ 'color': '#92a8ab', 'fontWeight': '400' })
    $('.heroziliao i').css({ 'backgroundPosition': '-269px -72px', 'animation': ' na' })
  })
  $('.fanartnav').on('mouseleave', function () {
    $('.fanartnav a').css({ 'color': '#92a8ab', 'fontWeight': '400' })
    $('.fanartnav i').css({ 'backgroundPosition': '-287px -12px', 'animation': ' na' })
  })
  let wrap1 = $('.wrap1').offset().top
  let wrap2 = $('.wrap2').offset().top
  let wrap3 = $('.wrap3').offset().top
  let wrap4 = $('.wrap4').offset().top
  let wrap5 = $('.wrap5').offset().top - 100
  //卷曲高度到一定值时显示动画
  if ($(this).scrollTop() >= wrap1) {
    $('.sidebar ul').stop().animate({ 'height': '368px' }, 500)
    $('.polo-top i').css({ 'animation': 'nav ease 1.5s' })
  } else {
    $('.sidebar ul').stop().animate({ 'height': '310px' }, 500)
    $('.polo-top i').css({ 'animation': ' na' })
  }
  if ($(this).scrollTop() >= wrap1 && $(this).scrollTop() < wrap2) {
    $('.remen a').css({ 'color': '#309cac', 'fontWeight': '700' })
    $('.remen i').css({ 'backgroundPosition': '-216px -99px', 'animation': ' nav ease 1.5s' })
    //移出当前显示的li时继续亮着
    $('.remen').on('mouseleave', function () {
      $('.remen i').css({ 'backgroundPosition': '-216px -99px', 'animation': ' nav' })
      $('.remen a').css({ 'color': '#309cac', 'fontWeight': '700' })
    })
  } else {
    $('.remen a').css({ 'color': '#92a8ab', 'fontWeight': '400' })
    $('.remen i').css({ 'backgroundPosition': '-239px -99px', 'animation': 'na' })
  }
  if ($(this).scrollTop() >= wrap2 && $(this).scrollTop() < wrap3) {
    $('.videocenter a').css({ 'color': '#309cac', 'fontWeight': '700' })
    $('.videocenter i').css({ 'backgroundPosition': '-193px -99px', 'animation': ' nav ease 1.5s' })
    $('.videocenter').on('mouseleave', function () {
      $('.videocenter i').css({ 'backgroundPosition': '-193px -99px', 'animation': ' nav' })
      $('.videocenter a').css({ 'color': '#309cac', 'fontWeight': '700' })
    })
  } else {
    $('.videocenter a').css({ 'color': '#92a8ab', 'fontWeight': '400' })
    $('.videocenter i').css({ 'backgroundPosition': '-262px -99px', 'animation': 'na' })
  }
  if ($(this).scrollTop() >= wrap3 && $(this).scrollTop() < wrap4) {
    $('.contest a').css({ 'color': '#309cac', 'fontWeight': '700' })
    $('.contest i').css({ 'backgroundPosition': '-247px -46px', 'animation': ' nav ease 1.5s' })
    $('.contest').on('mouseleave', function () {
      $('.contest i').css({ 'backgroundPosition': '-247px -46px', 'animation': ' nav' })
      $('.contest a').css({ 'color': '#309cac', 'fontWeight': '700' })
    })
  } else {
    $('.contest a').css({ 'color': '#92a8ab', 'fontWeight': '400' })
    $('.contest i').css({ 'backgroundPosition': '-220px -46px', 'animation': 'na' })
  }
  if ($(this).scrollTop() >= wrap4 && $(this).scrollTop() < wrap5) {
    $('.heroziliao a').css({ 'color': '#309cac', 'fontWeight': '700' })
    $('.heroziliao i').css({ 'backgroundPosition': '-293px -72px', 'animation': ' nav ease 1.5s' })
    $('.heroziliao').on('mouseleave', function () {
      $('.heroziliao i').css({ 'backgroundPosition': '-293px -72px', 'animation': ' nav' })
      $('.heroziliao a').css({ 'color': '#309cac', 'fontWeight': '700' })
    })
  } else {
    $('.heroziliao a').css({ 'color': '#92a8ab', 'fontWeight': '400' })
    $('.heroziliao i').css({ 'backgroundPosition': '-269px -72px', 'animation': 'na' })
  }
  if ($(this).scrollTop() >= wrap5) {
    $('.fanartnav a').css({ 'color': '#309cac', 'fontWeight': '700' })
    $('.fanartnav i').css({ 'backgroundPosition': '-258px -12px', 'animation': ' nav ease 1.5s' })
    $('.fanartnav').on('mouseleave', function () {
      $('.fanartnav i').css({ 'backgroundPosition': '-258px -12px', 'animation': ' nav' })
      $('.fanartnav a').css({ 'color': '#309cac', 'fontWeight': '700' })
    })
  } else {
    $('.fanartnav a').css({ 'color': '#92a8ab', 'fontWeight': '400' })
    $('.fanartnav i').css({ 'backgroundPosition': '-287px -12px', 'animation': 'na' })
  }
  //点击滚动到相应的地方
  $('.remen').on('click', function () {
    $('html').stop().animate({ 'scrollTop': wrap1 }, 200)
  })
  $('.videocenter').on('click', function () {
    $('html').stop().animate({ 'scrollTop': wrap2 }, 200)
  })
  $('.contest').on('click', function () {
    $('html').stop().animate({ 'scrollTop': wrap3 }, 200)
  })
  $('.heroziliao').on('click', function () {
    $('html').stop().animate({ 'scrollTop': wrap4 }, 200)
  })
  $('.fanartnav').on('click', function () {
    $('html').stop().animate({ 'scrollTop': wrap5 }, 200)
  })
  $('.polo-top').on('click', function () {
    $('html').stop().animate({ 'scrollTop': 0 }, 200)
  })
}
$(document).ready(function () {
  $(document).on('scroll', function () {
    initial()
  })
})
initial()
$('.polo-top').on('mouseenter', function () {
  $(this).find('img').show()
})
$('.polo-top').on('mouseleave', function () {
  $(this).find('img').hide()
})