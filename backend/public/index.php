<?php

use Slim\Http\Request;
use Slim\Http\Response;

require '../vendor/autoload.php';

$app = new \Slim\App;

$app->get('/categories', function (Request $request, Response $response) {
    return $response->withJson([
        [
            'id' => 4,
            'name' => 'Test',
        ],
        [
            'id' => 3,
            'name' => 'blub',
        ]
    ]);
});

$app->run();