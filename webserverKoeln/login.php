<?php
$url = 'http:/192.168.90.10:5000/api/auth';
$data = $_POST;
unset($data["remember"]);

// use key 'http' even if you send the request to https://...
$options = [
    'http' => [
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($data),
    ],
];

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);
if ($result === false) {
    /* Handle error */
}

var_dump($result);
?>