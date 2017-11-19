<?php
  /*
    Template Name: news
  */
    get_header();
    $template_dir = get_template_directory_uri();
?>
  <link rel="stylesheet" type="text/css" href="<?php echo $template_dir; ?>/css/archive.css">
</head>

<body>
	<?php get_template_part( 'template/static/spinner'); ?>
	<?php get_template_part( 'template/partial/header'); ?>
	<div class="wrapper">
		<div class="wrapper_inner">
		<div class="main">
			<section class="error">
				<img src="<?php echo img_base_url() . '404-anim.gif'; ?>" alt="404">
				<h1>Oops!</h1>
				<h2>We can't seem to find the page you're looking for.</h2>
				<h6>Error Code: 404</h6>
			</section>
		</div>
		</div>
		<?php get_template_part( 'template/partial/footer'); ?>
		<script src="<?php echo $template_dir; ?>/js/archive.js"></script>
	</div>
</body>
</html>
