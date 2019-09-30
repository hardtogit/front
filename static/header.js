iweb.controller('header', function($scope,$anchorScroll,$location,$rootScope) {
    //锚点
    $anchorScroll.yOffset = 47;//使用锚点时固定向下偏移47px
    setTimeout(function () {
        if(window.location.href.indexOf('profile')!==-1) {
            $location.hash('one');
            $anchorScroll();
        }
        if(window.location.href.indexOf('honor')!==-1) {
            $location.hash('two');
            $anchorScroll();
        }
        if(window.location.href.indexOf('development')!==-1) {
            $location.hash('three');
            $anchorScroll();
        }
        if(window.location.href.indexOf('target')!==-1) {
            $location.hash('four');
            $anchorScroll();
        }
    },300)
  $(function () {
      var path=window.location.href
     var arr=$('.navbar-nav>li>a')
     var flag=true
      arr.each(function (index,item) {
        if(path.indexOf($(item).attr('data-href'))!==-1){
          $(item).addClass('active')
            flag=false
        }

      })
      var companyRouter=['profile','honor','development','target']
      $(companyRouter).each(function (index,item) {
          if(path.indexOf(item)!==-1){
              $(arr[1]).addClass('active')
              flag=false
          }
      })
      if(flag){
          $(arr[0]).addClass('active')
      }
  if($(window).width()>993) {
    $('.dropdown').on('mouseover',function () {
      $($(this).find('.dropdown-menu')[0]).css('display','block')
    }).on('mouseout',function () {
      $($(this).find('.dropdown-menu')[0]).css('display','none')
    })
  }else{
      $('.arrow-menu').on('click',function (e) {
        e.stopPropagation()
        if($(this).parents('.dropdown').hasClass('open')){
          $('.dropdown').removeClass('open')
          $(this).removeClass('up')
          $(this).parents('.dropdown').removeClass('open')
        }else{
          $('.dropdown').removeClass('open')
          $(this).addClass('up')
          $(this).parents('.dropdown').addClass('open')
        }
      })
  }
  })
})
