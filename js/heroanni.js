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
//查看收起内容
$('.c').on('click', function () {
  $('.boxny').html('既拥有危险夺命的能力，又拥有小大人儿的可爱模样，安妮是一名掌握着深不可测的占火魔法的幼女魔法师。安妮生活在诺克萨斯北边的山脚下，即使是在这种地方，她也仍然是魔法师中的异类。她与火焰的紧密关系与生俱来，最初是伴随着喜怒无常的情绪冲动出现的，不过后来她学会了如何掌握这些“好玩的小把戏”。其中她最喜欢的就是召唤她亲爱的泰迪熊提伯斯——一头狂野的守护兽。安妮已经迷失在了永恒的天真里。她在黑暗的森林中游荡，始终寻觅着能陪自己玩耍的人。')
  $('.c').hide()
  $('.s').show()
})
$('.s').on('click', function () {
  $('.boxny').html('既拥有危险夺命的能力，又拥有小大人儿的可爱模样，安妮是一名掌握着深不可测的占火魔法的幼女魔法师。安妮生活在诺克萨斯北边的山脚下，即使是在这种地方，她也仍然是魔法师中的异类。她与火焰的紧密关系与生俱来，最初是伴随着喜怒无常的情绪冲动出现的，不过后来她学会了如何掌握这些“好玩的小把戏”。其中她最喜欢的就是召唤她亲爱的泰迪熊提伯斯——一头狂野的守护兽。安妮已经迷失在了永恒的天真里。她在黑暗的森林中游荡，……')
  $('.s').hide()
  $('.c').show()
})
//技能介绍切换
$('.skill li').on('click', function () {
  let index = $(this).index()
  $('.skill li').removeClass('boxszing')
  $(this).addClass('boxszing')
  if (index == 0) {
    $('.spells-top h5').html('嗜火')
    $('.spells-top em').html('被动技能')
    $('.spells p').html('在施放4个技能后，安妮的下一次伤害类技能就会对目标造成短暂的晕眩效果。')
  }
  if (index == 1) {
    $('.spells-top h5').html('碎裂之火')
    $('.spells-top em').html('快捷键：Q')
    $('.spells p').html('安妮向目标投出注入了法力值的火球，对目标造成魔法伤害。如果目标死于碎裂之火，则碎裂之火消耗的法力值会返还给安妮，且碎裂之火的冷却时间减半。')
  }
  if (index == 2) {
    $('.spells-top h5').html('焚烧')
    $('.spells-top em').html('快捷键：W')
    $('.spells p').html('安妮向锥形区域施放一道烈焰，对区域内的所有敌人造成伤害。')
  }
  if (index == 3) {
    $('.spells-top h5').html('熔岩护盾')
    $('.spells-top em').html('快捷键：E')
    $('.spells p').html('为安妮提供百分比伤害减免，爆发性的移动速度加成，并且任何对安妮进行普通攻击的敌人都会受到伤害。')
  }
  if (index == 4) {
    $('.spells-top h5').html('提伯斯之怒')
    $('.spells-top em').html('快捷键：R')
    $('.spells p').html('安妮召唤地狱火泰迪：提伯斯为其作战，对目标区域造成伤害，提伯斯也会攻击和烧伤站在它周围的敌人。')
  }
})