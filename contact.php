<?php
  /*
    Template Name: contact
  */
  get_header();
  $template_dir = get_template_directory_uri();
?>
    <link rel="stylesheet" type="text/css" href="<?php echo $template_dir; ?>/css/contact.css">
</head>

<body data-page="contact_input" class="loading">
  <?php get_template_part( 'template/static/sprites');?>
  <?php get_template_part( 'template/partial/header'); ?>
  <div class="wrapper">
    <?php get_template_part( 'template/partial/breadList'); ?>
    <section id="telSection">
      <div class="telSection_header">
        <h2 class="telSection_title borderAnimation">
          <div class="telSection_title_inner">
            TEL / FAX
            <span class="telSection_title_text">Please Contact Us</span>
          </div>
          <i class="borderAnimation_before"></i>
          <i class="borderAnimation_after"></i>
        </h2>
        <ul class="currentNav">
          <li class="currentNav_list">
            <a href="#mailFormSection" class="anchorLink">Mail Form</a>
          </li>
          <li class="currentNav_list active">
            <a href="#telSection" class="anchorLink">Tel / Fax</a>
          </li>
        </ul>
      </div>
      <div class="telSection_footer">
        <div class="telSection_footerWrapper">
          <p class="telSection_lead">
          </p>
          <ul>
            <li class="telSection_footerList">
              <span class="telSection_footerListTitle">本社
                <br>eof</span>
              <span class="telSection_footerListNumberBox">
                <span class="telSection_footerListNumber-tel">03-6451-0341</span>
                <span class="telSection_footerListNumber">
                  <span class="telSection_footerListNumberTitle">FAX</span>03-6451-0342
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <?php get_template_part( 'template/partial/footer'); ?>
    <script src="<?php echo $template_dir; ?>/js/contact.js"></script>

  </div>

</body>

</html>