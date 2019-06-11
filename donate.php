<?php 
$donation = 0;
$send =  ['status'=> 'OK' ];
if (isset($_REQUEST['donation'])){
	$send['donation'] =  $_REQUEST['donation'];
	if (isset($_REQUEST['raised'])){
		$send['raised'] =  $_REQUEST['raised'] + $_REQUEST['donation'];
	}
}

echo json_encode($send);
?>