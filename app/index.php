<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="viewport" content="user-scalable=1.0,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
    <meta name="format-detection" content="telephone=no">

    <link rel="apple-touch-icon-precomposed" href="logo.png" />
    <link rel="apple-touch-icon" href="logo.png" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />

    <title>Mirror</title>

    <link rel="stylesheet" href="app.css" />
    <link rel="stylesheet" href="fa/css/font-awesome.min.css" />
</head>
<body>
	<div id="music-custom-menu">
		<div id="music-custom-menu-container">
			<input type="text" />
			<div>Submit</div>
		</div>
	</div>
	<div id="music" class="section">
		<div class="volume">
			<div id="volume-down">-</div>
			<i class="fa fa-volume-up"></i>
			<div id="volume-up">+</div>
		</div>
		<div class="music-container">
	        <div class="floater-container">
	           <i class="fa fa-backward music-button" id="previous"></i>
	           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	           <span class="music-button" id="pause"><i class="fa fa-play"></i>&nbsp;/&nbsp;<i class="fa fa-pause"></i></span>
	           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	           <i class="fa fa-forward music-button" id="next"></i>
	           <br />
	           <div class="button" id="music-favorites">Favorites</div>
	           <div class="button" id="music-top50">Top 50</div>
	           <div class="button" id="music-party">Party / Study</div>
	           <div class="button" id="music-instrumental">Instrumental</div>
	           <div class="button" id="music-throwback">Throwback</div>
	           <div class="button" id="music-custom">Custom...</div>
	       	</div>
		</div>
	</div>
	<div id="custom" class="section">
		<div class="custom-button" id="custom-one">
	        <div class="floater-container">
	           <div class="floater">button 1</div>
	       	</div>
		</div>
		<div class="custom-button" id="custom-two">
	        <div class="floater-container">
	           <div class="floater">button 2</div>
	       	</div>
		</div>
	</div>
	<script src="../js/jquery.js"></script>
	<script src="app.js"></script>
</body>
</html>