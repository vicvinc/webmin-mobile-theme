<?php
    $template_dir = get_template_directory_uri();
?>
<header id="header">
    <div class="headerInner">
        <div class="headerTop">
            <h1 class="header_logo">
                <a href="/">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewbox="0 0 220 16" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px"
                        y="0px" xml:space="preserve">
                        <use xlink:href="#logo"></use>
                    </svg>
                </a>
            </h1>
            <div class="header_menu">
                <div class="header_menuInner">
                    <div class="header_icon">
                        <i class="i1"></i>
                        <i class="i2"></i>
                        <i class="i3"></i>
                    </div>
                    <svg class="arrowSvg" xmlns:xlink="http://www.w3.org/1999/xlink" viewbox="0 0 60 30" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        x="0px" y="0px" xml:space="preserve">
                        <use xlink:href="#arrowTop"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div class="header_contents">
        <nav class="header_nav">
            <p class="header_title">
                <img src="<?php echo $template_dir;?>/img/s/nav_menu.png" alt="MENU">
            </p>
            <ul class="header_navList">
                <li class="header_navNode" data-cat="about">
                    <a href="/about/">
                        <img src="<?php echo $template_dir;?>/img/s/nav1.png" alt="about">
                    </a>
                </li>
                <li class="header_navNode" data-cat="service">
                    <a href="/service/">
                        <img src="<?php echo $template_dir;?>/img/s/nav2.png" alt="service">
                    </a>
                </li>
                <li class="header_navNode" data-cat="works">
                    <a href="/works/">
                        <img src="<?php echo $template_dir;?>/img/s/nav3.png" alt="works">
                    </a>
                </li>
                <li class="header_navNode" data-cat="news">
                    <a href="/news/">
                        <img src="<?php echo $template_dir;?>/img/s/nav4.png" alt="news">
                    </a>
                </li>
                <li class="header_navNode toggleBox" data-cat="company">
                    <div class="toggleButton">
                        <img src="<?php echo $template_dir;?>/img/s/nav5.png" alt="company">
                        <span class="toggleIcon">
                            <i></i>
                            <i></i>
                        </span>
                    </div>
                    <ul class="toggleTarget">
                        <li class="header_navNode">
                            <a href="/company/#companyProfileSection">
                                <img src="<?php echo $template_dir;?>/img/s/nav5-item1.png" alt="">
                            </a>
                        </li>
                        <li class="header_navNode">
                            <a href="/company/#accessMapSection">
                                <img src="<?php echo $template_dir;?>/img/s/nav5-item2.png" alt="">
                            </a>
                        </li>
                        <li class="header_navNode">
                            <a href="/company/#recruitSection">
                                <img src="<?php echo $template_dir;?>/img/s/nav5-item3.png" alt="">
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="header_navNode" data-cat="contact">
                    <a href="/contact/">
                        <img src="<?php echo $template_dir;?>/img/s/nav6.png" alt="contact">
                    </a>
                </li>
            </ul>
        </nav>
        <section class="header_project">
            <p class="header_title">
                <img src="<?php echo $template_dir;?>/img/s/nav_project.png" alt="RIDE's PROJECT">
            </p>

            <ul>
                <li>
                    <a href="http://www.haconiwa-mag.com/" target="_blank">
                        <img src="<?php echo $template_dir;?>/img/s/header_p1.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="http://thewave.tokyo/" target="_blank">
                        <img src="<?php echo $template_dir;?>/img/s/header_p4.jpg" alt="The Wave">
                    </a>
                </li>
                <li>
                    <a href="http://www.about-life.coffee/" target="_blank">
                        <img src="<?php echo $template_dir;?>/img/s/header_p2.jpg" alt="About Life Coffee Brewers">
                    </a>
                </li>
                <li>
                    <a href="http://lifemakers.jp/" target="_blank">
                        <img src="<?php echo $template_dir;?>/img/s/header_p3.jpg" alt="Life Makers">
                    </a>
                </li>
                <li>
                    <a href="https://schiive.com/" target="_blank">
                        <img src="<?php echo $template_dir;?>/img/s/header_p5.jpg" alt="">
                    </a>
                </li>
            </ul>
            <p class="header_projectList">
                <a href="/service/#project">服务详情</a>
            </p>
        </section>
        <div class="closeBtn">
            <a href="#">
                <svg class="arrowSvg" xmlns:xlink="http://www.w3.org/1999/xlink" viewbox="0 0 60 30" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    x="0px" y="0px" xml:space="preserve">
                    <use xlink:href="#arrowTop"></use>
                </svg>
            </a>
        </div>
    </div>
</header>