'use strict';

(function (common) {

  // コンストラクタ  =================================================================
  common.init = function () {
    itemSlideAct();
    selectAct();
  };

  // functions  ====================================================================
  function itemSlideAct() {
    $('.articleBlock_main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.articleBlock_sub'
    });
    $('.articleBlock_sub').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.articleBlock_main',
      dots: true,
      centerMode: true,
      focusOnSelect: true
    });
  }

  function selectAct() {
    if ($('.sizeChoice_select').find("option").text() == '') {
      $('.sizeChoice').addClass('hide');
    }
    var selectItemID = $('.commonBtn.cart').attr('data-id');
    var selectItemAmount = 1;
    var itemHref = 'http://www.liberta.net/lb/CartAdd?sp_cd=lb&cm_cd_1=' + selectItemID + '&item_buy_div_1=0&item_count_1=' + selectItemAmount;
    $('.commonBtn.cart a').attr('href', itemHref);

    $('.commonBtn.cart').on('click', function () {
      var $parent = $(this).closest('.articleBlock_info');
      selectItemID = $parent.find('.sizeChoice_select').find("option:selected").val();
      selectItemAmount = $parent.find('.amountChoice_select').find("option:selected").val();
      var itemHref = 'http://www.liberta.net/lb/CartAdd?sp_cd=lb&cm_cd_1=' + selectItemID + '&item_buy_div_1=0&item_count_1=' + selectItemAmount;
      $('.commonBtn.cart a').attr('href', itemHref);
      window.open(itemHref);
      return false;
    });

    $('.articleBlock_specListTitle').find('li').on('click', function () {
      if ($(this).is('.active')) {
        var num = $('.articleBlock_specListTitle').find('li').index(this);
        $('.articleBlock_specListTitle').find('li').removeClass('active');
        $('.articleBlock_specListContents').find('li').stop(true, false).fadeOut(100);
      } else {
        var num = $('.articleBlock_specListTitle').find('li').index(this);
        $('.articleBlock_specListTitle').find('li').removeClass('active');
        $('.articleBlock_specListTitle').find('li').eq(num).addClass('active');
        $('.articleBlock_specListContents').find('li').stop(true, false).fadeOut(100);
        $('.articleBlock_specListContents').find('li').eq(num).stop(true, false).fadeIn(100);
      }
      return false;
    });

    if (!$('.articleBlock_sub').find('.slick-active').length) {
      $('.slick-slide').css('opacity', 1);
    }

    $('.aligncenter').each(function (index, el) {
      $(this).wrap('<div class="aligncenterWrap"></div>');
    });
  }
})(ride.common = ride.common || {});

ride.common.init();
