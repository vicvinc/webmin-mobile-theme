'use strict';

(function (common) {

  // コンストラクタ  =================================================================
  common.init = function () {
    setSlider();
  };

  // functions  ====================================================================
  function setSlider() {
    var $worksSlider = $('.worksSlider'),
        $worksSlider_thumbnails_node = $('.worksSlider_thumbnails_nodes'),
        $worksBackSlider = $('.worksBackSlider');

    // $worksBackSlider.slick({
    //   speed: 1000,
    //   cssEase: 'ease-out',
    //   arrows: false,
    //   rtl: true,
    //   asNavFor: '.worksSlider'
    // });

    $worksSlider.slick({
      speed: 1000,
      variableWidth: true,
      centerMode: true,
      centerPadding: 100,
      prevArrow: '.worksSlider_control_prev',
      nextArrow: '.worksSlider_control_next'
      // asNavFor: '.worksBackSlider'
    });

    $worksSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      $worksSlider_thumbnails_node.removeClass('active');
      $worksSlider_thumbnails_node.eq(nextSlide).addClass('active');
    });

    $worksSlider_thumbnails_node.on('click', function () {
      var index = $worksSlider_thumbnails_node.index(this);
      $worksSlider.slick('slickGoTo', index);
    });
  }
})(ride.common = ride.common || {});

ride.common.init();
