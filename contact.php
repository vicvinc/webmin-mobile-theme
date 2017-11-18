<?php
  /*
    Template Name: contact
  */
  get_header();
  $template_dir = get_template_directory_uri();
?>
    <link rel="stylesheet" type="text/css" href="<?php echo $template_dir; ?>/css/contact.css">
</head>

<body data-page="contact_input" class="loading">
  <?php get_template_part( 'template/static/index.svg');?>
  <?php get_template_part( 'template/partial/header'); ?>

  <div class="wrapper">
    <?php get_template_part( 'template/partial/breadList'); ?>
    <section id="mailFormSection">
      <div class="mailFormSection_header">
        <h2 class="mailFormSection_title borderAnimation">
          <div class="mailFormSection_title_inner">
            MAIL FORM
            <span class="mailFormSection_title_text">Please Contact Us</span>
          </div>
          <i class="borderAnimation_before"></i>
          <i class="borderAnimation_after"></i>
        </h2>
        <ul class="currentNav">
          <li class="currentNav_list active">
            <a href="#mailFormSection" class="anchorLink">Mail Form</a>
          </li>
          <li class="currentNav_list">
            <a href="#telSection" class="anchorLink">Tel / Fax</a>
          </li>
        </ul>
      </div>
      <div class="mailFormSection_footer">
        <div class="mailFormSection_footerWrapper">
          <div class="mailFormSection_address">
            お問い合せ・ご質問などは下記のフォームよりお問い合わせ下さい後日担当者よりご連絡差し上げます
            <i>※</i>は必須項目です
          </div>
          <div class="mailFormSection_footerCurrent">
            <img src="/img/contact/step_current1.png" alt="STEP1">
          </div>
          <div class="mailFormSection_footerForm">
            <div id="mw_wp_form_mw-wp-form-91" class="mw_wp_form mw_wp_form_input  ">
              <form method="post" action="" enctype="multipart/form-data">
                <div class="mailFormSection_footerForm_inner">
                  <dl class="mailFormSection_footerFormKind">
                    <dt>お問い合せ種別
                      <i>※</i>
                    </dt>
                    <dd>
                      <span class="mwform-radio-field vertical-item">
                        <label for="mailFormSection_footerFormKindService-1">
                          <input type="radio" name="kind" value="弊社サービス全般" id="mailFormSection_footerFormKindService-1" />弊社サービス全般</label>
                      </span>
                      <span class="mwform-radio-field vertical-item">
                        <label for="mailFormSection_footerFormKindService-2">
                          <input type="radio" name="kind" value="取材•広報" id="mailFormSection_footerFormKindService-2" />取材•広報</label>
                      </span>
                      <span class="mwform-radio-field vertical-item">
                        <label for="mailFormSection_footerFormKindService-3">
                          <input type="radio" name="kind" value="上記項目以外のお問い合せ" id="mailFormSection_footerFormKindService-3" />上記項目以外のお問い合せ</label>
                      </span>
                      <input type="hidden" name="__children[kind][]" value="{&quot;\u5f0a\u793e\u30b5\u30fc\u30d3\u30b9\u5168\u822c&quot;:&quot;\u5f0a\u793e\u30b5\u30fc\u30d3\u30b9\u5168\u822c&quot;,&quot;\u53d6\u6750\u2022\u5e83\u5831&quot;:&quot;\u53d6\u6750\u2022\u5e83\u5831&quot;,&quot;\u4e0a\u8a18\u9805\u76ee\u4ee5\u5916\u306e\u304a\u554f\u3044\u5408\u305b&quot;:&quot;\u4e0a\u8a18\u9805\u76ee\u4ee5\u5916\u306e\u304a\u554f\u3044\u5408\u305b&quot;}"
                      />
                    </dd>
                  </dl>
                  <dl>
                    <dt>会社名
                      <i>※</i>
                    </dt>
                    <dd>
                      <input type="text" name="companyName" id="mailFormSection_footerFormCompany" size="60" value="" />
                    </dd>
                  </dl>
                  <dl>
                    <dt>部署名</dt>
                    <dd>
                      <input type="text" name="companyDivision" id="mailFormSection_footerFormDivision" size="60" value="" />
                    </dd>
                  </dl>
                  <dl>
                    <dt>お名前
                      <i>※</i>
                    </dt>
                    <dd>
                      <input type="text" name="kanji" id="mailFormSection_footerFormName" size="60" value="" />
                    </dd>
                  </dl>
                  <dl>
                    <dt>フリガナ
                      <i>※</i>
                    </dt>
                    <dd>
                      <input type="text" name="kana" id="mailFormSection_footerFormKana" size="60" value="" />
                    </dd>
                  </dl>
                  <dl>
                    <dt>メールアドレス
                      <i>※</i>
                    </dt>
                    <dd>
                      <input type="email" name="email" id="mailFormSection_footerFormMail" size="60" value="" data-conv-half-alphanumeric="true"
                      />
                    </dd>
                  </dl>
                  <dl class="mailFormSection_footerFormTel">
                    <dt>お電話番号
                      <i>※</i>
                    </dt>
                    <dd>
                      <span class="mwform-tel-field">
                        <input type="text" name="tel[data][0]" size="6" maxlength="5" value="" data-conv-half-alphanumeric="true" /> -
                        <input type="text" name="tel[data][1]" size="5" maxlength="4" value="" data-conv-half-alphanumeric="true" /> -
                        <input type="text" name="tel[data][2]" size="5" maxlength="4" value="" data-conv-half-alphanumeric="true" />
                        <input type="hidden" name="tel[separator]" value="-" />
                      </span>
                    </dd>
                  </dl>
                  <dl class="mailFormSection_footerFormStory">
                    <dt>当社を知った経緯</dt>
                    <dd>
                      <span class="caution">
                        <i>◎</i>の項目を選択された場合、入力欄は必須になります。</span>
                      <span class="mwform-radio-field vertical-item">
                        <label for="mailFormSection_footerFormStory-1">
                          <input type="radio" name="story" value="インターネット検索" id="mailFormSection_footerFormStory-1" />インターネット検索</label>
                      </span>
                      <span class="mwform-radio-field vertical-item">
                        <label for="mailFormSection_footerFormStory-2">
                          <input type="radio" name="story" value="知人・当社取引先からのご紹介" id="mailFormSection_footerFormStory-2" />知人・当社取引先からのご紹介</label>
                      </span>
                      <span class="mwform-radio-field vertical-item">
                        <label for="mailFormSection_footerFormStory-3">
                          <input type="radio" name="story" value="雑誌・専門誌" id="mailFormSection_footerFormStory-3" />雑誌・専門誌</label>
                      </span>
                      <span class="mwform-radio-field vertical-item">
                        <label for="mailFormSection_footerFormStory-4">
                          <input type="radio" name="story" value="各種SNS経由" id="mailFormSection_footerFormStory-4" />各種SNS経由</label>
                      </span>
                      <span class="mwform-radio-field vertical-item">
                        <label for="mailFormSection_footerFormStory-5">
                          <input type="radio" name="story" value="その他" id="mailFormSection_footerFormStory-5" />その他</label>
                      </span>
                      <input type="hidden" name="__children[story][]" value="{&quot;\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u691c\u7d22&quot;:&quot;\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u691c\u7d22&quot;,&quot;\u77e5\u4eba\u30fb\u5f53\u793e\u53d6\u5f15\u5148\u304b\u3089\u306e\u3054\u7d39\u4ecb&quot;:&quot;\u77e5\u4eba\u30fb\u5f53\u793e\u53d6\u5f15\u5148\u304b\u3089\u306e\u3054\u7d39\u4ecb&quot;,&quot;\u96d1\u8a8c\u30fb\u5c02\u9580\u8a8c&quot;:&quot;\u96d1\u8a8c\u30fb\u5c02\u9580\u8a8c&quot;,&quot;\u5404\u7a2eSNS\u7d4c\u7531&quot;:&quot;\u5404\u7a2eSNS\u7d4c\u7531&quot;,&quot;\u305d\u306e\u4ed6&quot;:&quot;\u305d\u306e\u4ed6&quot;}"
                      />
                      <span id="keyword" class="hiddenBox">
                        <i>◎</i>検索キーワード
                        <input type="text" name="keyword" id="searchKeyword" size="60" value="" />
                      </span>
                      <span id="other" class="hiddenBox">
                        <i>◎</i>その他
                        <input type="text" name="other" id="otherText" size="60" value="" />
                      </span>
                    </dd>
                  </dl>
                  <dl class="mailFormSection_footerFormFree">
                    <dt>お問い合わせ内容
                      <i>※</i>
                    </dt>
                    <dd>
                      <textarea name="free" cols="50" rows="5"></textarea>
                    </dd>
                  </dl>
                  <dl>
                    <dt>個人情報保護方針
                      <br /> への同意
                      <i>※</i>
                    </dt>
                    <dd>
                      <span class="mwform-checkbox-field horizontal-item">
                        <label for="mailFormSection_footerFormAgree-1">
                          <input type="checkbox" name="agree[data][]" value="個人情報の取り扱いについてプライバシーポリシーに同意します。" id="mailFormSection_footerFormAgree-1"
                          />個人情報の取り扱いについてプライバシーポリシーに同意します。</label>
                      </span>
                      <input type="hidden" name="agree[separator]" value="," />
                      <input type="hidden" name="__children[agree][]" value="{&quot;\u500b\u4eba\u60c5\u5831\u306e\u53d6\u308a\u6271\u3044\u306b\u3064\u3044\u3066\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u306b\u540c\u610f\u3057\u307e\u3059\u3002&quot;:&quot;\u500b\u4eba\u60c5\u5831\u306e\u53d6\u308a\u6271\u3044\u306b\u3064\u3044\u3066\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u306b\u540c\u610f\u3057\u307e\u3059\u3002&quot;}"
                      />
                    </dd>
                  </dl>
                </div>
                <div class="mailFormSection_footerFormButton">
                  <input type="submit" name="submitConfirm" value="確認画面へ進む" />
                </div>
                <input type="hidden" id="mw_wp_form_token" name="mw_wp_form_token" value="9f89b34f6a" />
                <input type="hidden" name="_wp_http_referer" value="/contact/" />
              </form>
              <!-- end .mw_wp_form -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="telSection">
      <div class="telSection_header">
        <h2 class="telSection_title borderAnimation">
          <div class="telSection_title_inner">
            TEL / FAX
            <span class="telSection_title_text">Please Contact Us</span>
          </div>
          <i class="borderAnimation_before"></i>
          <i class="borderAnimation_after"></i>
        </h2>
        <ul class="currentNav">
          <li class="currentNav_list">
            <a href="#mailFormSection" class="anchorLink">Mail Form</a>
          </li>
          <li class="currentNav_list active">
            <a href="#telSection" class="anchorLink">Tel / Fax</a>
          </li>
        </ul>
      </div>
      <div class="telSection_footer">
        <div class="telSection_footerWrapper">
          <p class="telSection_lead">
            お問い合せは、お電話でも受付けております。事業部によりお問い合せ先が異なりますので、お電話番号をご確認の上、お問い合わせ下さい。
          </p>
          <ul>
            <li class="telSection_footerList">
              <span class="telSection_footerListTitle">本社
                <br>及びクリエイティブ事業本部（代表）</span>
              <span class="telSection_footerListNumberBox">
                <span class="telSection_footerListNumber-tel">03-6451-0341</span>
                <span class="telSection_footerListNumber">
                  <span class="telSection_footerListNumberTitle">FAX</span>03-6451-0342
                </span>
              </span>
            </li>
            <li class="telSection_footerList">
              <span class="telSection_footerListTitle">メディアコンテンツ事業本部
                <br>THE WAVE</span>
              <span class="telSection_footerListNumberBox">
                <span class="telSection_footerListNumber-tel">03-6451-0343</span>
                <span class="telSection_footerListNumber">
                  <span class="telSection_footerListNumberTitle">FAX</span>03-6451-0354
                </span>
              </span>
            </li>
            <li class="telSection_footerList">
              <span class="telSection_footerListTitle">箱庭 編集部</span>
              <span class="telSection_footerListNumberBox">
                <span class="telSection_footerListNumber-tel">03-6451-0443</span>
                <span class="telSection_footerListNumber">
                  <span class="telSection_footerListNumberTitle">FAX</span>03-6451-0354
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <?php get_template_part( 'template/partial/footer'); ?>
    <script src="<?php echo $template_dir; ?>/js/contact.js"></script>

  </div>

</body>

</html>