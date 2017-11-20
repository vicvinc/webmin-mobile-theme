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
        </p>
        <p class="section_txt">
          <span class="section_txt-leftCulumn">
            
          </span>
          <span class="section_txt-rightCulumn">
            
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
        <p class="section_lead">Web UI Design
          <br>Web Design</p>
        <p class="section_txt">
          <span class="section_txt-leftCulumn">
          </span>
          <span class="section_txt-rightCulumn">
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
        <p class="section_lead">
          <br> Web Service
        </p>
        <p class="section_txt">
          <span class="section_txt-leftCulumn">
          </span>
          <span class="section_txt-rightCulumn">
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