<?php
  /*
    Template Name: service
  */
  get_header();
  $template_dir = get_template_directory_uri();
?>
    <link rel="stylesheet" type="text/css" href="<?php echo $template_dir; ?>/css/service.css">
</head>

<body data-page="service" class="fixed">
  <?php get_template_part( 'template/static/sprites'); ?>
  <?php get_template_part( 'template/partial/header'); ?>
  <canvas id="bg" width="100%" height="100%"></canvas>
  <div class="wrapper">
    <?php get_template_part( 'template/partial/breadList'); ?>
    <div class="mainVisual">
      <div class="mainVisual_wrap">
        <div class="mainVisual_inner">
          <h1 class="mainVisual_title">
            BUSINESS
            <br> DEPLOYMENT
            <br>
            <strong>
              <span>3</span>DIVISION</strong>
          </h1>
          <p class="mainVisual_subTitle">Business of RIDE is made up of three division</p>
          <div class="mainVisual_nav">
            <img src="<?php echo $template_dir;?>/img/service/main-nav.png" alt="">
            <svg version="1.1" id="レイヤー_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 612.1 530.1" enable-background="new 0 0 612.1 530.1" xml:space="preserve" class="svgObject">
              <a href="#creative" class="anchorLink">
                <g>
                  <path class="svgObject_path" data-anchor="create" d="M396.1,1c-15.2,26.4-30.5,52.7-45.7,79.1c-23.1,39.9-46.1,79.9-69.2,119.7c-20.2,34.8-40.5,69.6-60.7,104.4
                      c-13.5,23.2-26.9,46.3-40.3,69.5c-1.4,2.4-2.7,4.1-6,4c-56.2-0.1-112.3-0.1-168.5-0.2c-0.8,0-1.6-0.1-3.3-0.3c1-1.9,1.7-3.5,2.5-5
                      c23-40.3,46-80.6,69.2-120.8c15-26.1,30.4-52,45.5-78C152.4,117,185.1,60.3,217.8,3.7c0.5-0.9,0.9-1.8,1.3-2.7
                      C278.1,1,337.1,1,396.1,1z" />
                </g>
              </a>
              <a href="#media" class="anchorLink">
                <g>
                  <path class="svgObject_path" data-anchor="media" d="M395.5,2.7c9.9,17.2,18.9,32.9,28,48.6c31,53.2,62.1,106.4,93.1,159.6c9.4,16.1,18.2,32.6,27.5,48.8
                    c21.9,38.1,43.9,76.2,65.9,114.2c1.6,2.7,1.9,4.9,0.2,7.8c-5.1,8.8-9.6,17.9-14.6,26.7c-22.4,38.9-44.9,77.8-67.4,116.7
                    c-1.1,1.9-2.2,3.7-3.6,6.1c-5.6-9.6-11-18.7-16.2-27.9c-16.3-28.8-32.6-57.6-48.9-86.4c-3.1-5.5-6.9-10.6-10.1-16
                    c-10.8-18.5-21.6-37.1-32.2-55.7c-15.2-26.6-30.3-53.2-45.5-79.8c-4-6.9-8.6-13.4-12.5-20.4c-16.3-28.6-32.5-57.3-48.9-85.9
                    c-1.7-3-1.8-5.4-0.1-8.3c8.9-15.1,17.6-30.2,26.4-45.3c14.6-25.2,29.1-50.4,43.7-75.7C385.1,21.2,389.9,12.5,395.5,2.7z"
                  />
                </g>
              </a>
              <a href="#life" class="anchorLink">
                <g>
                  <path class="svgObject_path" data-anchor="lifeStyle" d="M1,378.1c38.2,0,76.3-0.1,114.5-0.1c55.7,0,111.3-0.1,167,0c34.9,0,69.8,0.3,104.7,0.4c13.8,0,27.6-0.2,41.4-0.5
                      c5.1-0.1,8.5,1.2,11.3,6.3c23.9,42.3,48.1,84.4,72.4,126.5c3.8,6.6,8,12.9,12.5,20.3c-2.6,0-4.2,0-5.8,0c-59.7,0-119.3,0-179,0
                      c-82,0-163.9,0-245.9,0.1c-3.9,0-5.9-1.3-7.8-4.5c-27-47.2-54.2-94.2-81.4-141.3c-1.2-2.1-2.6-4.2-4-6.3C1,378.8,1,378.4,1,378.1z"
                  />
                </g>
              </a>
            </svg>
          </div>
          <p class="mainVisual_lead">
            RIDE MEDIA & DESIGN
          </p>
        </div>
      </div>
    </div>
    <section class="divisionSection" id="division">
      <div class="divisionBlock divisionBlock-1" id="creative">
        <div class="divisionBlock_top">
          <ul class="currentNav">
            <li class="currentNav_list active">
              <a href="#division" class="anchorLink">Division</a>
            </li>
            <li class="currentNav_list">
              <a href="#project" class="anchorLink">Our Project</a>
            </li>
          </ul>
          <h2 class="sectionBlock_title borderAnimation">
            <span class="sectionBlock_title_number">01</span>
            <span class="sectionBlock_title_text">
              <strong>CREATIVE</strong>
              DIVISION
            </span>
            <i class="borderAnimation_before"></i>
            <i class="borderAnimation_after"></i>
          </h2>
          <p class="divisionBlock_lead">
            We are a Tokyo-based creative digital media
            <br> and web design company.
            <br> Providing total services ranging from
            <br> web design and development,
            <br> custom system development for smart phones,
            <br> e-commerce includes merchandising,
            <br> graphic brand logo and print design works.
          </p>
        </div>
        <div class="divisionBlock_visual">
          <img src="<?php echo $template_dir;?>/img/service/division1-visual.jpg" alt="">
        </div>
        <h3 class="divisionBlock_jpTitle">本部</h3>
        <p class="divisionBlock_jpText">
          WEB DESIGN AWARD 
        </p>
        <div class="divisionBlock_detailBox">
          <div class="divisionBlock_detailBox_inner">
            <div class="divisionBlock_detailList">
              <dl class="divisionBlock_detailList_item divisionBlock_detailList_item-1">
                <dt class="divisionBlock_detailList_title">
                  <em>IT事業部</em>
                  <span>Information Technology</span>
                </dt>
                <dd class="divisionBlock_detailList_text">WEB・スマホサイト制作、システム構築</dd>
              </dl>
              <dl class="divisionBlock_detailList_item divisionBlock_detailList_item-2">
                <dt class="divisionBlock_detailList_title">
                  <em>ECマーケティング事業部</em>
                  <span>EC Marketing</span>
                </dt>
                <dd class="divisionBlock_detailList_text">Eコマース運営</dd>
              </dl>
              <dl class="divisionBlock_detailList_item divisionBlock_detailList_item-3">
                <dt class="divisionBlock_detailList_title">
                  <em>デザイン事業部</em>
                  <span>Design</span>
                </dt>
                <dd class="divisionBlock_detailList_text">WEB、雑誌、プロダクトのデザイン</dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="divisionBlock_bottom">
          <div class="divisionBlock_bottom_inner">
            <p class="section_txt">
              <span class="section_txt-leftCulumn">
                <strong class="section_txtTitle">Planning＆Direction</strong>
                
              </span>
              <span class="section_txt-rightCulumn">
                <strong class="section_txtTitle">Creative</strong>
                
              </span>
            </p>

            <div class="divisionBlock_infoBox">
              <div class="divisionBlock_infoBox_inner">
                <h4 class="divisionBlock_infoBox_title">One part of works</h4>
                <ul class="divisionBlock_gridList">
                  <li class="divisionBlock_gridItem">
                    <p class="divisionBlock_gridImg">
                      <img src="<?php echo $template_dir;?>/img/service/division1-portfolio1.jpg" alt="JACK PURCELL　80周年特設WEBサイト">
                    </p>
                    <p class="divisionBlock_gridTitle">JACK PURCELL　80周年特設WEBサイト</p>
                  </li>
                  <li class="divisionBlock_gridItem">
                    <p class="divisionBlock_gridImg">
                      <img src="<?php echo $template_dir;?>/img/service/division1-portfolio2.jpg" alt="SNOOPY  日本公式WEBサイト">
                    </p>
                    <p class="divisionBlock_gridTitle">SNOOPY 日本公式WEBサイト</p>
                  </li>
                  <li class="divisionBlock_gridItem">
                    <p class="divisionBlock_gridImg">
                      <img src="<?php echo $template_dir;?>/img/service/division1-portfolio3.jpg" alt="Champion　日本公式WEBサイト">
                    </p>
                    <p class="divisionBlock_gridTitle">Champion　日本公式WEBサイト</p>
                  </li>
                </ul>
                <a href="/works/ride_works_category/creative/" class="button">Works More View</a>
                <p class="divisionBlock_titleVisual">
                  <img src="<?php echo $template_dir;?>/img/service/division1-title.png" alt="DIVISION:01 CREATIVE">
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="divisionBlock divisionBlock-2" id="media">
        <div class="divisionBlock_top">
          <ul class="currentNav">
            <li class="currentNav_list active">
              <a href="#division" class="anchorLink">Division</a>
            </li>
            <li class="currentNav_list">
              <a href="#project" class="anchorLink">Our Project</a>
            </li>
          </ul>
          <h2 class="sectionBlock_title borderAnimation">
            <span class="sectionBlock_title_number">02</span>
            <span class="sectionBlock_title_text">
              <strong>MEDIA
                <br>CONTENT</strong>
              DIVISION
            </span>
            <i class="borderAnimation_before"></i>
            <i class="borderAnimation_after"></i>
          </h2>
          <p class="divisionBlock_lead">
            Our owned media solutions are the foundation of any successful
            <br> integrated marketing strategies includes website design and SNS development.
            <br> Particularly, focused on landing page strategies.
            <br> Full branding solutions and creative content creation as well as blog development.
            <br> We also own and operate a unique media brand called, “haconiwa”.
            <br> This digital lifestyle platform is a female-driven and it spotlights “kawaii”, stylish,
            <br> editorial content, designs and more by creative women around Japan.
            <br> These skilled quality works and expriences would result
            <br> in to be overall integrated solutions.
          </p>
        </div>
        <div class="divisionBlock_visual">
          <img src="<?php echo $template_dir;?>/img/service/division2-visual.jpg" alt="">
        </div>
        <h3 class="divisionBlock_jpTitle">本部</h3>
        <p class="divisionBlock_jpText">
          <br> 
        </p>
        <div class="divisionBlock_detailBox">
          <div class="divisionBlock_detailBox_inner">
            <div class="divisionBlock_detailList">
              <dl class="divisionBlock_detailList_item divisionBlock_detailList_item-1">
                <dt class="divisionBlock_detailList_title">
                  <em>コンテンツマーケティング事業部</em>
                  <span>Content Marketing</span>
                </dt>
                <dd class="divisionBlock_detailList_text">企業のオウンドメディア・SNSの
                  <br>企画、制作、運営</dd>
              </dl>
              <dl class="divisionBlock_detailList_item divisionBlock_detailList_item-2">
                <dt class="divisionBlock_detailList_title">
                  <em>メディア事業部</em>
                  <span>Media</span>
                </dt>
                <dd class="divisionBlock_detailList_text">ファッションカタログ、
                  <br>雑誌メディアの制作</dd>
              </dl>
              <dl class="divisionBlock_detailList_item divisionBlock_detailList_item-3">
                <dt class="divisionBlock_detailList_title">
                  <em>箱庭事業部</em>
                  <span>Haconiwa</span>
                </dt>
                <dd class="divisionBlock_detailList_text">自社メディア「箱庭」の運営</dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="divisionBlock_bottom">
          <div class="divisionBlock_bottom_inner">
            <p class="section_txt">
              <span class="section_txt-leftCulumn">
                <strong class="section_txtTitle">Problem solving</strong>
                 とならず、ゴールである課題解決につながるプランニングをさせて頂きます。制作、運用、分析といった三位一体でのプロジェクト展開が可能です。また、自社メディアの運営をはじめ様々なメディア運営の実績から導かれた有効な情報発信を心がけています。そのため、SNS運用、記事制作、メディア設計とあらゆる場面において結果に裏付けされた対応をいたします。
              </span>
              <span class="section_txt-rightCulumn">
                <strong class="section_txtTitle">User’s Insight</strong>
              </span>
            </p>

            <div class="divisionBlock_infoBox">
              <div class="divisionBlock_infoBox_inner">
                <h4 class="divisionBlock_infoBox_title">One part of works</h4>
                <ul class="divisionBlock_gridList">
                  <li class="divisionBlock_gridItem">
                    <p class="divisionBlock_gridImg">
                      <img src="<?php echo $template_dir;?>/img/service/division2-portfolio1.jpg" alt="JACK PURCELL　80周年特設WEBサイト">
                    </p>
                    <p class="divisionBlock_gridTitle">WEBマガジン「アマノ食堂」</p>
                  </li>
                  <li class="divisionBlock_gridItem">
                    <p class="divisionBlock_gridImg">
                      <img src="<?php echo $template_dir;?>/img/service/division2-portfolio2.jpg" alt="SNOOPY  日本公式WEBサイト">
                    </p>
                    <p class="divisionBlock_gridTitle">雑誌 「別冊 GO OUT magazine」</p>
                  </li>
                  <li class="divisionBlock_gridItem">
                    <p class="divisionBlock_gridImg">
                      <img src="<?php echo $template_dir;?>/img/service/division2-portfolio3.jpg" alt="Champion　日本公式WEBサイト">
                    </p>
                    <p class="divisionBlock_gridTitle">西川産業 公式facebook 運営サポート</p>
                  </li>
                </ul>
                <a href="/works/ride_works_category/media_content/" class="button">Works More View</a>
                <p class="divisionBlock_titleVisual">
                  <img src="<?php echo $template_dir;?>/img/service/division2-title.png" alt="DIVISION:02 MEDIA CONTENT">
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="divisionBlock divisionBlock-3" id="life">
        <div class="divisionBlock_top">
          <ul class="currentNav">
            <li class="currentNav_list active">
              <a href="#division" class="anchorLink">Division</a>
            </li>
            <li class="currentNav_list">
              <a href="#project" class="anchorLink">Our Project</a>
            </li>
          </ul>
          <h2 class="sectionBlock_title borderAnimation">
            <span class="sectionBlock_title_number">03</span>
            <span class="sectionBlock_title_text">
              <strong>LIFE STYLE</strong>
              DIVISION
            </span>
            <i class="borderAnimation_before"></i>
            <i class="borderAnimation_after"></i>
          </h2>
          <p class="divisionBlock_lead">
            We run an original projects such as;
            <br> creator management project called,
            <br> “THE WAVE” a share house
            <br> with atelier produced by haconiwa,
            <br> specialty coffee stand
            <br> “ABOUT LIFE COFFEE BREWERS”
            <br> a community with a famous
            <br> Japanese writer/journalist, Toshinao SASAKI.
            <br> We currently launched a new project
            <br> with well-known editor as well as a producer
            <br> of the Kurashi no Kihon website, Yataro MATSUURA
          </p>
        </div>
        <div class="divisionBlock_visual">
          <img src="<?php echo $template_dir;?>/img/service/division3-visual.jpg" alt="">
        </div>
        <h3 class="divisionBlock_jpTitle">ライフスタイル事業本部</h3>
        <p class="divisionBlock_jpText">
          クリエイターマネジメントの「THE WAVE」、シェアハウス「箱庭の住めるアトリエ」、渋谷にあるスペシャルティコーヒースタンド「ABOUT LIFE COFFEE BREWERS」の運営、ジャーナリストの佐々木俊尚氏や文筆家の松浦弥太郎氏などとの共同プロジェクトも行っております。
        </p>
        <div class="divisionBlock_detailBox">
          <div class="divisionBlock_detailBox_inner">
            <div class="divisionBlock_detailList">
              <dl class="divisionBlock_detailList_item divisionBlock_detailList_item-1">
                <dt class="divisionBlock_detailList_title">
                  <em>THE WAVE 事業部</em>
                  <span>The Wave</span>
                </dt>
                <dd class="divisionBlock_detailList_text">クリエイターのマネジメント</dd>
              </dl>
              <dl class="divisionBlock_detailList_item divisionBlock_detailList_item-2">
                <dt class="divisionBlock_detailList_title">
                  <em>ABOUT LIFE COFFEE
                    <br>BREWERS 事業</em>
                  <span>ALCB</span>
                </dt>
                <dd class="divisionBlock_detailList_text">スペシャルティコーヒースタンドの運営</dd>
              </dl>
              <dl class="divisionBlock_detailList_item divisionBlock_detailList_item-3">
                <dt class="divisionBlock_detailList_title">
                  <em>LIFE MAKERS 事業</em>
                  <span>Life Makers</span>
                </dt>
                <dd class="divisionBlock_detailList_text">佐々木俊尚氏主宰
                  <br>有料会員制コミュニティの運営</dd>
              </dl>
              <dl class="divisionBlock_detailList_item divisionBlock_detailList_item-4">
                <dt class="divisionBlock_detailList_title">
                  <em>スチーブ 事業</em>
                  <span>Schiive</span>
                </dt>
                <dd class="divisionBlock_detailList_text">共同プロジェクトの運営</dd>
              </dl>

            </div>
          </div>
        </div>
        <div class="divisionBlock_bottom">
          <div class="divisionBlock_bottom_inner">
            <p class="section_txt">
              <span class="section_txt-leftCulumn">
                <strong class="section_txtTitle">Project Style</strong>
                「ITとメディアで暮らしを彩る」をビジョンとして掲げているRIDE MEDIA&DESIGNでは、暮らし＝ライフスタイルをテーマとした各種サービスを自社運営で展開しております。私たちはWEBサイトを制作したり、コンテンツを運用させていただくにあたり、制作して納品するだけ…、コンテンツを作って納めるだけ…、というのは、あまりにも無責任だと考えております。自らがWEBメディアを制作、運用したり、リアル店舗、イベントなどの経営や運営を行ってはじめて、お客さまと同じ立場に立って物事を考えられるのではないか、事業推進における本当の実力というものが身につくのではないかという想いから、自社ビジネスの展開にも力を注いでいるのです。そこから得られるリアリティのあるナレッジを、お客さまとご一緒させていただくプロジェクトにも還元してまいります。
                また手がける事業は、これからのライフスタイルを豊かにするようなプロジェクトや、新しい社会にとって本質的に必要なものだけに絞って展開しております。決してゲームが稼げるからという理由で、ゲーム事業をやるようなことは行いません…。あくまで自分たちの表現やスタイルにこだわった事業を、厳選して手掛けていきます。
              </span>
            </p>

            <div class="divisionBlock_infoBox">
              <div class="divisionBlock_infoBox_inner">
                <h4 class="divisionBlock_infoBox_title">One part of works</h4>
                <ul class="divisionBlock_gridList">
                  <li class="divisionBlock_gridItem">
                    <p class="divisionBlock_gridImg">
                      <img src="<?php echo $template_dir;?>/img/service/division3-portfolio1.jpg" alt="JACK PURCELL　80周年特設WEBサイト">
                    </p>
                    <p class="divisionBlock_gridTitle">箱庭</p>
                  </li>
                  <li class="divisionBlock_gridItem">
                    <p class="divisionBlock_gridImg">
                      <img src="<?php echo $template_dir;?>/img/service/division3-portfolio2.jpg" alt="SNOOPY  日本公式WEBサイト">
                    </p>
                    <p class="divisionBlock_gridTitle">LIFE MAKERS</p>
                  </li>
                  <li class="divisionBlock_gridItem">
                    <p class="divisionBlock_gridImg">
                      <img src="<?php echo $template_dir;?>/img/service/division3-portfolio3.jpg" alt="Champion　日本公式WEBサイト">
                    </p>
                    <p class="divisionBlock_gridTitle">ABOUT LIFE COFFEE BREWERS</p>
                  </li>
                </ul>
                <a href="/works/ride_works_category/life_style/" class="button">Works More View</a>
                <p class="divisionBlock_titleVisual">
                  <img src="<?php echo $template_dir;?>/img/service/division3-title.png" alt="DIVISION:03 LIFE STYLE">
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="projectSection" id="project">
      <div class="projectSection_top">
        <div class="projectSection_top_left">
          <h2 class="projectSection_title">
            OUR
            <strong>PROJECT</strong>
          </h2>
          <p class="projectSection_subTitle">Challenge of various business</p>
        </div>
        <div class="projectSection_top_right">
          <p class="projectSection_text">
            RIDE MEDIA&DESIGNではクライアント様に提供するサービスだけではなくさまざまなビジネスにチャレンジしております。
          </p>
        </div>
      </div>
      <div class="projectBlock projectBlock-1">
        <div class="projectBlock_visual">
          <img src="<?php echo $template_dir;?>/img/service/project1-visual.jpg" alt="">
        </div>
        <div class="projectBlock_detail">
          <p class="projectBlock_detail_text">
            WEB MIN DESIGN
            <a href="http://www.haconiwa-mag.com/" target="_blank" class="projectBlock_detail_link">http://www.haconiwa-mag.com/</a>
          </p>
        </div>
      </div>
      <div class="projectBlock projectBlock-2">
        <div class="projectBlock_visual">
          <img src="<?php echo $template_dir;?>/img/service/project2-visual.jpg" alt="">
        </div>
        <div class="projectBlock_detail">
          <p class="projectBlock_detail_text">
            RIDE MEDIA&DESIGNが運営するクリエイターのマネジメントプロジェクト。フォトグラファーのTAMMY VOLPEや、インフルエンサーのNAGISAなどが所属。
            <a href="http://thewave.tokyo/" target="_blank" class="projectBlock_detail_link">http://thewave.tokyo/</a>
          </p>
          <ul class="projectBlock_detail_list">
            <li class="projectBlock_detail_list_item">TAMMY VOLPE
              <a href="http://tammyvolpe.com/" target="_blank" class="projectBlock_detail_link">http://tammyvolpe.com/</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="projectBlock projectBlock-3">
        <div class="projectBlock_visual">
          <img src="<?php echo $template_dir;?>/img/service/project3-visual.jpg" alt="">
        </div>
        <div class="projectBlock_detail">
          <p class="projectBlock_detail_text">
            渋谷 道玄坂にあるスペシャルティコーヒースタンド。Instagramの発信が海外で話題となり、世界中からファンが訪れるグローバルなショップへと成長。
            <a href="http://www.about-life.coffee/" target="_blank" class="projectBlock_detail_link">http://www.about-life.coffee/</a>
          </p>
        </div>
      </div>
      <div class="projectBlock projectBlock-4">
        <div class="projectBlock_visual">
          <img src="<?php echo $template_dir;?>/img/service/project4-visual.jpg" alt="">
        </div>
        <div class="projectBlock_detail">
          <p class="projectBlock_detail_text">
            ジャーナリストの佐々木俊尚氏と共同で行っている有料会員制コミュニティ。毎月2回のリアルイベントとネット上で、良質なコンテンツを配信しています。
            <a href="http://lifemakers.jp/" target="_blank" class="projectBlock_detail_link">http://lifemakers.jp/</a>
          </p>
        </div>
      </div>
      <div class="projectBlock projectBlock-5">
        <div class="projectBlock_visual">
          <img src="<?php echo $template_dir;?>/img/service/project5-visual.jpg" alt="">
        </div>
        <div class="projectBlock_detail">
          <p class="projectBlock_detail_text">
            松浦弥太郎氏率いる「くらしのきほん」、「灯台もと暮らし」、「箱庭」による共同プロジェクト。暮らしのプラットフォームを作るべく活動しています。
            <a href="https://schiive.com/" target="_blank" class="projectBlock_detail_link">https://schiive.com/</a>
          </p>
        </div>
      </div>
    </section>

    <?php get_template_part( 'template/partial/footer'); ?>
    <script src="<?php echo $template_dir; ?>/js/service.js"></script>
  </div>
</body>

</html>