'use strict';

(function (common) {

  // コンストラクタ  =================================================================
  common.init = function () {
    selectAct();
  };

  // functions  ====================================================================

  function selectAct() {
    $('.itemSort_select').change(function () {
      var sortHref = $(this).find("option:selected").val();
      location.href = sortHref;
    });

    var arg = new Object();
    var pair = location.search.substring(1).split('&');
    for (var i = 0; pair[i]; i++) {
      var kv = pair[i].split('=');
      arg[kv[0]] = kv[1];
    }

    $.each(arg, function (index, val) {
      $('.itemSort_select li').each(function (index) {
        var text = $(this).children('a').text().replace(/\s+/g, "");
        var tag = decodeURI(val).replace(/\s+/g, "");
        if (text == tag) {
          $(this).addClass('active');
          $('.selectTagGet').append('<i>' + text + '</i>').addClass('active');
        }
      });
    });

    $('.itemSort_wrap').each(function (index, el) {
      if ($(this).find('li.active').length) {
        $(this).addClass('selected');
      }
    });

    if ($('body').attr('data-page') == 'itemPage') {
      $('.itemSort_boxTitle').on('click', function () {
        if ($(this).hasClass('active')) {
          TweenLite.to($(this).next('.itemSort_box'), 0.2, { height: 0 });
          $(this).removeClass('active');
        } else {
          TweenLite.set($(this).next('.itemSort_box'), { height: "auto" });
          TweenLite.from($(this).next('.itemSort_box'), 0.2, { height: 0 });
          $(this).addClass('active');
        }
      });
    }
  }
})(ride.common = ride.common || {});

ride.common.init();
