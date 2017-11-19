<?php
/*
  Template Name: category
*/
  get_header();
  $template_dir = get_template_directory_uri();
?>
    <link rel="stylesheet" type="text/css" href="<?php echo $template_dir; ?>/css/archive.css">
</head>

<body data-page="newsPage" class="secondLoad" data-gr-c-s-loaded="true">
    <?php get_template_part( 'template/static/sprites'); ?>
    <?php get_template_part( 'template/partial/header'); ?>
  <div class="wrapper">
    <?php get_template_part( 'template/partial/breadList'); ?>
    <div class="wrapper_inner">
      <div class="main">
        <div class="mainBlock itemList">
          <p class="itemList_title">已选择类别</p>
          <?php get_template_part( 'template/partial/category-toggle'); ?>
          <?php get_template_part( 'template/partial/category-post'); ?>
        </div>
      </div>
    </div>
    <?php get_template_part( 'template/partial/footer'); ?>
    <script src="<?php echo $template_dir; ?>/js/archive.js"></script>
  </div>
</body>
</html>