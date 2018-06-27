<?php

function getPage() {
	global $wpdb;
    
    $page = get_page_by_path($_GET['page']);

    $result = [];
    if ($page) {
        $id = $page->ID;

        $result = [
            'slide_superior' => get_field('slide_superior', $id),
            'texto_animado' => get_field('texto_animado', $id)
        ];
    } else {
        $result = [
            'status' => '204',
            'message' => 'Página não existe'
        ];
    }

    wp_send_json($result);
}
add_action( 'wp_ajax_getPage', 'getPage' );
add_action( 'wp_ajax_nopriv_getPage', 'getPage' );

?>