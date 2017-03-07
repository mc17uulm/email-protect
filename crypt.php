<?php
if($_POST){
	if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest'){
		$output = json_encode(array(
				'type' => 'error',
				'text' => 'Sorry Request must be Ajax POST'
		));
		die($output);
	}

	$mail = $_POST["email"];
	$type = $_POST["type"];

	$tmp = "";

	if($type == 1){
		for($i = 0; $i < strlen($mail); $i++){
			$tmp .= "&#" . ord($mail{$i}) . ";";
		}
		$norm = $tmp;
		$tmp = "";
		$mail = "mailto:" . $mail;
		for($i = 0; $i < strlen($mail); $i++){
			$tmp .= "&#" . ord($mail{$i}) . ";";
		}
		$out = "<a href=\"" . $tmp . "\">" . $norm . "</a>";
		die($out);
	} else {
		for($i = 0; $i < strlen($mail); $i++){
			$tmp .= "&#" . ord($mail{$i}) . ";";
		}
		die($tmp);
	}
}

?>
