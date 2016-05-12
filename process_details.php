<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 11-05-2016
 * Time: 19:33
 */
$result_json = file_get_contents('php://input');
$result_array= json_decode($result_json,true);
//establish connection to database and retrieve required data
//var_dump($result_array);
//convert data into json object and send it back
  echo json_encode($result_array);
?>

