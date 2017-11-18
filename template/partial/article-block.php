<?php
    $prev_wrap = '<a href="%link" class="button-prev"></a>';
    $next_wrap = '<a href="%link" class="button-next"></a>';
?>
<div class="articleBlock articleBlock-news">
    <div class="articleBlock_info">
    <div class="articleBlock_date">
        <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" rel="bookmark">
            <div class="first-day day">
            <?php the_time('j'); ?>
            <span>
                <?php the_time('M'); ?>
            </span>
            </div>
        </a>
        <p class="date">Posted on <?php the_time(); ?></p>
        <div class="category">
            <?php the_category(); ?>
        </div>
    </div>
    <h1 class="title">
        <?php the_title(); ?>
        <br> <?php the_time(); ?>
        <br> <?php the_excerpt(); ?>
    </h1>
    </div>
    <div class="articleBlock_content">
        <?php the_content();?>
    </div>
    <ul class="articleBlock_pager">
        <?php if (previous_post_link()) {?>
            <li class="artivleBlock_node artivleBlock_node-prev">
                <?php previous_post_link('<span class="prev_btn">%link</span>', 'Prev', TRUE); ?>
            </li>
        <?php } ?>
        <?php if (next_post_link()) {?>
            <li class="artivleBlock_node artivleBlock_node-next">
                <?php next_post_link('<span class="next_btn">%link</span>', 'Next', TRUE); ?>
            </li>
        <?php } ?>
        <li class="articleBlock_toList">
            <a href="/news" class="backLink">Back to list</a>
        </li>
    </ul>
</div>