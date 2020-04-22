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
//鼠标移入顶部登录显示后的个人中心小箭头动画
$('.head-login a').on('mouseenter', function () {
  let timer = setInterval(function () {
    $('.head-login a i').animate({
      'right': '80'
    }, 150, function () {
      $('.head-login a i').animate({
        'right': '84'
      }, 150, function () {
        $('.head-login a i').animate({
          'right': '80'
        }, 150, function () {
          $('.head-login a i').animate({
            'right': '84'
          }, 150)
        })
      })
    })
  }, 1500)
  $('.head-login a').on('mouseleave', function () {
    clearInterval(timer)
  })
})
//第一板块tab切中鼠标移入小箭头动画
$('.yuedu').on('mouseenter', function () {
  let timer = setInterval(function () {
    $('.yuedu i').animate({
      'right': '166'
    }, 150, function () {
      $('.yuedu i').animate({
        'right': '170'
      }, 150, function () {
        $('.yuedu i').animate({
          'right': '166'
        }, 150, function () {
          $('.yuedu i').animate({
            'right': '170'
          }, 150)
        })
      })
    })
  }, 1500)
  $('.yuedu').on('mouseleave', function () {
    clearInterval(timer)
  })
})
//热门活动小箭头
$('.hot-top a').on('mouseenter', function () {
  let timer = setInterval(function () {
    $('.hot-top a i').animate({
      'right': '-4'
    }, 150, function () {
      $('.hot-top a i').animate({
        'right': '0'
      }, 150, function () {
        $('.hot-top a i').animate({
          'right': '-4'
        }, 150, function () {
          $('.hot-top a i').animate({
            'right': '0'
          }, 150)
        })
      })
    })
  }, 1500)
  $('.hot-top a').on('mouseleave', function () {
    clearInterval(timer)
  })
})
//热门活动tab切换
$('.hot-top ul li').on('mouseover', function () {
  let index = $(this).index()
  $('.hot-top ul li').removeClass('tab-top-xd')
  $(this).addClass('tab-top-xd')
  $('.hot-bottom ul').removeClass('hot-show')
  $('.hot-bottom ul').eq(index).addClass('hot-show')
})
//视频显示
$('.hero-right').on('mouseenter', function () {
  $('.video-show').fadeIn(200)
  $('.tx-video video')[0].play()
})
$('.video-show').on('mouseleave', function () {
  $('.video-show').stop().hide()
  $('.tx-video video')[0].pause()
})