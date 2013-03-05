
<?php

require 'vendor/autoload.php';

$app = new \Slim\Slim();

$app->get('/', function () use ($app) {
    $app->render('app.php');
});


$app->get('/users', function () use ($app) {

	$res = $app->response();
	$res['Content-Type'] = 'application/json';
	$res['X-Powered-By'] = 'Slim';

	echo json_encode(array(
		array('username' => 'Warren', 'email' => 'warrehaskins@gmail.com', 'location' => 'Ireland'),
		array('username' => 'John', 'email' => 'johnsmith@gmail.com', 'location' => 'Ireland'),
		array('username' => 'Craig', 'email' => 'craigdoyle@gmail.com', 'location' => 'Ireland'),
	));

});


$app->run();


