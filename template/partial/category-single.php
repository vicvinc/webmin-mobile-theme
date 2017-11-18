<?php
    $categories = get_categories(array(
        'orderby' => 'name',
        'order'   => 'ASC'
    ));
?>
<div class="categoryList categoryList-single">
    <ul>
    <?php
        foreach( $categories as $category ) {
            ?>
                <li class="categoryList_node">
                    <a href="<?php get_category_link($category->term_id)?>">
                        <?php echo $category->name ?>
                    </a>
                </li>
            <?php
        }
    ?>
    </ul>
</div>