'use strict';

(function (about) {

  about.init = function () {
    aboutEvent();
    var _titleEvent = new ride.common.titleEvent();
  };

  function aboutEvent() {
    var $body = $('body');
    var $window = $(window);
    var windowW = 0;
    var windowH = 0;
    var scrollTop = 0;
    var sec1Pos = $('#section1').offset().top;
    var sec2Pos = $('#section2').offset().top;
    var sec3Pos = $('#section3').offset().top;
    var sec4Pos = $('#section4').offset().top;
    $window.on('scroll', function () {
      scrollTop = $window.scrollTop();
      if (sec1Pos < scrollTop && scrollTop < sec2Pos) {
        $body.attr('data-section', '1');
        if (scrollTop - sec1Pos > 220) {
          $('#section1 .section_ttl').css({
            'position': 'absolute',
            'top': 430
          }).addClass('on');
        }
      } else if (sec2Pos < scrollTop && scrollTop < sec3Pos) {
        $body.attr('data-section', '2');
        if (scrollTop - sec2Pos > 220) {
          $('#section2 .section_ttl').css({
            'position': 'absolute',
            'top': 430
          }).addClass('on');
        }
      } else if (sec3Pos < scrollTop && scrollTop < sec4Pos) {
        $body.attr('data-section', '3');
        if (scrollTop - sec3Pos > 220) {
          $('#section3 .section_ttl').css({
            'position': 'absolute',
            'top': 430
          }).addClass('on');
        }
      } else if (sec4Pos < scrollTop) {
        $body.attr('data-section', '4');
        if (scrollTop - sec4Pos > 220) {
          $('#section4 .section_ttl').css({
            'position': 'absolute',
            'top': 430
          }).addClass('on');
        }
      } else {
        $body.attr('data-section', '');
      }
    });
  }
})(ride.about = ride.about || {});

ride.about.init();
