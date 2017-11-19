<?php
    $categories = get_categories(array(
        'orderby' => 'name',
        'order'   => 'ASC'
    ));
    
    $cur_cate = get_queried_object();
    $cur_cate_id = $cur_cate->term_id; 
?>

<p><?php single_cat_title("", false); ?></p>

<div class="categoryList toggleBox">
    <p class="categoryList_title toggleButton">
        <?php echo $cur_cate->name;?>
        <span class="toggleIcon">
        <i></i>
        <i></i>
        </span>
    </p>
    <ul class="toggleTarget">
    <?php
        foreach( $categories as $category ) {
            $is_active = $category->ter_id == $cur_cate_id
            ?>
                <li class="categoryList_node <?php echo $is_active && 'active'?>">
                    <a href="<?php echo get_category_link($category->term_id)?>">
                        <?php echo $category->name ?>
                    </a>
                </li>
            <?php
        }
    ?>
    </ul>
</div>