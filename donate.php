<?php 
$donation = 0;
if (isset($_REQUEST['donation'])){
	$donation =  $_REQUEST['donation'];
}
$send =  ['status'=> 'OK' , 'donation' => $donation];
echo json_encode($send);
?>