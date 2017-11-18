<?php
    get_header();
    $template_dir = get_template_directory_uri();
?>
    <link rel="stylesheet" type="text/css" href="<?php echo $template_dir; ?>/css/top.css">
</head>

<!-- <body <?php body_class(); ?>> -->

<body data-page="top" data-page-color="" class="loading fixed">
    <section class="mainVisual">
        <div class="mainVisual_block">
            <div class="mainVisual_list">
                <div class="mainVisual_item" data-page-color="white">
                    <div class="pic">
                        <span>
                            <img src="<?php echo $template_dir;?>/img/s/1.jpg" alt="">
                            <span class="mainVisual_itemCaption">成员</span>
                        </span>
                    </div>
                </div>
                <div class="mainVisual_item" data-page-color="black">
                    <div class="pic">
                        <span>
                            <img src="<?php echo $template_dir;?>/img/s/2.jpg" alt="">
                            <span class="mainVisual_itemCaption">项目</span>
                        </span>
                    </div>
                </div>
                <div class="mainVisual_item" data-page-color="white">
                    <div class="pic">
                        <span>
                            <img src="<?php echo $template_dir;?>/img/s/3.jpg" alt="">
                            <span class="mainVisual_itemCaption">设计</span>
                        </span>
                    </div>
                </div>
                <div class="mainVisual_item" data-page-color="black">
                    <div class="pic">
                        <span>
                            <img src="<?php echo $template_dir;?>/img/s/4.jpg" alt="">
                            <span class="mainVisual_itemCaption">Piece</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php get_template_part( 'template/static/index.svg'); ?>
    <div class="commonLoader">
        <a href="/">
            <i class="commonLoader_inner">
            </i>
        </a>
    </div>
    <?php get_template_part( 'template/partial/header'); ?>
    <div class="wrapper">
        <section class="worksPost">
            <ul class="worksPost_list">
                <li class="postNode" data-cat="news">
                    <div class="nodeImg">
                        <a href="/news/2607/">
                            <img src="<?php echo $template_dir;?>/img/s/haconiwa_image3-640x640.jpg" alt="" rgbaster="true">
                        </a>
                    </div>
                    <div class="category">
                        <a href="/news/2607/">
                            <ul>
                                <li>
                                    <a href="/news/ride_news_category/press/">Press</a>
                                </li>
                            </ul>
                        </a>
                    </div>
                    <div class="nodeCaption">
                        <p class="title">
                            <a href="/news/2607/">
                                DESIGN STORE
                            </a>
                        </p>
                    </div>
                </li>
                <li class="postNode" data-cat="news">
                    <div class="nodeImg">
                        <a href="/news/2592/">
                            <img src="<?php echo $template_dir;?>/img/s/tiffany-640x640.png" alt="" rgbaster="true"> </a>
                    </div>
                    <div class="category">
                        <a href="/news/2592/">
                            <ul>
                                <li>
                                    <a href="/news/ride_news_category/event/">活动</a>
                                </li>
                            </ul>
                        </a>
                    </div>
                    <div class="nodeCaption">
                        <p class="title">
                            <a href="/news/2592/">
                                活动1
                                <br>10月27日
                            </a>
                        </p>
                    </div>
                </li>
                <li class="postNode" data-cat="works">
                    <div class="nodeImg">
                        <a href="/works/2498/">
                            <img src="<?php echo $template_dir;?>/img/s/thumbnail_top-640x640.jpg" alt="ACIDMAN presents <br>「SAITAMA ROCK FESTIVAL “SAI”」公式サイト" rgbaster="true"> </a>
                    </div>
                    <div class="category">
                        <a href="/works/2498/">
                            works </a>
                    </div>
                    <div class="nodeCaption">
                        <p class="title">
                            <a href="/works/2498/">ACIDMAN presents
                                <br>「SAITAMA ROCK FESTIVAL “SAI”」公式サイト</a>
                        </p>
                        <div class="subCategory">
                            <ul>
                                <li>
                                    <a href="/works/ride_works_category/creative/">Creative</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="postNode" data-cat="news">
                    <div class="nodeImg">
                        <a href="/news/2458/">
                            <img src="<?php echo $template_dir;?>/img/s/shizu_top-640x640.jpg" alt="【People of RIDE】<br>メンバーのお気に入り紹介<br>メディアコンテンツ事業部　志津秀樹編" rgbaster="true"> </a>
                    </div>
                    <div class="category">
                        <a href="/news/2458/">
                            <ul>
                                <li>
                                    <a href="/news/ride_news_category/people/">People</a>
                                </li>
                            </ul>
                        </a>
                    </div>
                    <div class="nodeCaption">
                        <p class="title">
                            <a href="/news/2458/">
                                成员介绍
                                <br> about us
                        </p>
                    </div>
                </li>
                <li class="postNode" data-cat="works">
                    <div class="nodeImg">
                        <a href="/works/2511/">
                            <img src="<?php echo $template_dir;?>/img/s/nl0-640x640.png" alt="NIL 2017年11月号 撮影<br>Tammy Volpe" rgbaster="true"> </a>
                    </div>
                    <div class="category">
                        <a href="/works/2511/">
                            works </a>
                    </div>
                    <div class="nodeCaption">
                        <p class="title">
                            <a href="/works/2511/">
                                NIL 2017年11月号 撮影
                                <br>Tammy Volpe</a>
                        </p>
                        <div class="subCategory">
                            <ul>
                                <li>
                                    <a href="/works/ride_works_category/life_style/">Life Style</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="postNode" data-cat="works">
                    <div class="nodeImg">
                        <a href="/works/2435/">
                            <img src="<?php echo $template_dir;?>/img/s/goout_styletop-640x640.jpg" alt="三栄書房<br>『別冊GO OUT CAMP STYLE BOOK』" rgbaster="true"> </a>
                    </div>
                    <div class="category">
                        <a href="/works/2435/">
                            works </a>
                    </div>
                    <div class="nodeCaption">
                        <p class="title">
                            <a href="/works/2435/">
                                三栄書房
                                <br>
                            </a>
                        </p>
                        <div class="subCategory">
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
            </ul>
        </section>
        <?php get_template_part( 'template/partial/footer'); ?>
        <script src="<?php echo $template_dir; ?>/js/top.js"></script>
    </div>
</body>

</html>