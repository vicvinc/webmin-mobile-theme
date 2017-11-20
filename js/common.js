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
      d: "M64.1,60.8h-4V45.5c0-1.2,0.1-2.8,0.2-4.6h-0.1c-0.2,1-0.5,1.8-0.7,2.2l-7.2,17.6h-2.8l-7.2-17.5 c-0.2-0.5-0.4-1.3-0.6-2.3h-0.1c0.1,0.9,0.1,2.5,0.1,4.6v15.2h-3.7V37.2h5.6l6.3,15.7c0.5,1.2,0.8,2.1,0.9,2.7h0.1 c0.4-1.2,0.7-2.2,1-2.8l6.4-15.6h5.4V60.8z"
    });
    rideLogo1.path().attr({
      d: 'M74.3,60.8h-4.1V37.2h4.1V60.8z'
    });
    rideLogo1.path().attr({
      d: 'M100.9,60.8h-4.4L85.1,43.5c-0.3-0.4-0.5-0.9-0.7-1.4h-0.1c0.1,0.5,0.1,1.6,0.1,3.2v15.4h-3.9V37.2h4.6l11.1,16.9 c0.5,0.7,0.8,1.2,0.9,1.4h0.1c-0.1-0.6-0.2-1.7-0.2-3.2V37.2h3.8V60.8z'
    });

    var rideLogo2 = rideLogo.g().attr({
      id: 'rideLogo2'
    });
    rideLogo2.path().attr({
      d: 'M55.6,69.4L52.1,82h-2.4l-2.5-8.8c-0.1-0.4-0.2-0.8-0.2-1.2h0c0,0.4-0.1,0.8-0.2,1.2L44.3,82h-2.5l-3.6-12.6h2.3l2.3,9.2 c0.1,0.4,0.2,0.8,0.2,1.2h0c0-0.3,0.1-0.7,0.3-1.2l2.6-9.2h2.2l2.4,9.3c0.1,0.3,0.1,0.7,0.2,1.1h0c0-0.3,0.1-0.7,0.2-1.2l2.3-9.3H55.6z'
    });
    rideLogo2.path().attr({
      d: 'M64.8,82h-7.2V69.4h7v1.8h-4.8v3.6h4.4v1.8h-4.4v3.7h5.1V82z'
    });
    rideLogo2.path().attr({
      d: 'M67.3,82V69.4h4.1c1.2,0,2.2,0.3,3,0.8c0.7,0.5,1.1,1.2,1.1,2.1c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.5-1,0.9-1.7,1.1v0 c0.9,0.1,1.6,0.4,2.1,1c0.5,0.5,0.8,1.2,0.8,2.1c0,1.1-0.4,2-1.3,2.6s-2,1-3.3,1H67.3z M69.4,71.1v3.6h1.4c0.7,0,1.3-0.2,1.8-0.5 c0.4-0.3,0.6-0.8,0.6-1.5c0-1.1-0.7-1.6-2.2-1.6H69.4z M69.4,76.4v4h1.8c0.8,0,1.4-0.2,1.8-0.5c0.4-0.4,0.7-0.9,0.7-1.5 c0-1.3-0.9-2-2.8-2H69.4z'
    });

    var rideLogo3 = rideLogo.g().attr({
      id: 'rideLogo3'
    });
    rideLogo3.path().attr({
      d: 'M38.2,103.6V90.9H42c4.8,0,7.1,2.1,7.1,6.2c0,1.9-0.7,3.5-2,4.7c-1.3,1.2-3.1,1.8-5.3,1.8H38.2z M40.4,92.7v9.1h1.7 c1.5,0,2.7-0.4,3.5-1.2s1.3-2,1.3-3.4c0-3-1.6-4.4-4.7-4.4H40.4z'
    });
    rideLogo3.path().attr({
      d: 'M58.8,103.6h-7.2V90.9h7v1.8h-4.8v3.6h4.4v1.8h-4.4v3.7h5.1V103.6z'
    });
    rideLogo3.path().attr({
      d: 'M60.7,103.1v-2.2c0.2,0.2,0.4,0.3,0.7,0.5c0.3,0.1,0.6,0.3,0.9,0.4c0.3,0.1,0.6,0.2,0.9,0.2c0.3,0.1,0.6,0.1,0.8,0.1 c0.9,0,1.6-0.1,2-0.4c0.4-0.3,0.7-0.7,0.7-1.3c0-0.3-0.1-0.6-0.2-0.8c-0.1-0.2-0.4-0.4-0.6-0.6c-0.3-0.2-0.6-0.4-0.9-0.5 c-0.4-0.2-0.7-0.3-1.1-0.5c-0.4-0.2-0.8-0.5-1.2-0.7c-0.4-0.2-0.7-0.5-1-0.8c-0.3-0.3-0.5-0.6-0.7-1c-0.2-0.4-0.2-0.8-0.2-1.3 c0-0.6,0.1-1.1,0.4-1.5c0.3-0.4,0.6-0.8,1.1-1.1c0.4-0.3,1-0.5,1.5-0.6c0.6-0.1,1.2-0.2,1.7-0.2c1.4,0,2.3,0.1,3,0.4v2.1 c-0.7-0.5-1.7-0.8-2.8-0.8c-0.3,0-0.6,0-0.9,0.1c-0.3,0.1-0.6,0.2-0.8,0.3c-0.2,0.1-0.5,0.3-0.6,0.5c-0.2,0.2-0.2,0.5-0.2,0.8 c0,0.3,0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.4,0.5,0.6c0.2,0.2,0.5,0.3,0.8,0.5c0.3,0.2,0.7,0.3,1.2,0.5c0.5,0.2,0.9,0.5,1.3,0.7 c0.4,0.3,0.8,0.5,1.1,0.8c0.3,0.3,0.5,0.6,0.7,1c0.2,0.4,0.3,0.8,0.3,1.3c0,0.6-0.1,1.2-0.4,1.6s-0.6,0.8-1.1,1.1 c-0.4,0.3-1,0.5-1.5,0.6c-0.6,0.1-1.2,0.2-1.8,0.2c-0.2,0-0.5,0-0.8,0c-0.3,0-0.6-0.1-1-0.1c-0.3-0.1-0.6-0.1-0.9-0.2 C61.1,103.3,60.9,103.2,60.7,103.1z'
    });

    rideLogo3.path().attr({
      d: 'M73.7,103.6h-2.2V90.9h2.2V103.6z'
    });
    rideLogo3.path().attr({
      d: 'M87.1,102.7c-1.3,0.7-2.8,1.1-4.5,1.1c-1.9,0-3.5-0.6-4.6-1.7s-1.8-2.7-1.8-4.6c0-2,0.6-3.6,1.9-4.8 c1.3-1.3,2.9-1.9,4.9-1.9c1.4,0,2.6,0.2,3.6,0.6v2.2c-1-0.6-2.2-1-3.5-1c-1.4,0-2.5,0.4-3.4,1.3c-0.9,0.9-1.3,2-1.3,3.4 c0,1.4,0.4,2.6,1.1,3.4c0.8,0.8,1.8,1.2,3.1,1.2c0.9,0,1.7-0.2,2.3-0.5v-3h-2.7v-1.8h4.9V102.7z'
    });
    rideLogo3.path().attr({
      d: 'M100.9,103.6h-2.3l-6.2-9.3c-0.2-0.2-0.3-0.5-0.4-0.7H92c0,0.3,0.1,0.8,0.1,1.7v8.3H90V90.9h2.5l6,9.1 c0.3,0.4,0.4,0.6,0.5,0.8h0c-0.1-0.3-0.1-0.9-0.1-1.7v-8.1h2.1V103.6z'
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
          // top: 0,
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
              // top: -ride.scrollTop
            });
            // backSc = ride.scrollTop;
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