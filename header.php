<?php
    $template_dir = get_template_directory_uri();
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<?php wp_head(); ?>
	<meta charset="UTF-8">
	<title><?php wp_title(''); ?></title>
	<meta charset="<?php bloginfo( 'charset' ); ?>">

	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="theme-color" content="#ffffff">
	<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">

	<link rel="icon" href="<?php echo $template_dir;?>/img/common/favicon.png" type="image/x-icon" />
	<link rel="icon" type="image/png" href="<?php echo $template_dir;?>/img/common/favicon-32x32.png" sizes="32x32">
	<link rel="icon" type="image/png" href="<?php echo $template_dir;?>/img/common/favicon-16x16.png" sizes="16x16">
	
	<link rel="manifest" href="manifest.json">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel='dns-prefetch' href='http://s.w.org/' />
	
    <meta property="og:type" content="article" />
    <meta property="og:url" content="/" />
    <meta property="og:image" content="//ogimg.jpg" />
    <meta property="og:site_name" content="" />
    <meta property="og:description" content="" />
