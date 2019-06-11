<?php 
$donated =  $_REQUEST['donation'];
$raised = rand(0, $target );
//$raised = 0;
	$send =  ['status'=> 'OK' , 'raised' => $donated];
	echo json_encode($send);
?>