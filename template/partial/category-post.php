<?php
    $categories = get_categories(array(
        'orderby' => 'name',
        'order'   => 'ASC'
    ));


    $cur_cate = get_queried_object();
    $cur_cate_id = $cur_cate->term_id;

    $thisCat = get_posts( array(
        'category' => $cur_cate-name
    ) );

    $total = count($thisCat);

    $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;

    $page_url = get_pagenum_link($paged);

    $prev_paged = $paged - 1 > 0 ? $paged -1 : 0;
    $next_paged = $paged + 1 < $total ? $paged + 1 : 0;

    $prev_page_url = get_pagenum_link( $paged - 1, false);
    $next_page_url = get_pagenum_link( $paged + 1, false);

    query_posts(array(
        'category_name' => $cur_cate->name,
        'posts_per_page' => 5,
        'paged' => $paged
    ));
    
    if (have_posts()) {
        ?>
        <ul class="itemList_block style2">
        <?php
        while (have_posts()) {
            the_post();
            ?>
                <li news="" class="postNode">
                    <div class="nodeImg">
                        <a href="<?php echo get_permalink(); ?>">
                            <img
                                src="<?php the_post_thumbnail_url();?>"
                                alt="<?php the_title();?>"
                                rgbaster="true"
                            >
                        </a>
                    </div>
                    <div class="nodeCaption">
                    <i class="category"><?php the_category(); ?></i>
                    <p class="title">
                        <a href="<?php echo get_permalink(); ?>">
                            <?php the_title( '<h2>', '</h2>' ); ?>
                            <?php the_excerpt(); ?>
                        </a>
                    </p>
                    <p class="date"><?php the_time(); ?></p>
                    </div>
                </li>
            <?php
        }
        ?>
        </ul>
        <div class="pageInfo">
            <div class="listPager">
                <div class="listPager_inner">
                    <?php if($prev_paged): ?>
                        <a class='page-numbers' href='<?php echo $prev_page_url?>'><?php echo $prev_paged?></a>
                        <a class="next page-numbers" href="<?php echo $prev_page_url?>">Next</a>
                    <?php endif; ?>
                    <span class='page-numbers current'><?php echo $paged?></span>
                    <?php if($next_paged): ?>
                        <a class='page-numbers' href='<?php echo $next_page_url?>'><?php echo $next_paged?></a>
                        <a class="next page-numbers" href="<?php echo $next_page_url?>">Next</a>
                    <?php endif; ?>
                </div>
            </div>
        <?php
    }
?>