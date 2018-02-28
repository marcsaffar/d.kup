<?php
/**
 * This file adds the Front Page Template to any Genesis Child Theme.
 */

 add_action( 'genesis_entry_header', ma_fonction, 1 );

 function ma_fonction(){
echo(COUCOU);
 }
 

genesis();