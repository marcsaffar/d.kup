<?php
//mes fonctions personnalisées

//* Créons des zônes de widget

//* Première zône photo + texte à droite
genesis_register_sidebar( array(
    'id'          => 'accueil-haut',
    'name'        => 'Accueil - Haut de page',
    'description' => 'Partie haute de ma page d\'Accueil. Avec une photo et un texte à droite.',
) );

// deuxième zone mat de couleur
genesis_register_sidebar( array(
    'id'          => 'accueil-matcouleurhaut',
    'name'        => 'Accueil - Mat de couleur',
    'description' => 'Petit rectangle de couleur sous le haut',
) );

// troisième zone D.KUP Woman
genesis_register_sidebar( array(
    'id'          => 'dkup-woman',
    'name'        => 'Accueil - D.KUP woman',
    'description' => 'Partie D.KUP woman',
) );

// quatrième zone D.KUP Man
genesis_register_sidebar( array(
    'id'          => 'dkup-man',
    'name'        => 'Accueil - D.KUP man',
    'description' => 'Partie D.KUP man',
) );

// cinquième zône Fabrice Mahabo
genesis_register_sidebar( array(
    'id'          => 'titre-fabrice-mahabo',
    'name'        => 'Accueil - Titre Fabrice Mahabo',
    'description' => 'Fabrice Mahabo dans mat de couleur',
) );

// sixième zône Corps Fabrice Mahabo photo et texte
genesis_register_sidebar( array(
    'id'          => 'corps-fabrice-mahabo',
    'name'        => 'Accueil - Fabrice Mahabo, photo et texte à droite',
    'description' => 'Fabrice Mahabo, photo et texte à droite',
) );

// septième zone mat de couleur
genesis_register_sidebar( array(
    'id'          => 'accueil-matcouleurbas',
    'name'        => 'Accueil - Mat de couleur en bas',
    'description' => 'Petit rectangle de couleur sous Fabrice Mahabo',
) );

?>