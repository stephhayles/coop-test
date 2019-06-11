<?php 
$target =  rand(2000, 10000);
$raised = rand(0, $target );
//$raised = 0;
	$send =  ['status'=> 'OK' , 'raised' => $raised, 'target'=>$target];
	echo json_encode($send);
?>