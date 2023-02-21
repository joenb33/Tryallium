<?php
include('includes/header.php');

// Get the subpage from the URL
$request_uri = $_SERVER['REQUEST_URI'];
if (preg_match('/^\/([a-zA-Z0-9-]+)$/', $request_uri, $matches)) {
    $page = $matches[1];
} else {
    $page = 'home';
}

// Map subpage names to JavaScript file names
$js_files = [
    'home' => 'js/home.js',
    'quote-generation' => 'js/quote-generation.js',
    'contact' => 'js/contact.js',
];

// Include the JavaScript file for the subpage, or use the default if not found
$js_file = isset($js_files[$page]) ? $js_files[$page] : 'js/home.js';
echo '<script src="' . $js_file . '"></script>';

// Include the subpage, or show a 404 error if not found
$page_file = 'pages/' . $page . '.php';
if (file_exists($page_file)) {
    include($page_file);
} else {
    include('pages/404.php');
}

include('includes/footer.php');
