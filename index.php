<?php get_header(); ?>
   
   <?php if(have_posts()) {?>
     <?php while(have_posts()) { ?>
    <?php the_post(); ?>
    <h2>
        <a href="<?php the_permalink() ?>" title="<?php the_title_attribute();?>"><?php the_title() ?></a>
    </h2>
    <div>
        <?php firsttheme_post_meta(); ?>
    </div>
     <div>
        <?php the_excerpt(); ?>
     </div>
        <?php firsttheme_readmore_link();?>
        <?php } ?>
         <?php the_posts_pagination(); ?>
        <?php } else {?>
            <p><?php esc_html_e('Sorry, no posts matched on your criteria.', 'firsttheme'); ?></p>
    <?php } ?>
    
    <?php 
        $city = 'london';
        echo esc_html__('Your city is ', 'firsttheme' ) . $city;

        printf(
            esc_html( 'Your city is %s'. 'firsttheme' ),
            $city
        );
    ?>

<?php get_footer(); ?>