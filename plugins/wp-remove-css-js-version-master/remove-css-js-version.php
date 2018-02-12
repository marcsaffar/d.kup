<?php
/*
Plugin Name: Remove version number in CSS and JS files
Plugin URI: https://wwww.gregoirenoyelle.com
Description: Remove version numbers to works with Live Google Chrome Inpector
Version: 1.0
Author: Grégoire Noyelle
Author URI: http://wwww.gregoirenoyelle.com
License: GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/


//* If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
    die;
}


// Function to remove version numbers in css and js
// http://wordpress.stackexchange.com/questions/96324/how-to-remove-file-versions-from-the-file-source-links-in-wp-head
add_filter( 'style_loader_src', 'gn170228_js_css_remove_version' );
add_filter( 'script_loader_src', 'gn170228_js_css_remove_version' );


function gn170228_js_css_remove_version( $url )
{
    return remove_query_arg( 'ver', $url );
}