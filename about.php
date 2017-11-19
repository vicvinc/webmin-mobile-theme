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
  <?php get_template_part( 'template/static/sprites');?>
  <?php get_template_part( 'template/partial/header'); ?>
  <div class="wrapper">
    <?php get_template_part( 'template/partial/about-section'); ?>
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