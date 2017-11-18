<?php
  /*
    Template Name: works
  */
  get_header();
  $template_dir = get_template_directory_uri();
?>
  <link rel="stylesheet" type="text/css" href="<?php echo $template_dir; ?>/css/works.css">
</head>

<body data-page="worksPage" class="fixed">
  <?php get_template_part( 'template/static/work.svg'); ?>
  <?php get_template_part( 'template/partial/header'); ?>
  <div class="wrapper">
    <?php get_template_part( 'template/partial/breadList'); ?>
    <div class="wrapper_inner">
      <div class="mainTitle">
        <h1 class="mainTitle_top">RECENT WORKS</h1>
        <p class="mainTitle_sub">Achievements Introduction</p>
      </div>
      <div class="worksSliderBlock">
        <div class="worksSliderWrap">
          <div class="worksSlider">
            <div class="worksSlider_node">
              <a href="https://www.rmd.co.jp/works/2498/">
                <p class="worksSlider_img">
                  <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/10/thumbnail_top-640x640.jpg" alt="ACIDMAN presents <br>「SAITAMA ROCK FESTIVAL “SAI”」公式サイト"
                    rgbaster="true"> </p>
                <div class="worksSlider_caption">
                  <p class="title">
                    <a href="https://www.rmd.co.jp/works/2498/">ACIDMAN presents
                      <br>「SAITAMA ROCK FESTIVAL “SAI”」公式サイト</a>
                  </p>
                  <div class="category">
                    <ul>
                      <li>Creative</li>
                    </ul>
                  </div>
                </div>
            </div>
            <div class="worksSlider_node">
              <a href="https://www.rmd.co.jp/works/2511/">
                <p class="worksSlider_img">
                  <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/10/nl0-640x640.png" alt="NIL 2017年11月号 撮影<br>Tammy Volpe" rgbaster="true"> </p>
                <div class="worksSlider_caption">
                  <p class="title">
                    <a href="https://www.rmd.co.jp/works/2511/">NIL 2017年11月号 撮影
                      <br>Tammy Volpe</a>
                  </p>
                  <div class="category">
                    <ul>
                      <li>Life Style</li>
                    </ul>
                  </div>
                </div>
            </div>


            <div class="worksSlider_node">
              <a href="https://www.rmd.co.jp/works/2435/">
                <p class="worksSlider_img">
                  <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/09/goout_styletop-640x640.jpg" alt="三栄書房<br>『別冊GO OUT CAMP STYLE BOOK』"
                    rgbaster="true"> </p>
                <div class="worksSlider_caption">
                  <!-- <p class="date">2017.09.29</p> -->
                  <p class="title">
                    <a href="https://www.rmd.co.jp/works/2435/">三栄書房
                      <br>『別冊GO OUT CAMP STYLE BOOK』</a>
                  </p>
                  <div class="category">
                    <ul>
                      <li>Creative</li>
                      <li>Media Content</li>
                    </ul>
                  </div>
                </div>
            </div>


            <div class="worksSlider_node">
              <a href="https://www.rmd.co.jp/works/2377/">
                <p class="worksSlider_img">
                  <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/09/eyecatch_pc-640x640.png" alt="マネたま by カオナビ" rgbaster="true"> </p>
                <div class="worksSlider_caption">
                  <!-- <p class="date">2017.09.25</p> -->
                  <p class="title">
                    <a href="https://www.rmd.co.jp/works/2377/">マネたま by カオナビ</a>
                  </p>
                  <div class="category">
                    <ul>
                      <li>Media Content</li>
                    </ul>
                  </div>
                </div>
            </div>

          </div>
          <div class="worksSlider_control">
            <div class="worksSlider_control_prev"></div>
            <div class="worksSlider_control_next"></div>
          </div>
        </div>

      </div>
      <div class="worksSlider_thumbnails">
        <div class="worksSlider_thumbnails_nodes active">
          <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/10/thumbnail_top-640x640.jpg" alt="ACIDMAN presents <br>「SAITAMA ROCK FESTIVAL “SAI”」公式サイト"
            rgbaster="true"> </div>
        <div class="worksSlider_thumbnails_nodes ">
          <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/10/nl0-640x640.png" alt="NIL 2017年11月号 撮影<br>Tammy Volpe" rgbaster="true"> </div>
        <div class="worksSlider_thumbnails_nodes ">
          <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/09/goout_styletop-640x640.jpg" alt="三栄書房<br>『別冊GO OUT CAMP STYLE BOOK』"
            rgbaster="true"> </div>
        <div class="worksSlider_thumbnails_nodes ">
          <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/09/eyecatch_pc-640x640.png" alt="マネたま by カオナビ" rgbaster="true"> </div>
      </div>
      <div class="main">
        <div class="mainBlock itemList">
          <p class="itemList_title">Division Selected</p>
          <div class="categoryList toggleBox">
            <p class="categoryList_title toggleButton">
              All works
              <span class="toggleIcon">
                <i></i>
                <i></i>
              </span>
            </p>
            <ul class="toggleTarget">
              <li class="categoryList_node active">
                <a href="/works/">
                  All works </a>
              </li>
              <li class="categoryList_node active">
                <a href="/works/ride_works_category/creative/">
                  Creative </a>
              </li>

              <li class="categoryList_node">
                <a href="/works/ride_works_category/media_content/">
                  Media Content </a>
              </li>

              <li class="categoryList_node">
                <a href="/works/ride_works_category/life_style/">
                  Life Style </a>
              </li>

            </ul>
          </div>

          <ul class="itemList_block style2">
            <li works class="postNode " data-cat="works">
              <div class="nodeImg">
                <a href="https://www.rmd.co.jp/works/2498/">
                  <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/10/thumbnail_top-640x640.jpg" alt="ACIDMAN presents <br>「SAITAMA ROCK FESTIVAL “SAI”」公式サイト"
                    rgbaster="true"> </a>
              </div>
              <div class="nodeCaption">
                <!-- <p class="date">2017.10.16</p> -->
                <p class="title">
                  <a href="https://www.rmd.co.jp/works/2498/">ACIDMAN presents
                    <br>「SAITAMA ROCK FESTIVAL “SAI”」公式サイト</a>
                </p>
                <div class="category">
                  <ul>
                    <li>
                      <a href="/works/ride_works_category/creative/">Creative</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li works class="postNode " data-cat="works">
              <div class="nodeImg">
                <a href="https://www.rmd.co.jp/works/2511/">
                  <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/10/nl0-640x640.png" alt="NIL 2017年11月号 撮影<br>Tammy Volpe" rgbaster="true"> </a>
              </div>
              <div class="nodeCaption">
                <!-- <p class="date">2017.10.10</p> -->
                <p class="title">
                  <a href="https://www.rmd.co.jp/works/2511/">NIL 2017年11月号 撮影
                    <br>Tammy Volpe</a>
                </p>
                <div class="category">
                  <ul>
                    <li>
                      <a href="/works/ride_works_category/life_style/">Life Style</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li works class="postNode " data-cat="works">
              <div class="nodeImg">
                <a href="https://www.rmd.co.jp/works/2435/">
                  <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/09/goout_styletop-640x640.jpg" alt="三栄書房<br>『別冊GO OUT CAMP STYLE BOOK』"
                    rgbaster="true"> </a>
              </div>
              <div class="nodeCaption">
                <!-- <p class="date">2017.09.29</p> -->
                <p class="title">
                  <a href="https://www.rmd.co.jp/works/2435/">三栄書房
                    <br>『別冊GO OUT CAMP STYLE BOOK』</a>
                </p>
                <div class="category">
                  <ul>
                    <li>
                      <a href="/works/ride_works_category/creative/">Creative</a>
                    </li>
                    <li>
                      <a href="/works/ride_works_category/media_content/">Media Content</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li works class="postNode " data-cat="works">
              <div class="nodeImg">
                <a href="https://www.rmd.co.jp/works/2377/">
                  <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/09/eyecatch_pc-640x640.png" alt="マネたま by カオナビ" rgbaster="true"> </a>
              </div>
              <div class="nodeCaption">
                <!-- <p class="date">2017.09.25</p> -->
                <p class="title">
                  <a href="https://www.rmd.co.jp/works/2377/">マネたま by カオナビ</a>
                </p>
                <div class="category">
                  <ul>
                    <li>
                      <a href="/works/ride_works_category/media_content/">Media Content</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li works class="postNode " data-cat="works">
              <div class="nodeImg">
                <a href="https://www.rmd.co.jp/works/2519/">
                  <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/09/vi-640x640.png" alt="ViVi 2017年11月号 撮影<br>Tammy Volpe" rgbaster="true"> </a>
              </div>
              <div class="nodeCaption">
                <!-- <p class="date">2017.09.23</p> -->
                <p class="title">
                  <a href="https://www.rmd.co.jp/works/2519/">ViVi 2017年11月号 撮影
                    <br>Tammy Volpe</a>
                </p>
                <div class="category">
                  <ul>
                    <li>
                      <a href="/works/ride_works_category/life_style/">Life Style</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li works class="postNode " data-cat="works">
              <div class="nodeImg">
                <a href="https://www.rmd.co.jp/works/2538/">
                  <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/10/vo001-640x640.png" alt="VOGUE JAPAN「ファッション座談会」WEB企画 出演<br>Tammy Volpe"
                    rgbaster="true"> </a>
              </div>
              <div class="nodeCaption">
                <!-- <p class="date">2017.09.20</p> -->
                <p class="title">
                  <a href="https://www.rmd.co.jp/works/2538/">VOGUE JAPAN「ファッション座談会」WEB企画 出演
                    <br>Tammy Volpe</a>
                </p>
                <div class="category">
                  <ul>
                    <li>
                      <a href="/works/ride_works_category/life_style/">Life Style</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li works class="postNode " data-cat="works">
              <div class="nodeImg">
                <a href="https://www.rmd.co.jp/works/2550/">
                  <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/10/mi00-640x640.png" alt="メイクブック「美舟メイク」撮影<br>Tammy Volpe" rgbaster="true"> </a>
              </div>
              <div class="nodeCaption">
                <!-- <p class="date">2017.09.15</p> -->
                <p class="title">
                  <a href="https://www.rmd.co.jp/works/2550/">メイクブック「美舟メイク」撮影
                    <br>Tammy Volpe</a>
                </p>
                <div class="category">
                  <ul>
                    <li>
                      <a href="/works/ride_works_category/life_style/">Life Style</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li works class="postNode " data-cat="works">
              <div class="nodeImg">
                <a href="https://www.rmd.co.jp/works/2354/">
                  <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/09/fefd62b040f148852c2767c1bc022bcd-640x640.jpg" alt="narifuri 2017AWカタログ"
                    rgbaster="true"> </a>
              </div>
              <div class="nodeCaption">
                <!-- <p class="date">2017.09.06</p> -->
                <p class="title">
                  <a href="https://www.rmd.co.jp/works/2354/">narifuri 2017AWカタログ</a>
                </p>
                <div class="category">
                  <ul>
                    <li>
                      <a href="/works/ride_works_category/creative/">Creative</a>
                    </li>
                    <li>
                      <a href="/works/ride_works_category/media_content/">Media Content</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li works class="postNode " data-cat="works">
              <div class="nodeImg">
                <a href="https://www.rmd.co.jp/works/2529/">
                  <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/10/aj00-640x616.png" alt="AMBERJACK 2017A/W LOOK 撮影<br>Tammy Volpe"
                    rgbaster="true"> </a>
              </div>
              <div class="nodeCaption">
                <!-- <p class="date">2017.09.01</p> -->
                <p class="title">
                  <a href="https://www.rmd.co.jp/works/2529/">AMBERJACK 2017A/W LOOK 撮影
                    <br>Tammy Volpe</a>
                </p>
                <div class="category">
                  <ul>
                    <li>
                      <a href="/works/ride_works_category/life_style/">Life Style</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li works class="postNode " data-cat="works">
              <div class="nodeImg">
                <a href="https://www.rmd.co.jp/works/2425/">
                  <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/09/casmegumu010__-640x640.png" alt="commons &#038; sense ISSUE53<br>「DIESEL BLACK GOLD FASHION STORY」撮影<br>Tammy Volpe"
                    rgbaster="true"> </a>
              </div>
              <div class="nodeCaption">
                <!-- <p class="date">2017.08.29</p> -->
                <p class="title">
                  <a href="https://www.rmd.co.jp/works/2425/">commons &#038; sense ISSUE53
                    <br>「DIESEL BLACK GOLD FASHION STORY」撮影
                    <br>Tammy Volpe</a>
                </p>
                <div class="category">
                  <ul>
                    <li>
                      <a href="/works/ride_works_category/life_style/">Life Style</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li works class="postNode " data-cat="works">
              <div class="nodeImg">
                <a href="https://www.rmd.co.jp/works/2314/">
                  <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/08/saeri_top-640x640.png" alt="書籍<br>『口説き文句は決めている』（夏生さえり著）" rgbaster="true"> </a>
              </div>
              <div class="nodeCaption">
                <!-- <p class="date">2017.08.25</p> -->
                <p class="title">
                  <a href="https://www.rmd.co.jp/works/2314/">書籍
                    <br>『口説き文句は決めている』（夏生さえり著）</a>
                </p>
                <div class="category">
                  <ul>
                    <li>
                      <a href="/works/ride_works_category/creative/">Creative</a>
                    </li>
                    <li>
                      <a href="/works/ride_works_category/media_content/">Media Content</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li works class="postNode " data-cat="works">
              <div class="nodeImg">
                <a href="https://www.rmd.co.jp/works/2293/">
                  <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/08/fc6927a4cd7fc6f068de9eb5d3ae4aff-640x640.jpg" alt="CASIO<br> GO EXPLORING! &#8211; Smart Outdoor Watch"
                    rgbaster="true"> </a>
              </div>
              <div class="nodeCaption">
                <!-- <p class="date">2017.08.23</p> -->
                <p class="title">
                  <a href="https://www.rmd.co.jp/works/2293/">CASIO
                    <br> GO EXPLORING! &#8211; Smart Outdoor Watch</a>
                </p>
                <div class="category">
                  <ul>
                    <li>
                      <a href="/works/ride_works_category/media_content/">Media Content</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>



          <div class="pageInfo">
            <div class="listPager">
              <div class="listPager_inner">
                <span class='page-numbers current'>1</span>
                <span class="page-numbers dots">&hellip;</span>
                <a class='page-numbers' href='https://www.rmd.co.jp/works/page/10/'>10</a>
                <a class="next page-numbers" href="https://www.rmd.co.jp/works/page/2/">Next</a>
              </div>
            </div>
          </div>

          <!-- // .mainBlock -->
        </div>
        <!-- // .main -->
      </div>
    </div>
    <?php get_template_part( 'template/partial/footer'); ?>
    <script src="<?php echo $template_dir; ?>/js/works.js"></script>
  </div>

</body>

</html>