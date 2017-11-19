<?php
    get_header();
    $template_dir = get_template_directory_uri();
?>
    <link rel="stylesheet" type="text/css" href="<?php echo $template_dir; ?>/css/top.css">
</head>

<body data-page="top" data-page-color="" class="loading fixed">
    <?php get_template_part( 'template/partial/mainVisual'); ?>
    <?php get_template_part( 'template/static/spinner.svg'); ?>
    <div class="commonLoader">
        <a href="/">
            <i class="commonLoader_inner">
            </i>
        </a>
    </div>
    <?php get_template_part( 'template/partial/header'); ?>
    <div class="wrapper">
        <?php get_template_part( 'template/partial/index-post'); ?>
        <?php get_template_part( 'template/partial/footer'); ?>
        <script src="<?php echo $template_dir; ?>/js/top.js"></script>
    </div>
</body>

</html>