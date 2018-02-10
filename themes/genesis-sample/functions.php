<?php
/**
 * Genesis Sample.
 *
 * This file adds functions to the Genesis Sample Theme.
 *
 * @package Genesis Sample
 * @author  StudioPress
 * @license GPL-2.0+
 * @link    http://www.studiopress.com/
 */

//* Start the engine
include_once( get_template_directory() . '/lib/init.php' );

//* Setup Theme
include_once( get_stylesheet_directory() . '/lib/theme-defaults.php' );

//* Set Localization (do not remove)
load_child_theme_textdomain( 'genesis-sample', apply_filters( 'child_theme_textdomain', get_stylesheet_directory() . '/languages', 'genesis-sample' ) );

//* Add Image upload and Color select to WordPress Theme Customizer
require_once( get_stylesheet_directory() . '/lib/customize.php' );

//* Include Customizer CSS
include_once( get_stylesheet_directory() . '/lib/output.php' );

//* Child theme (do not remove)
define( 'CHILD_THEME_NAME', 'Genesis Sample' );
define( 'CHILD_THEME_URL', 'http://www.studiopress.com/' );
define( 'CHILD_THEME_VERSION', '2.2.4' );

//* Enqueue Scripts and Styles
add_action( 'wp_enqueue_scripts', 'genesis_sample_enqueue_scripts_styles' );
function genesis_sample_enqueue_scripts_styles() {

	wp_enqueue_style( 'genesis-sample-fonts', '//fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700', array(), CHILD_THEME_VERSION );
	wp_enqueue_style( 'dashicons' );

	wp_enqueue_script( 'genesis-sample-responsive-menu', get_stylesheet_directory_uri() . '/js/responsive-menu.js', array( 'jquery' ), '1.0.0', true );
	$output = array(
		'mainMenu' => __( 'Menu', 'genesis-sample' ),
		'subMenu'  => __( 'Menu', 'genesis-sample' ),
	);
	wp_localize_script( 'genesis-sample-responsive-menu', 'genesisSampleL10n', $output );

}

//* Add HTML5 markup structure
add_theme_support( 'html5', array( 'caption', 'comment-form', 'comment-list', 'gallery', 'search-form' ) );

//* Add Accessibility support
add_theme_support( 'genesis-accessibility', array( '404-page', 'drop-down-menu', 'headings', 'rems', 'search-form', 'skip-links' ) );

//* Add viewport meta tag for mobile browsers
add_theme_support( 'genesis-responsive-viewport' );

//* Add support for custom header
add_theme_support( 'custom-header', array(
	'width'           => 600,
	'height'          => 160,
	'header-selector' => '.site-title a',
	'header-text'     => false,
	'flex-height'     => true,
) );

//* Add support for custom background
add_theme_support( 'custom-background' );

//* Add support for after entry widget
add_theme_support( 'genesis-after-entry-widget-area' );

//* Add support for 3-column footer widgets
add_theme_support( 'genesis-footer-widgets', 3 );

//* Add Image Sizes
add_image_size( 'featured-image', 720, 400, TRUE );

//* Rename primary and secondary navigation menus
add_theme_support( 'genesis-menus' , array( 'primary' => __( 'After Header Menu', 'genesis-sample' ), 'secondary' => __( 'Footer Menu', 'genesis-sample' ) ) );

//* Reposition the secondary navigation menu
remove_action( 'genesis_after_header', 'genesis_do_subnav' );
add_action( 'genesis_footer', 'genesis_do_subnav', 5 );

//* Reduce the secondary navigation menu to one level depth
add_filter( 'wp_nav_menu_args', 'genesis_sample_secondary_menu_args' );
function genesis_sample_secondary_menu_args( $args ) {

	if ( 'secondary' != $args['theme_location'] ) {
		return $args;
	}

	$args['depth'] = 1;

	return $args;

}

//* Modify size of the Gravatar in the author box
add_filter( 'genesis_author_box_gravatar_size', 'genesis_sample_author_box_gravatar' );
function genesis_sample_author_box_gravatar( $size ) {

	return 90;

}

//* Modify size of the Gravatar in the entry comments
add_filter( 'genesis_comment_list_args', 'genesis_sample_comments_gravatar' );
function genesis_sample_comments_gravatar( $args ) {

	$args['avatar_size'] = 60;

	return $args;

}

//* Enlever la balise H1 du titre du site : classe = site-title
add_filter( 'genesis_pre_get_option_home_h1_on', '__return_true' );

//* Changer la balise (wrap) autour de la description du site de p pour h2
add_filter( 'genesis_site_description_wrap', 'custom_site_desctiption_wrap' );
function custom_site_desctiption_wrap( $wrap ) {

$wrap = 'h2';
return $wrap;

}  

/* Begin Microthemer Code au cas où on désactive cette extension laisser ce code */
if (!defined('MT_IS_ACTIVE')) {
	function add_microthemer_css() {
		$p = get_option('preferences_themer_loader');
		$mtv = '?mtv=' . (!empty($p['version']) ? $p['version'] : 1);
		$mts = '?mts=' . (!empty($p['num_saves']) ? $p['num_saves'] : 0);
		if (!empty($p['g_fonts_used'])){
			$p['g_url'] = !empty($p['gfont_subset']) ? $p['g_url'] . $p['gfont_subset'] : $p['g_url'];
			$h = 'microthemer_g_font'; wp_register_style($h, $p['g_url'], false); wp_enqueue_style($h);
		}
		$r = content_url() . '/micro-themes/'; $css_min = !empty($p['minify_css']) ? 'min.' : '';
		$h = 'microthemer'; wp_register_style($h, $r.$css_min.'active-styles.css'.$mts); wp_enqueue_style($h);
		global $is_IE; if ($is_IE) {
			global $wp_styles; foreach ($p['ie_css']as $key => $cond){
				if (!empty($key)) {
					$h = 'tvr_ie_'.$key; wp_register_style($h, $r.$css_min.'ie-'.$key.'.css'.$mts); wp_enqueue_style($h);
					$wp_styles->add_data($h, 'conditional', $cond);
				}
			}
		}
		if (!empty($p['load_js'])) {
			$h = 'mt_user_js'; wp_register_script($h, $r.'active-scripts.js'.$mts); wp_enqueue_script($h);
		} if (!empty($p['active_events'])) {
			$h = 'mt_animation_events'; wp_register_script($h, $r.'animation-events.js'.$mtv, array('jquery')); wp_enqueue_script($h);
			wp_localize_script( $h, 'MT_Events_Data', json_decode($p['active_events']) );
		}
	}
	function add_microthemer_body_classes($classes){
		global $post; if (isset($post)) {
			$classes[] = 'mt-'.$post->ID; $classes[] = 'mt-'.$post->post_type.'-'.$post->post_name;
		}
		return $classes;
	}
	add_action('wp_enqueue_scripts', 'add_microthemer_css');
	add_filter( 'body_class', 'add_microthemer_body_classes');
}
/* End Microthemer Code */
