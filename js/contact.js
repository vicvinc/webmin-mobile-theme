'use strict';

(function (contact) {

  // コンストラクタ  =================================================================
  contact.init = function () {
    contactEvent();
    var _titleEvent = new ride.common.titleEvent();
  };

  // functions  ====================================================================

  function contactEvent() {
    titleAnimationEvent();
    popupEvent();
    toggleEvent();
    // insert();
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
      if (scrollTop + winH / 2 > this.titlePos) {
        this.target.addClass('inview');
      }
    };
    Inview.prototype.inviewHandler = function () {
      var _this = this;
      scrollTop = $(document).scrollTop();
      _this.inviewEvent();
      $(window).on('resize', function () {
        scrollTop = $(document).scrollTop();
        _this.inviewEvent();
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

  function popupEvent() {
    function SetLink() {
      var _this = this;
      $('#mailFormSection_footerFormKindService-1').closest('label').html('<input type="radio" name="kind" value="弊社サービス全般" id="mailFormSection_footerFormKindService-1">弊社<a href="/contact-service/">サービス</a>全般');
      $('#mailFormSection_footerFormAgree-1').closest('label').html('<input type="checkbox" name="agree[data][]" value="個人情報の取り扱いについてプライバシーポリシーに同意します。" id="mailFormSection_footerFormAgree-1">個人情報の取り扱いについて<a href="/privacy/">プライバシーポリシー</a>に同意します。');
      _this.disp();
    }

    SetLink.prototype.disp = function () {
      var _this = this;
      $('label').find('a').on('click', function () {
        var href = $(this).attr('href');
        window.open(href, "window_name", "width=617,height=800,scrollbars=yes");
        return false;
      });
    };

    if ($('[data-page="contact_input"]')[0]) {
      // window.addEventListener("load", new setLink(), false);
      $(document).ready(function () {
        var _setLink = new SetLink();
      });
    }
  }

  function toggleEvent() {
    function Contretemps(target) {
      var _this = this;
      this.target = target;
      this.hiddenArray = {
        '0': 'keyword',
        '4': 'other'
      };

      $(_this.target).on('click', function () {
        console.log(_this.target);
        _this.formCheck(this);
      });

      if (window.sessionStorage.getItem('number') != null) {
        var checkNum = window.sessionStorage.getItem('number');
        checkNum = Number(checkNum);
        _this.toggleText(this.hiddenArray[checkNum]);
        $('input[name=story]:eq(' + checkNum + ')').prop('checked', true);
      }

      $('input[name="submitConfirm"]').on('click', function () {
        if ($('.hiddenBox.view').find('input').val() == '') {
          alert('必須項目が未入力');
          return false;
        }
      });
    }

    Contretemps.prototype.formCheck = function (targetNum) {
      var _this = this;
      _this.index = $(_this.target).index(targetNum);
      window.sessionStorage.setItem('number', _this.index);
      _this.hiddenArray[_this.index] != null ? _this.toggleText(_this.hiddenArray[_this.index]) : $('.hiddenBox').removeClass('view');
    };

    Contretemps.prototype.toggleText = function (value) {
      var _this = this;
      if ($('input[name=' + value + ']').closest('.hiddenBox').css('height') != 'auto') {
        $('.hiddenBox').removeClass('view');
        $('.hiddenBox').find('input[name=' + value + ']').closest('.hiddenBox').addClass('view');
      }
    };

    $(document).ready(function () {
      var _contretemps = new Contretemps('input[name=story]');
    });
  }

  function insert() {
    function SetText() {
      var _this = this;
      $('#mailFormSection_footerFormStory-1').closest('label').html('<input type="radio" name="story" value="インターネット検索" id="mailFormSection_footerFormStory-1">インターネット検索<span class="searchFormBox">( 検索キーワード <input type="text" name="keyword" id="searchForm" size="30" value="" data-conv-half-alphanumeric="true">)</span>');
      $('#mailFormSection_footerFormStory-5').closest('label').html('<input type="radio" name="story" value="その他" id="mailFormSection_footerFormStory-5">その他<span class="otherFormBox"><input type="text" name="other" id="otherForm" size="30" value="" data-conv-half-alphanumeric="true"></span>');
    }

    $(document).ready(function () {
      var _setText = new SetText();
    });
  }
})(ride.contact = ride.contact || {});

ride.contact.init();
