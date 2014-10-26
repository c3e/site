<?php
// ----- Don't edit this -----------------
require_once(dirname(__FILE__) . '/engine/Updater.php');
// ---------------------------------------


// ----- You can edit these settings: -----

//date_default_timezone_set('Europe/Berlin'); // Sometimes I hate PHP. This is one of those times.
$basepath = "/var/www/chaospott.de";
// Paths
Updater::$source_path   = "$basepath";
Template::$template_dir = "$basepath/templates";
Updater::$dest_path     = "$basepath/www";
Updater::$cache_path    = "$basepath/cache";
Updater::$post_extension = '.md';

// Blog metadata
Post::$blog_title = 'Chaospott';
Post::$blog_url   = 'http://chaospott.de/';
Post::$blog_description = 'Chaospott';
