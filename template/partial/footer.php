<?php
    $template_dir = get_template_directory_uri();
?>

<footer class="footer">
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
    <div class="footer_top">
        <div class="footer_intro">
            <div class="footer_logo">
                <a href="/">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewbox="0 0 145 145" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px"
                        y="0px" xml:space="preserve">
                        <use xlink:href="#rect_logo"></use>
                    </svg>
                </a>
            </div>
            <p class="footer_introCap">WEB MIN DESIGN</p>
            <p class="footer_introDivision">Creative / Media Content / Life Style</p>
        </div>
        <div class="footer_copyright">
            <i>©</i>
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewbox="0 0 220 16" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px"
                y="0px" xml:space="preserve">
                <use xlink:href="#logo"></use>
            </svg>
        </div>
        <div class="toTop">
            <a href="#" class="anchorLink">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewbox="0 0 60 30" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px"
                    y="0px" xml:space="preserve">
                    <use xlink:href="#arrowTop"></use>
                </svg>
            </a>
        </div>
    </div>
    <div class="footer_project">
        <div class="footer_projectInner">
            <p class="footer_projectTitle">
                <img src="<?php echo $template_dir;?>/img/s/nav_project_wht.png" alt="RIDE's PROJECT">
            </p>
            <div class="footer_projectMove">
                <ul>
                    <li>
                        <a href="http://www.haconiwa-mag.com/" target="_blank">
                            <img src="<?php echo $template_dir;?>/img/s/header_p1.jpg" alt="箱庭">
                        </a>
                    </li>
                </ul>
                <p class="header_projectList">
                    <a href="/service/#project"></a>
                </p>
            </div>
        </div>
    </div>
</footer>

<script src="<?php echo $template_dir; ?>/js/jquery.min.js"></script>
<script src="<?php echo $template_dir; ?>/js/lib.js"></script>
<script src="<?php echo $template_dir; ?>/js/common.js"></script>