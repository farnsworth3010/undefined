<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
header('Content-type: json/application');

require 'connect.php';
require 'functions.php';


$url = $_SERVER['REQUEST_URI'];

if($url === '/test/index.php/schedule'){
    getDays($connect);
}





