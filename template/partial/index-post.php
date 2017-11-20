<?php
    $template_dir = get_template_directory_uri();
    query_posts(array(
        'category_name' => 'article',
        'posts_per_page' => 5,
    ));
?>
<section class="worksPost">
    <ul class="worksPost_list">
        <?php if( have_posts() ): while ( have_posts() ) : the_post(); ?>
            <li class="postNode" data-cat="news">
                <div class="nodeImg">
                <a href="<?php echo get_permalink(); ?>" title="Launching <?php the_title(); ?>" rel="bookmark">
                    <?php the_title( '<h2>', '</h2>' ); ?>
                    <h3><?php the_excerpt(); ?></h3>
                    <img 
                        src="<?php the_post_thumbnail_url();?>"
                        alt="<?php the_title();?>"
                        rgbaster="true"
                    >
                </a>
                </div>
                <div class="category">
                    <?php the_category(); ?>
                </div>
                <div class="nodeCaption">
                    <p class="title">
                        <a href="<?php echo get_permalink(); ?>" title="Launching <?php the_title(); ?>" rel="bookmark">
                            <?php the_title(); ?>
                        </a>
                    </p>
                </div>
            </li>
        <?php endwhile; ?>
        <?php else : ?>
            <p><?php __('暂无告示'); ?></p>
        <?php endif; ?>
    </ul>
</section>
