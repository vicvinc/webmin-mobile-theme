<?php
    $categories = get_categories(array(
        'orderby' => 'name',
        'order'   => 'ASC'
    ));
    
    $cur_cate = get_queried_object();
    $cur_cate_id = $cur_cate->term_id;

    $cur_page = get_query_var( 'page' ) ? $page_nr.get_query_var( 'page' ) : '';
    query_posts(array(
        'category_name' => $cur_cate->name,
        'posts_per_page' => 1,
        'page' => $cur_page
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
            <div><?php next_posts_link('Next Page &raquo;') ?></div>
            <div><?php previous_posts_link('&laquo; Previous Page') ?></div>
        </div>
        <?php  
    }
?>