<?php
/**
 * This file adds the Front Page Template to any Genesis Child Theme.
 */

/**
 * Page d'accueil avec Widgets pour le thème Marc Saffar pour D.KUP
 *
 * @author Marc Saffar
 * @package Theme Marc Saffar pour D.KUP
 * @subpackage Personnalisations
 */


add_action( 'genesis_meta', 'gn_sample_home_genesis_meta' );
/**
 * Add widget support for homepage. If no widgets active, display the default loop.
 *
 */
function gn_sample_home_genesis_meta() {
	if ( is_active_sidebar( 'accueil-haut' ) || is_active_sidebar( 'accueil-matcouleurhaut' ) || is_active_sidebar( 'dkup-woman' ) || is_active_sidebar( 'dkup-man' ) ) {
		//* Force full-width-content layout setting
		add_filter( 'genesis_pre_get_option_site_layout', '__genesis_return_full_width_content' );
		//* Add gn-sample-home body class
		add_filter( 'body_class', 'ms_sample_body_class' );
		//* Remove breadcrumbs
		remove_action( 'genesis_before_loop', 'genesis_do_breadcrumbs' );
		//* Remove the default Genesis loop
		remove_action( 'genesis_loop', 'genesis_do_loop' );
		//* Ajoute la première zône de widget
		add_action( 'genesis_loop', 'ms_sample_accueil_premier_widget', 1 );
		//* Ajoute la deuxième zône de widget
		add_action( 'genesis_loop', 'ms_sample_accueil_deuxieme_widget', 2 );
		//* Ajoute la troisième zône de widget
		add_action( 'genesis_loop', 'ms_sample_accueil_troisieme_widget', 3 );
		//* Ajoute la quatrième zône de widget
		add_action( 'genesis_loop', 'ms_sample_accueil_quatrieme_widget', 4 );
		//* Ajoute la cinquième zône de widget
		add_action( 'genesis_loop', 'ms_sample_accueil_cinquieme_widget', 5 );
		//* Ajoute la sixième zône de widget
		add_action( 'genesis_loop', 'ms_sample_accueil_sixieme_widget', 6 );
		//* Ajoute la septième zône de widget
		add_action( 'genesis_loop', 'ms_sample_accueil_septieme_widget', 6 );
	}
}
//j'ajoute une classe perso au body
function ms_sample_body_class( $classes ) {
	$classes[] = 'ms-maclasse-accueil';
	return $classes;
}
//j'ajoute la première zône de widget
function ms_sample_accueil_premier_widget() {
	genesis_widget_area( 'accueil-haut', array(
		'before' => '<div class="accueil-haut zone-widget">',
		'after'  => '</div>',
	) );
}
//j'ajoute la deuxième zône de widget
function ms_sample_accueil_deuxieme_widget() {
	genesis_widget_area( 'accueil-matcouleurhaut', array(
		'before' => '<div class="accueil-matcouleurhaut zone-widget">',
		'after'  => '</div>',
	) );
}
//j'ajoute la troisième zône de widget
function ms_sample_accueil_troisieme_widget() {
	genesis_widget_area( 'dkup-woman', array(
		'before' => '<div class="dkup-woman zone-widget">',
		'after'  => '</div>',
	) );
}
//j'ajoute la quatrième zône de widget
function ms_sample_accueil_quatrieme_widget() {
	genesis_widget_area( 'dkup-man', array(
		'before' => '<div class="dkup-man zone-widget">',
		'after'  => '</div>',
	) );
}
//j'ajoute la cinquième zône de widget
function ms_sample_accueil_cinquieme_widget() {
	genesis_widget_area( 'titre-fabrice-mahabo', array(
		'before' => '<div class="titre-fabrice-mahabo zone-widget">',
		'after'  => '</div>',
	) );
}
//j'ajoute la sixième zône de widget
function ms_sample_accueil_sixieme_widget() {
	genesis_widget_area( 'corps-fabrice-mahabo', array(
		'before' => '<div class="corps-fabrice-mahabo zone-widget">',
		'after'  => '</div>',
	) );
}
//j'ajoute la septieme zône de widget
function ms_sample_accueil_septieme_widget() {
	genesis_widget_area( 'accueil-matcouleurbas', array(
		'before' => '<div class="accueil-matcouleurbas zone-widget">',
		'after'  => '</div>',
	) );
}

//Un test pour voir si ce fichier est pris en considération
 add_action( 'genesis_entry_header', ma_fonction, 1 );

 function ma_fonction(){
echo(COUCOU);
 }
 

genesis();