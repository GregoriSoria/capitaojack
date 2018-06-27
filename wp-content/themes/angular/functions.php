<?php

add_action( 'init', 'allow_origin' );
function allow_origin() {
    header("Access-Control-Allow-Origin: *");
}

/* API */

require_once 'api/api_pages.php';