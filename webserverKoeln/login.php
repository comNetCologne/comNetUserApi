<?php
$url = 'http://192.168.90.10:5000/api/auth';
$data = $_POST;
print_r($data)
unset($data["remember"]);

// Prepare POST data 
$options = [ 
    'http' => [ 
        'method'  => 'POST', 
        'header'  => 'Content-type: application/x-www-form-urlencoded', 
        'content' => http_build_query($data), 
    ], 
]; 
  
// Create stream context 
$context  = stream_context_create($options); 
  
// Perform POST request 
$response = file_get_contents($url, false, $context); 
  
// Display the response 
echo($response); 

print_r($response);
  
?>