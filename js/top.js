'use strict';

(function (top) {

  // コンストラクタ  =================================================================
  top.init = function () {
    imgLoad();
    setEvents();
    resizeEvent();
    mainvisualHide();
    postSlide();
    mainslideAct();
    scrollEvent();
  };

  // functions  ====================================================================

  var postScrollH;

  function imgLoad() {
    var $img = $('img');
    var total = $img.length;
    var count = 0;
    $img.each(function () {
      var myImg = new Image();
      if (ua.ltIE9) {
        myImg.src = $(this).attr('src') + "?" + new Date().getTime();
      } else {
        myImg.src = $(this).attr('src');
      }
      myImg.onload = function () {
        count++;
        if (count == total) {
          resizeEvent();
        }
      };
    });
  }

  function setEvents() {
    ride.$window.resize(function () {
      return resizeEvent();
    });
  }

  var $mainvisual = $('.mainVisual,.commonLoader'),
    $visualScroll = $('.commonLoader');

  function mainvisualHide() {
    var hm = new Hammer($visualScroll[0]),
      hmFlag = 'down',
      panPos = 0,
      mainHideJudge = false;
    hm.get('pan').set({
      direction: Hammer.DIRECTION_ALL,
      threshold: 10
    });
    hm.on('panstart panmove panup pandown panend', function (ev) {
      if (mainHideJudge) return;
      switch (ev.type) {
        case 'panstart':
          panPos += ev.deltaY;
          $mainvisual.css({
            top: panPos + 'px'
          });
          break;
        case 'panmove':
          var panmovePos = panPos + ev.deltaY;
          panmovePos = panmovePos < -ride.windowH ? -ride.windowH : panmovePos > 0 ? 0 : panmovePos;
          var op = 1 + panmovePos / ride.windowH;
          $mainvisual.css({
            top: panmovePos + 'px',
            opacity: op
          });
          break;
        case 'panup':
          hmFlag = 'up';
          break;
        case 'pandown':
          hmFlag = 'down';
          break;
        case 'panend':
          var movePos = hmFlag == 'up' ? -ride.windowH : 0;
          if (hmFlag == 'up') {
            TweenLite.to($mainvisual, 0.3, {
              top: movePos,
              alpha: 0,
              ease: Power2.easeOut,
              onComplete: function onComplete() {
                $mainvisual.hide();
                mainHideJudge = true;
              }
            });
          } else {
            TweenLite.to($mainvisual, 0.3, {
              top: movePos,
              alpha: 1,
              ease: Power2.easeOut
            });
          }
          break;
      }
    });
    $('.mainVisual_scroll a').on('click', function () {
      $mainvisual.css('transition', 'none');
      TweenLite.to($mainvisual, 0.5, {
        top: -50,
        alpha: 0,
        ease: Power2.easeOut,
        onComplete: function onComplete() {
          $mainvisual.hide();
          mainHideJudge = true;
        }
      });
      return false;
    });
  }

  var $postScroll = $('.worksPost_list');

  function postSlide() {
    var postHm = new Hammer($postScroll[0]),
      panmovePos = 0,
      panPos = 0,
      postScrollSize,
      onePer,
      per,
      directFlag = 'up',
      activePer,
      acInfo,
      acNum = 0,
      sc,
      touchFlag = true;
    TweenLite.set($postScroll.find('.postNode').find('.nodeImg a'), {
      'padding-bottom': '20%'
    });
    $postScroll.find('.postNode').eq(0).find('.nodeImg a').css('padding-bottom', '100%');
    $postScroll.find('.postNode').eq(0).addClass('active');
    postHm.get('pan').set({
      direction: Hammer.DIRECTION_ALL,
      threshold: 0
    });
    postHm.get('tap').set({
      prevent_default: false
    });
    postHm.on('panstart panmove panup pandown panend tap', function (ev) {
      switch (ev.type) {
        case 'panstart':
          touchFlag = false;
          postScrollSize = $postScroll.find('.postNode').size();
          onePer = 100 / postScrollSize;
          panPos += ev.deltaY;
          break;
        case 'panmove':
          panmovePos = panPos + ev.deltaY;
          var scMax = -(postScrollH / postScrollSize) * postScrollSize;
          panmovePos = panmovePos > 0 ? 0 : panmovePos < scMax ? scMax : panmovePos;
          per = panmovePos / postScrollH * 100;
          activePer = Math.abs(per / onePer);
          activePer = activePer < 0 ? 0 : activePer > postScrollSize ? postScrollSize : activePer;
          activePer = activePer.toString();
          activePer = activePer.split('.');
          acInfo = new Array();
          acNum = parseInt(activePer[0]);
          if (activePer[1]) {
            acInfo['per'] = '0.' + activePer[1];
          } else {
            acInfo['per'] = 0;
          }
          $postScroll.find('.postNode:lt(' + acNum + ')').find('.nodeImg a').css({
            'padding-bottom': '20%'
          });
          $postScroll.find('.postNode:eq(' + acNum + ')').find('.nodeImg a').css({
            'padding-bottom': parseInt(20 + 80 * (1 - acInfo['per'])) + '%'
          });
          $postScroll.find('.postNode:eq(' + acNum + ')').find('.nodeCaption').css({
            'opacity': 1 - acInfo['per']
          });
          $postScroll.find('.postNode:eq(' + parseInt(acNum + 1) + ')').find('.nodeImg a').css({
            'padding-bottom': parseInt(20 + 80 * acInfo['per']) + '%'
          });
          $postScroll.find('.postNode:eq(' + parseInt(acNum + 1) + ')').find('.nodeCaption').css({
            'opacity': acInfo['per']
          });

          $postScroll.find('.postNode:gt(' + acNum + 1 + ')').find('.nodeImg a').css({
            'padding-bottom': '20%'
          });
          break;
        case 'panup':
          directFlag = 'up';
          break;
        case 'pandown':
          directFlag = 'down';
          break;
        case 'panend':

          if (directFlag == 'up') {
            acNum = acNum + 1 > postScrollSize + 1 ? postScrollSize + 1 : acNum + 1;
          } else {
            if (acNum == 4) {
              acNum -= 1;
            } else {
              acNum = acNum;
            }
          }
          panPos = -(postScrollH / postScrollSize) * acNum;

          //scroll位置調整
          if (acNum == postScrollSize) {
            sc = ride.windowW * 0.2 * (acNum - 1);
          } else {
            sc = ride.windowW * 0.2 * acNum;
          }
          slideEnd();
          touchFlag = true;
          break;
        case 'tap':
          break;
      }
      $postScroll.find('.postNode').on('click touchend', function () {
        if (!touchFlag) return;
        if (!$(this).is('.active')) {
          acNum = $postScroll.find('.postNode').index(this);
          sc = ride.windowW * 0.2 * acNum;
          slideEnd();
          return false;
        }
      });
    });

    function slideEnd() {
      TweenLite.to(window, 0.3, {
        scrollTo: {
          y: sc
        },
        ease: Power4.easeOut
      });

      TweenLite.to($postScroll.find('.postNode:lt(' + acNum + ')').find('.nodeImg a'), 0.5, {
        'padding-bottom': '20%',
        ease: Power2.easeOut
      });
      TweenLite.to($postScroll.find('.postNode:eq(' + acNum + ')').find('.nodeImg a'), 0.5, {
        'padding-bottom': '100%',
        ease: Power2.easeOut
      });
      TweenLite.to($postScroll.find('.postNode:gt(' + acNum + ')').find('.nodeImg a'), 0.5, {
        'padding-bottom': '20%',
        ease: Power2.easeOut
      });

      $postScroll.find('.postNode').removeClass('active');
      $postScroll.find('.postNode').find('.nodeCaption').css({
        'opacity': 0
      });
      $postScroll.find('.postNode:eq(' + acNum + ')').addClass('active');
      $postScroll.find('.postNode:eq(' + acNum + ')').find('.nodeCaption').css({
        'opacity': 1
      });
    }
  }

  function resizeEvent() {
    picResize($('.mainVisual_item'), 1, 1);
    var windowW = ride.windowW;
    var windowH = ride.windowH;
    $('.mainVisual').css({
      width: windowW,
      height: windowH
    });

    postScrollH = $postScroll.height();
  }

  var windowW, windowH, slideImgH;

  function picResize(target, xSize, ySize) {
    var imgW, imgH, windowW, windowH;
    var _this = this;
    imgW = target.find('.pic img').width();
    imgH = target.find('.pic img').height();

    windowW = ride.windowW / xSize;
    windowH = ride.windowH / ySize;

    if (imgW / imgH < windowW / windowH) {
      slideImgH = windowW * imgH / imgW;
      target.find('.pic img').width(windowW);
      target.find('.pic img').height(slideImgH);
      target.width(windowW);
      target.height(windowH);
      target.find('.pic').css({
        width: windowW,
        height: windowH,
        margin: -(windowW * imgH / imgW) / 2 + 'px 0 0 ' + -(windowW / 2) + 'px'
      });
    } else {
      slideImgH = windowH;
      target.find('.pic img').width(windowH * imgW / imgH);
      target.find('.pic img').height(slideImgH);
      target.width(windowW);
      target.height(windowH);
      target.find('.pic').css({
        width: windowH * imgW / imgH,
        height: windowH,
        margin: -(windowH / 2) + 'px 0 0 ' + -(windowH * imgW / imgH / 2) + 'px'
      });
    }
  };

  function mainslideAct() {
    ride.$topMainSlide = $('.mainVisual_list');
    var slideNum = ride.$topMainSlide.find('.mainVisual_item').length;
    var slideColor;

    ride.$topMainSlide.slick({
      fade: true,
      speed: 2000,
      autoplaySpeed: 5000,
      autoplay: true,
      arrows: false,
      dots: true,
      pauseOnHover: false,
      slideCount: slideNum
    });
    // ride.$topMainSlide.slick('slickPause');
    ride.$topMainSlide.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      slideColor = $('.mainVisual_item').eq(nextSlide).attr('data-page-color');
      $('body').attr('data-page-color', slideColor);
    });
  }

  function scrollEvent() {
    ride.$window.on('scroll', function () {});
  };
})(ride.top = ride.top || {});

ride.top.init();