'use strict';

var ride = ride || {};
ride.$body = $('body');
ride.$window = $(window), ride.windowW = 0, ride.windowH = 0, ride.loadJudge = 'first', ride.$topMainSlide, ride.footProjectH, ride.scrollTop = 0;

(function (common) {

  common.init = function () {
    setBrowser();
    $('.commonLoader')[0] && loaderFadeout();
    setSize();
    setScroll();
    setEvents();
    scrollToTargetTop();
    if ($('.header_lang')[0]) {
      langChange();
    }
  };

  common.titleEvent = function () {
    titleAnimationEvent();
  };

  function loaderFadeout() {
    var $img = $('img');
    var total = $img.length;
    var count = 0;

    var canvasW = 140;
    var canvasH = 140;
    var points;
    var startPoint = 0;
    var lastPath = 0;
    var loadingSvg = Snap().attr({
      viewBox: [0, 0, canvasW, canvasH]
    });

    var svgAccept = document.querySelector(".commonLoader_inner");
    loadingSvg.prependTo(svgAccept);

    loadingSvg.path().attr({
      fill: 'none',
      stroke: '#1b1b1b',
      d: 'M70,3.5h67.5v134H3.5V3.5H70'
    });

    var circle = loadingSvg.circle(canvasW / 2, 3.5, 3).attr({
      id: "circlePath",
      fill: "#1b1b1b"
    });

    var points;
    var loopBase = loadingSvg.g().attr({
      id: 'loopBase'
    });
    var loopBasePath = loopBase.path().attr({
      id: 'loopBasePath',
      fill: 'none',
      d: 'M70,3.5h67.5v134H3.5V3.5H70'
    });
    var loopBasePathD = Snap('#loopBasePath').attr('d');

    var rideLogo = loadingSvg.g().attr({
      id: 'rideLogo'
    });

    var rideLogo1 = rideLogo.g().attr({
      id: 'rideLogo1'
    });
    rideLogo1.path().attr({
      d: 'M42.9,48.3  c-0.6,0.1-1.2,0.2-1.9,0.2h-3.9v-7H41c0.6,0,1.3,0,1.9,0.1c0.6,0.1,1.1,0.3,1.5,0.5c0.4,0.2,0.8,0.6,1,1c0.3,0.5,0.4,1.1,0.4,1.8  c0,0.7-0.1,1.3-0.4,1.8c-0.3,0.5-0.6,0.8-1,1C44,48.1,43.5,48.2,42.9,48.3z M37.1,52.3h3l6.3,10.9h5.3l-7.1-11.4  c0.7-0.1,1.4-0.4,2-0.7c0.8-0.4,1.5-1,2-1.6c0.6-0.6,1-1.3,1.3-2.1c0.3-0.8,0.5-1.6,0.5-2.4c0-0.8-0.1-1.7-0.4-2.5  c-0.3-0.9-0.7-1.7-1.3-2.4c-0.6-0.7-1.5-1.3-2.6-1.8c-1.1-0.5-2.4-0.7-4.1-0.7h-9.1v25.6h4.3V52.3z'
    });
    rideLogo1.path().attr({
      d: 'M59.8,63.2h-4.3V37.6h4.3V63.2z'
    });
    rideLogo1.path().attr({
      d: 'M70.3,59.1V41.7h4.5  c1.9,0,3.5,0.3,4.6,0.9c1.2,0.6,2.1,1.4,2.8,2.3c0.7,0.9,1.1,1.8,1.4,2.8c0.3,1,0.4,1.9,0.4,2.7c0,1.5-0.3,2.7-0.8,3.8  c-0.5,1.1-1.3,2-2.1,2.7c-0.9,0.7-2,1.3-3.2,1.6c-1.2,0.4-2.5,0.5-3.9,0.5H70.3z M80.5,62.1c1.7-0.7,3.2-1.7,4.4-2.9  c1.2-1.2,2.1-2.6,2.7-4.1c0.6-1.5,0.9-3.1,0.9-4.8c0-0.8-0.1-1.7-0.3-2.6C88,46.9,87.8,46,87.4,45c-0.4-0.9-0.9-1.9-1.6-2.7  c-0.7-0.9-1.5-1.7-2.5-2.4c-1-0.7-2.2-1.2-3.5-1.6c-1.3-0.4-2.9-0.6-4.7-0.6H66v25.6h8.5C76.7,63.2,78.8,62.8,80.5,62.1z'
    });
    rideLogo1.path().attr({
      d: 'M111.2,63.2H93.7V37.6h16.8v4.1H98v6.4h11.7v4.1H98v7h13.2V63.2z'
    });

    var rideLogo2 = rideLogo.g().attr({
      id: 'rideLogo2'
    });
    rideLogo2.path().attr({
      d: 'M44.7,70.5H48v15h-2.4V74.7l-4.3,10.8h-1.6l-4.3-10.8v10.8H33v-15  h3.2l4.3,10.6L44.7,70.5z'
    });
    rideLogo2.path().attr({
      d: 'M52.6,72.9v3.8h6.9V79h-6.9v4.1h7.7v2.4H50.1v-15H60v2.4H52.6z'
    });
    rideLogo2.path().attr({
      d: 'M65,72.9h2.7  c1.1,0,2,0.2,2.7,0.6c0.7,0.4,1.3,0.8,1.6,1.3c0.4,0.5,0.7,1.1,0.8,1.7C73,77.1,73,77.6,73,78c0,0.9-0.2,1.6-0.5,2.3  c-0.3,0.6-0.7,1.2-1.3,1.6s-1.2,0.8-1.8,1c-0.7,0.2-1.5,0.3-2.3,0.3H65V72.9z M71,84.9c1-0.4,1.9-1,2.6-1.7c0.7-0.7,1.2-1.5,1.6-2.4  c0.3-0.9,0.5-1.8,0.5-2.8c0-0.5-0.1-1-0.2-1.5c-0.1-0.5-0.3-1.1-0.5-1.7c-0.2-0.5-0.5-1.1-0.9-1.6c-0.4-0.5-0.9-1-1.5-1.4  c-0.6-0.4-1.3-0.7-2.1-1c-0.8-0.2-1.7-0.3-2.8-0.3h-5.3v15h5C68.8,85.5,70,85.3,71,84.9z'
    });
    rideLogo2.path().attr({
      d: 'M77.8,70.5h2.5v15h-2.5V70.5z'
    });
    rideLogo2.path().attr({
      d: 'M87.5,79.7l2.4-5.7  l2.3,5.7H87.5z M85.2,85.5l1.4-3.6h6.5l1.5,3.6h2.9l-6.4-15h-2.1l-6.6,15H85.2z'
    });
    rideLogo2.path().attr({
      d: 'M103.4,75.2  c-0.1-0.2-0.2-0.4-0.3-0.6c-0.1-0.2-0.1-0.4-0.1-0.6c0-0.5,0.1-0.8,0.4-1.1c0.3-0.3,0.6-0.4,1-0.4c0.4,0,0.7,0.1,0.9,0.3  c0.2,0.2,0.3,0.5,0.3,0.9c0,0.3-0.1,0.6-0.2,0.8c-0.1,0.2-0.3,0.4-0.4,0.6c-0.2,0.2-0.4,0.4-0.6,0.5L104,76  c-0.1-0.1-0.2-0.2-0.3-0.3C103.6,75.6,103.5,75.4,103.4,75.2z M103,79.2l0.5-0.4l2.7,3.3l-0.4,0.5c-0.2,0.2-0.4,0.4-0.6,0.6  c-0.2,0.2-0.4,0.3-0.7,0.4c-0.5,0.2-1,0.2-1.5,0c-0.2-0.1-0.5-0.3-0.7-0.5c-0.2-0.2-0.4-0.4-0.5-0.7c-0.1-0.3-0.2-0.6-0.2-0.9  c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.5,0.4-0.7C102.5,79.5,102.8,79.3,103,79.2z M108.8,77.3l-1.4,2.8l-2-2.5  c0.2-0.2,0.5-0.3,0.7-0.5c0.3-0.3,0.6-0.5,0.9-0.8c0.3-0.3,0.5-0.7,0.6-1.1c0.2-0.4,0.3-0.9,0.3-1.3c0-0.6-0.1-1.1-0.3-1.5  c-0.2-0.4-0.4-0.8-0.8-1.1c-0.3-0.3-0.7-0.5-1.1-0.7c-0.8-0.3-1.8-0.3-2.7,0c-0.4,0.2-0.8,0.4-1.1,0.7s-0.6,0.7-0.8,1.2  c-0.2,0.5-0.3,1-0.3,1.5c0,0.8,0.2,1.4,0.5,2c0.2,0.4,0.5,0.9,0.8,1.3c-0.3,0.2-0.6,0.4-0.8,0.6c-0.4,0.3-0.7,0.6-0.9,1  c-0.3,0.4-0.5,0.8-0.6,1.2c-0.2,0.4-0.2,0.9-0.2,1.5c0,0.6,0.1,1.1,0.3,1.6c0.2,0.5,0.4,1,0.8,1.4c0.3,0.4,0.8,0.8,1.3,1  c0.6,0.3,1.2,0.4,1.9,0.4c0.9,0,1.6-0.2,2.3-0.6c0.5-0.4,1.1-0.9,1.5-1.5l1.4,1.8h2.9l-3-3.7l2.5-4.5H108.8z'
    });

    var rideLogo3 = rideLogo.g().attr({
      id: 'rideLogo3'
    });
    rideLogo3.path().attr({
      d: 'M35.5,94.2h2.7  c1.1,0,2,0.2,2.7,0.6c0.7,0.4,1.2,0.8,1.6,1.3c0.4,0.5,0.7,1.1,0.8,1.7c0.2,0.6,0.2,1.1,0.2,1.6c0,0.8-0.2,1.6-0.5,2.2  c-0.3,0.6-0.7,1.2-1.3,1.6c-0.5,0.4-1.1,0.7-1.8,1c-0.7,0.2-1.5,0.3-2.3,0.3h-2.2V94.2z M45.6,96.2c-0.2-0.6-0.5-1.1-0.9-1.6  c-0.4-0.5-0.9-1-1.5-1.4c-0.6-0.4-1.3-0.7-2.1-1c-0.8-0.3-1.7-0.4-2.8-0.4H33v15h5c1.3,0,2.5-0.2,3.5-0.6c1-0.4,1.9-1,2.6-1.7  c0.7-0.7,1.2-1.5,1.6-2.4c0.3-0.9,0.5-1.8,0.5-2.8c0-0.5,0-1-0.1-1.5C46,97.3,45.8,96.7,45.6,96.2z'
    });
    rideLogo3.path().attr({
      d: 'M51.8,104.4h7.7v2.4H49.3v-15h9.9v2.4h-7.4V98h6.9v2.4h-6.9V104.4z'
    });
    rideLogo3.path().attr({
      d: 'M68.7,103.6c0.2-0.2,0.2-0.5,0.2-0.9c0-0.5-0.1-0.8-0.4-1.1  c-0.3-0.3-0.7-0.5-1.2-0.7c-0.5-0.2-1.1-0.4-1.7-0.6c-0.6-0.2-1.3-0.5-1.8-0.8c-0.6-0.4-1-0.8-1.4-1.4c-0.4-0.6-0.6-1.4-0.6-2.4  c0-0.5,0.1-0.9,0.3-1.4c0.2-0.5,0.5-1,0.9-1.4c0.4-0.4,1-0.8,1.6-1.1c0.7-0.3,1.4-0.4,2.3-0.4c0.8,0,1.6,0.1,2.3,0.3  c0.8,0.2,1.5,0.7,2,1.4l0.2,0.2l-2,1.8L69.3,95c-0.2-0.4-0.5-0.6-0.9-0.8c-0.4-0.2-0.9-0.3-1.4-0.3c-0.5,0-0.9,0.1-1.3,0.2  c-0.3,0.1-0.6,0.3-0.8,0.5c-0.2,0.2-0.3,0.4-0.4,0.6c-0.1,0.2-0.1,0.5-0.1,0.6c0,0.5,0.1,0.9,0.4,1.2c0.3,0.3,0.7,0.5,1.2,0.7  c0.5,0.2,1.1,0.4,1.7,0.5c0.7,0.2,1.2,0.4,1.8,0.7c0.6,0.3,1,0.7,1.4,1.3c0.4,0.5,0.6,1.3,0.6,2.2c0,0.7-0.1,1.4-0.4,2  c-0.3,0.6-0.7,1.1-1.1,1.5c-0.5,0.4-1,0.7-1.7,0.9c-0.6,0.2-1.3,0.3-2,0.3c-1,0-1.9-0.2-2.7-0.5c-0.9-0.3-1.6-0.9-2.1-1.6l-0.1-0.2  l2-1.8l0.2,0.3c0.3,0.5,0.7,0.8,1.2,1.1c0.8,0.4,1.6,0.5,2.5,0.2c0.3-0.1,0.6-0.2,0.9-0.4C68.4,104.1,68.6,103.8,68.7,103.6z'
    });
    rideLogo3.path().attr({
      d: 'M74.8,91.8h2.5v15h-2.5V91.8z'
    });
    rideLogo3.path().attr({
      d: 'M88.4,98.2h5.7v7.6l-0.1,0.1c-0.4,0.2-0.8,0.4-1.2,0.6  c-0.5,0.2-1,0.3-1.4,0.4c-0.5,0.1-1,0.2-1.5,0.3c-0.5,0.1-1,0.1-1.4,0.1c-1.3,0-2.4-0.2-3.4-0.6c-1-0.4-1.8-1-2.5-1.7  c-0.7-0.7-1.2-1.6-1.6-2.5c-0.3-1-0.5-2-0.5-3c0-1.1,0.2-2.2,0.6-3.1c0.4-1,0.9-1.8,1.6-2.5c0.7-0.7,1.5-1.3,2.5-1.7  c1-0.4,2-0.6,3.2-0.6c1.4,0,2.5,0.2,3.4,0.5c0.9,0.3,1.6,0.8,2.2,1.4l0.2,0.2l-1.8,1.9L92,95.3c-0.6-0.5-1.2-0.9-1.8-1.1  c-0.6-0.2-1.3-0.3-2-0.3c-0.8,0-1.5,0.1-2.1,0.4c-0.6,0.3-1.2,0.7-1.6,1.2c-0.5,0.5-0.8,1.1-1.1,1.7c-0.2,0.7-0.4,1.4-0.4,2.2  c0,0.8,0.1,1.5,0.4,2.2c0.3,0.7,0.7,1.3,1.1,1.8c0.5,0.5,1,0.9,1.7,1.1c0.7,0.3,1.4,0.4,2.1,0.4c0.7,0,1.3-0.1,1.9-0.2  c0.5-0.1,1-0.3,1.3-0.5v-3.6h-3.2V98.2z'
    });
    rideLogo3.path().attr({
      d: 'M108.5,91.8h2.5v15h-2.9l-7.7-11.3v11.3h-2.5v-15h3l7.6,11.3V91.8z'
    });

    var pathLength = loopBasePath.getTotalLength();

    var fStartPoint = 0;
    var fLastPoint = pathLength;

    var startPoint = 0;
    var lastPoint = 0;
    var len;
    var subPath = Snap.path.getSubpath(loopBasePathD, 0, 0);
    var drawingPath = loadingSvg.path().attr({
      id: "drawingPath",
      path: subPath,
      fill: "none",
      stroke: "#222",
      strokeWidth: 2
    });

    function setPosition(len) {
      startPoint = len > fStartPoint ? fStartPoint : len;
      lastPoint = len > fLastPoint ? fLastPoint : len;
      subPath = Snap.path.getSubpath(loopBasePathD, startPoint, lastPoint);
      drawingPath.attr({
        path: subPath
      });

      var pt = loopBasePath.getPointAtLength(len);
      pt.x -= canvasW / 2;
      pt.y -= 3.5;
      pt.alpha = circle.transform("t" + [pt.x, pt.y] + "r" + 0 + ",0,0");
    }

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
          Snap.animate(0, fLastPoint, setPosition, 3000, mina.easeinout, function () {
            $('.commonLoader').addClass('bgOut');
            var slideColor = $('.mainVisual_item').eq(0).attr('data-page-color');
            $('body').attr('data-page-color', slideColor);
          })
        }
      }
    })
    resizeEvent()
  }

  function setBrowser() {
    var judgeLotate, _this;
    _this = window;
    _this.ua = function () {
      return {
        Safari: typeof window.chrome == 'undefined' && 'WebkitAppearance' in document.documentElement.style,
        Firefox: 'MozAppearance' in document.documentElement.style,
        IE: window.navigator.userAgent.toLowerCase().indexOf('msie') !== -1 || window.navigator.userAgent.toLowerCase().indexOf('trident') !== -1,
        IE9: window.navigator.appVersion.toLowerCase().indexOf('msie 9.') !== -1,
        ltIE9: typeof window.addEventListener === 'undefined' && typeof document.getElementsByClassName === 'undefined',
        Touch: typeof document.ontouchstart !== "undefined",
        Pointer: window.navigator.pointerEnabled,
        MSPoniter: window.navigator.msPointerEnabled,
        Windows: window.navigator.userAgent.toLowerCase().indexOf('win') !== -1,
        Mac: window.navigator.userAgent.toLowerCase().indexOf('mac') !== -1,
        Mobile: typeof window.orientation != "undefined",
        ltAd4_4: typeof window.orientation != "undefined" && typeof EventSource == "undefined"
      };
    }();
    if (window.ua.Safari) {
      $('html').addClass('safari');
    }
    if (window.ua.Firefox) {
      $('html').addClass('firefox');
    }
    if (window.ua.IE) {
      $('html').addClass('ie');
    }
    if (window.ua.IE9) {
      $('html').addClass('ie9');
    }
    if (window.ua.ltIE9) {
      $('html').addClass('ie8');
    }
    if (window.ua.Mobile) {
      if (window.ua.ltAd4_4) {
        $('html').addClass('ltAd4-4');
      }
    }
  }


  function setSize() {
    ride.windowW = ride.$window.width();
    ride.windowH = ride.$window.height();

    $('.header_contents').height(ride.windowH - 50);
  }

  function resizeEvent() {
    setSize();
  }

  function setScroll() {
    ride.$window.on('scroll', function () {
      ride.scrollTop = ride.$window.scrollTop();
      if (ride.scrollTop > ride.windowH - 60) {
        ride.$body.addClass('fixed');
      } else {
        ride.$body.removeClass('fixed');
      }
    });
  }

  var $projectBox = $('.footer_projectInner'),
    $projectBox_title = $('.footer_projectTitle');

  function setEvents() {
    ride.$window.resize(function () {
      return resizeEvent();
    });

    var backSc = 0,
      $headerNav = $('.header_contents');
    $('.header_menu, #header .closeBtn').on('click', function () {
      if ($('body').is('.navOpen')) {
        $('body').removeClass('navOpen');
        TweenLite.to($headerNav, 0.3, {
          top: 0,
          alpha: 0,
          ease: Power2.easeOut,
          onComplete: function onComplete() {
            $headerNav.css({
              display: 'none'
            });
            $('.wrapper').css({
              position: '',
              top: '',
              height: ''
            });
            $('html,body').scrollTop(backSc);
          }
        });
      } else {
        $('body').addClass('navOpen');
        TweenLite.to($headerNav, 0.3, {
          display: 'block',
          top: 50,
          alpha: 1,
          ease: Power2.easeOut,
          onComplete: function onComplete() {
            $('.wrapper').css({
              position: 'fixed',
              top: -ride.scrollTop
            });
            backSc = ride.scrollTop;
          }
        });
      }
      return false;
    });

    $('.toggleButton').on('click', function () {
      var $toggleTarget = $(this).closest('.toggleBox').find('.toggleTarget');
      var $toggleBox = $(this).closest('.toggleBox');
      if ($toggleBox.is('.open')) {
        $toggleTarget.slideUp();
        $toggleBox.removeClass('open');
      } else {
        $toggleTarget.slideDown();
        $toggleBox.addClass('open');
      }
    });

    var mc = new Hammer($projectBox[0]),
      mcFlag = 'down',
      panPos = 0;
    mc.get('pan').set({
      direction: Hammer.DIRECTION_ALL,
      threshold: 10
    });
    mc.on('panstart panmove panup pandown panend', function (ev) {
      switch (ev.type) {
        case 'panstart':
          panPos += ev.deltaY;
          $projectBox.css({
            top: panPos + 'px'
          });
          break;
        case 'panmove':
          var panmovePos = panPos + ev.deltaY;
          panmovePos = panmovePos < -ride.footProjectH ? -ride.footProjectH : panmovePos > 0 ? 0 : panmovePos;
          $projectBox.css({
            top: panmovePos + 'px'
          });
          break;
        case 'panup':
          mcFlag = 'up';
          break;
        case 'pandown':
          mcFlag = 'down';
          break;
        case 'panend':
          ride.footProjectH = $('.footer_projectMove').height();
          var movePos = mcFlag == 'up' ? -ride.footProjectH : 0;
          TweenLite.to($projectBox, 0.3, {
            top: movePos,
            ease: Power2.easeOut,
            onComplete: function onComplete() {
              panPos = movePos;
            }
          });
          break;
      }
    });
    var mc_title = new Hammer($projectBox_title[0]);
    mc_title.get('tap');
    mc_title.on('tap', function (ev) {
      switch (ev.type) {
        case 'tap':
          ride.footProjectH = $('.footer_projectMove').height();
          if (mcFlag == 'up') {
            mcFlag = 'down';
          } else {
            mcFlag = 'up';
          }
          var movePos = mcFlag == 'up' ? -ride.footProjectH : 0;
          TweenLite.to($projectBox, 0.3, {
            top: movePos,
            ease: Power2.easeOut,
            onComplete: function onComplete() {
              panPos = movePos;
            }
          });
          break;
      }
    });
  }

  function langChange() {
    var lastPos = 0,
      pos = 0,
      langFlag = 'jp',
      canvasX = 320,
      canvasY = 50;

    var s = Snap().attr({
      viewBox: [0, 0, canvasX, canvasY],
      id: "langChangeObj"
    });
    var langChange_svg = document.querySelector('.header_lang');
    s.prependTo(langChange_svg);
    var textStyle = {
      fill: "#999",
      stroke: "none",
      textAnchor: "middle",
      dominantBaseline: "middle"
    };

    var langText = s.text(canvasX / 2 - 1, canvasY / 2 + 1, ['JP', '　', 'EN']).attr(textStyle);
    langText.clone();
    s.rect(0, 0, canvasX, canvasY).attr({
      fill: "none",
      stroke: "#999",
      strokeWidth: 1
    });

    var knobGroup = s.g();
    var knob = knobGroup.rect(0, 0, canvasX / 2, canvasY).attr({
      fill: "#999"
    });
    var knobText = knobGroup.rect(0, 0, canvasX / 2, canvasY).attr({
      fill: "#fff",
      clipPath: langText
    });

    knobGroup.drag(function (dx, dy, x, y) {
      pos = (x - ride.windowW / 4) / ride.windowW * canvasX;
      var attrPos = {
        x: pos
      };
      knob.attr(attrPos);
      knobText.attr(attrPos);
    }, function (x, y, e) {
      pos = (x - ride.windowW / 4) / ride.windowW * canvasX;

      var attrPos = {
        x: pos
      };
      knob.attr(attrPos);
      knobText.attr(attrPos);
      knobGroup.stop();
    }, function () {
      lastPos = pos < 0 ? 0 : pos > canvasX ? canvasX : pos;
      lastPos = Snap.snapTo(canvasX / 2, lastPos, canvasX / 4);
      langChosen(pos, lastPos);
    });

    s.click(function (e) {
      pos = langFlag == 'jp' ? 0 : canvasX / 2;
      lastPos = (e.screenX - ride.windowW / 4) / ride.windowW * canvasX;
      lastPos = Snap.snapTo(canvasX / 2, lastPos, canvasX / 4);
      langChosen(pos, lastPos);
    });

    function langChosen(pos, lastPos) {
      Snap.animate(pos, lastPos, function (movePos) {
        var attrPos = {
          x: movePos
        };
        knob.attr(attrPos);
        knobText.attr(attrPos);
      }, 500, mina.bounce, function (e) {
        pos = lastPos;
        if (lastPos == 0) {
          // jp
          langFlag = 'jp';
        } else {
          // en
          langFlag = 'en';
        }
      });
    }
  }

  function scrollToTargetTop() {
    $(document).on('click', '.anchorLink', function (e) {
      var targetLink = $(this).attr('href');
      if (targetLink === '' || targetLink === '#') {
        var offset = 0;
      } else {
        var offset = $(targetLink).offset();
        offset = offset.top - 60;
      };
      var speed = 800;
      TweenLite.to(window, 1, {
        scrollTo: {
          y: offset
        },
        ease: Power4.easeOut
      });
      return false;
    });
  }

  function titleAnimationEvent() {
    var scrollTop;
    var $window = $(window);
    var winH = $window.height();
    var winW = $window.width();

    function Inview(target) {
      this.target = target;
      this.inviewInit();
      this.inviewHandler();
    }

    Inview.prototype.inviewInit = function () {
      this.titlePos = this.target.offset().top;
    };

    Inview.prototype.inviewEvent = function () {
      if (scrollTop + winH / 1.5 > this.titlePos) {
        this.target.addClass('inview');
      }
    };
    Inview.prototype.inviewHandler = function () {
      var _this = this;
      scrollTop = $(document).scrollTop();
      $(window).on('resize', function () {
        scrollTop = $(document).scrollTop();
        _this.inviewEvent();
      });
      $(window).on("load", function () {
        _this.inviewInit();
      });
      $(window).on('scroll', function () {
        scrollTop = $(document).scrollTop();
        _this.inviewEvent();
      });
    };

    $('.borderAnimation').each(function () {
      var instance = new Inview($(this));
    });
  }
})(ride.common = ride.common || {});

ride.common.init();