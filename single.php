<?php
    get_header();
    $template_dir = get_template_directory_uri();
?>
    <link rel="stylesheet" type="text/css" href="<?php echo $template_dir; ?>/css/single.css">
</head>
<?php
	get_header();
	while (have_posts()):
	the_post();
?>
<body data-page="news" class="secondLoad" data-gr-c-s-loaded="true">
    <?php get_template_part( 'template/static/single.svg'); ?>
    <?php get_template_part( 'template/partial/header'); ?>
  <div class="wrapper">
    <?php get_template_part( 'template/partial/breadList'); ?>
    <div class="wrapper_inner">
        <?php get_template_part( 'template/partial/article-block'); ?>
        <?php get_template_part( 'template/partial/category-single'); ?>
    </div>
    <?php get_template_part( 'template/partial/footer'); ?>
    <script src="<?php echo $template_dir; ?>/js/single.js"></script>
  </div>
</body>

</html>
<?php
    endwhile;
    