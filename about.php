<?php
  /*
    Template Name: about
  */
  get_header();
  $template_dir = get_template_directory_uri();
?>
  <link rel="stylesheet" type="text/css" href="<?php echo $template_dir; ?>/css/about.css">
</head>
<body data-page="about" class="loading">
  <?php get_template_part( 'template/static/spinner.svg');?>
  <?php get_template_part( 'template/partial/header'); ?>
  <div class="wrapper">
    <section id="section1">
      <div class="section_visual"></div>
      <div class="sectionWrapper">
        <h2 class="section_ttl borderAnimation">
          <i class="borderAnimation_before"></i>
          <i class="borderAnimation_after"></i>PHILOSOPHY</h2>
        <div class="section_sub">Company message</div>
        <p class="section_lead">個が輝ける
          <br>クリエイティブ・クラス
          <br>カンパニー</p>
        <p class="section_txt">
          “個性的なメンバーの能力を最大限に活かせる会社”、 “メンバーひとり一人が主役となって活躍できる会社” というのが、RIDE MEDIA&DESIGN設立の根幹にあります。大きな組織が主体だった時代が終わり、“個”、“個性”が主体となる時代が到来しています。今までより自由なワークスタイルが可能になり、それを支えるプラットフォームやソリューションも整ってきました。ただ、仕事に対するスタイルや考え方が変わったということが、私たちにとって「本質的な価値」や、幸せではありません。“個”や“個性”を輝かせるということは、ひとり一人が真の意味で「自分を生きている」かどうか、ということにフォーカスすることだと考えます。既存の価値観をすべて鵜呑みにするのではなく、確固たる自分のアイデンティティに基づき、意思決定を行う。それを仕事や生活に結びつけることで、世の中に大きな価値を見出していく。そのような生き方こそ、真の意味で“個”や“個性”を尊重することではないでしょうか。
        </p>
        <p class="section_lead">世界中のすべての人々の
          <br>“個が輝く”社会を目指して</p>
        <p class="section_txt">
          一方、“個”だけでは成し得ないことも社会には多く存在します。仲間のアイデンティティと同調させ、掛け合わせていくことで、より大きな価値を世の中に提供することができるのです。世の中に大きな貢献ができれば、個の幸福度も上がりますので、社会にとって非常に良い循環となっていきます。RIDE
          MEDIA&DESIGNメンバーは、自分のアイデンティティを大切にし、それを仲間とともに増幅させ、より大きな価値を社会にもたらすべく精力的に活動を行ってまいります。また、経営陣はそのような環境作りに重きを置くことをお約束します。
          <br>
          <br>RIDE MEDIA & DESIGN 株式会社
          <br>代表取締役CEO
          <a href="javascript:void(0)" class="popupButton" onclick="window.open(/profile/, 'window_name', 'width=650,height=800,scrollbars=yes'); return false;">国府田 淳</a>
        </p>
      </div>
    </section>
    <section id="section2">
      <div class="section_visual"></div>
      <div class="sectionWrapper">
        <h2 class="section_ttl borderAnimation">
          <i class="borderAnimation_before"></i>
          <i class="borderAnimation_after"></i>OUR STYLE</h2>
        <div class="section_sub">Unique and Cultural Sense</div>
        <p class="section_lead">
          <span>
            <img src="<?php echo $template_dir;?>/img/s/ourstyle-subtitle.png" alt="Alternative Attitude">
          </span>
          <br> 個性を発揮しないと
          <br>生きている意味がない
          <br> 文化を生み出さないと
          <br>ワクワクできない
        </p>
        <p class="section_txt">
          <span class="section_txt-leftCulumn">
            私たちのベースとなる心持ちは、既存の概念に捉われない“Alternative”。手掛けるすべてのプロジェクトは、「個性的で文化感」のあるものです。それは“個”にフォーカスした理念と共鳴しており自分たちらしさを出さない仕事ならRIDEでやる必要がないと考えているからです。もちろん責任は重大ですが、そこにチャレンジするからこそや
          </span>
          <span class="section_txt-rightCulumn">
            りがいがあり、革新的なクリエティブが生まれると考えています。また生み出すものは同じような価値観を持った人たちをコミュニティ化し、一つの文化圏を作り上げるようにを意識しています。既存の価値観に合わせたものではなく、価値観そのものを新しく創造する、そんな気概で各プロジェクトに挑んでおります。
          </span>
        </p>
      </div>
    </section>
    <section id="section3">
      <div class="section_visual"></div>
      <div class="sectionWrapper">
        <h2 class="section_ttl borderAnimation">
          <i class="borderAnimation_before"></i>
          <i class="borderAnimation_after"></i>BUSINESS</h2>
        <div class="section_sub">Way of Working</div>
        <p class="section_lead">WEBとMEDIAで
          <br>暮らしを彩る</p>
        <p class="section_txt">
          <span class="section_txt-leftCulumn">
            RIDE MEDIA & DESIGNは、WEBとMEDIAを使って、人々に豊かな暮らし＝LIFE STYLEを提供する企業です。RIDEのクリエイティブは、すべてライフスタイルやカルチャーに根ざしたもの。ただ洒落たモノを作るだけではなく、物事に潜む本質的な価値を見出し、それを普く伝え、一つのカ
          </span>
          <span class="section_txt-rightCulumn">
            ルチャーとして紡ぎ上げていくよう心掛けています。「それって本当に価値のあるものなの？」「今だけではなく普遍的に愛される？」「末永くていねいに使ってもらえる？」を合言葉に、今日も日本トップレベルのクリエイティブを提供すべく活動しています。
          </span>
        </p>
        <div class="commonBtn black">
          <a href="/service/">Service</a>
        </div>
      </div>
    </section>
    <section id="section4">
      <div class="section_visual"></div>
      <div class="sectionWrapper">
        <h2 class="section_ttl borderAnimation">
          <i class="borderAnimation_before"></i>
          <i class="borderAnimation_after"></i>PROJECT</h2>
        <div class="section_sub">Various Efforts</div>
        <p class="section_lead">制作だけにとどまらない
          <br>独自の事業展開</p>
        <p class="section_txt">
          <span class="section_txt-leftCulumn">
            クライアントさまに提供するサービスだけではなく、自らメディア運営を行い、事業やリアル店舗を展開し、さまざまなビジネスにチャレンジしております。自らがリスクをとって事業を行うこと
          </span>
          <span class="section_txt-rightCulumn">
            で、リアルな課題解決力を身に付け、圧倒的な地力をつけることを心掛けています。それらの経験やナレッジを蓄積して皆さまと共有することで、独自の集合知を築いていければと考えています。
          </span>
        </p>
        <div class="commonBtn black">
          <a href="/service/#project">Project</a>
        </div>
      </div>
    </section>
    <?php get_template_part( 'template/partial/footer'); ?>
    <script src="<?php echo $template_dir; ?>/js/about.js"></script>
  </div>
</body>

</html>