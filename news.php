<?php
  /*
    Template Name: news
  */
    get_header();
    $template_dir = get_template_directory_uri();
?>
  <link rel="stylesheet" type="text/css" href="<?php echo $template_dir; ?>/css/archive.css">
</head>
<body data-page="newsPage" class="fixed">
  <?php get_template_part( 'template/static/news.svg'); ?>
  <?php get_template_part( 'template/partial/header'); ?>

  <div class="wrapper">
    <?php get_template_part( 'template/partial/breadList'); ?>
    <div class="wrapper_inner">
      <div class="main">
        <div class="mainBlock itemList">
        
          <p class="itemList_title">Category Selected</p>

          <?php get_template_part( 'template/partial/category-toggle'); ?>

          <ul class="itemList_block style2">
            <li news class="postNode">
              <div class="nodeImg">
                <a href="https://www.rmd.co.jp/news/2621/">
                  <img src="https://www.rmd.co.jp/wp/wp-content/uploads/2017/11/top_20170905-L1300628-600x300.jpg" alt="【People of RIDE】<br>メンバーのお気に入り紹介<br>クリエイティブ事業本部 IT事業部 茂木桃子編"
                    rgbaster="true"> </a>
              </div>
              <div class="nodeCaption">
                <i class="category">People</i>
                <p class="title">
                  <a href="https://www.rmd.co.jp/news/2621/">
                    title
                    <br>
                    <br>クリエイティブ事業本部 IT事業部 茂木桃子編</a>
                </p>
                <p class="date">2017.11.07</p>
              </div>
            </li>
          </ul>

          <div class="pageInfo">
            <div class="listPager">
              <div class="listPager_inner">
                <span class='page-numbers current'>1</span>
                <span class="page-numbers dots">&hellip;</span>
                <a class='page-numbers' href='https://www.rmd.co.jp/news/page/4/'>4</a>
                <a class="next page-numbers" href="https://www.rmd.co.jp/news/page/2/">Next</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <?php get_template_part( 'template/partial/footer'); ?>
    <script src="<?php echo $template_dir; ?>/js/archive.js"></script>
  </div>

</body>

</html>