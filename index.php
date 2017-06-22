<?php
  include 'config.php';
?>

<!DOCTYPE html>
<html>
<head>
  <title>Mirror</title>
  <link rel="stylesheet" href="fa/css/font-awesome.min.css" />
  <link rel="stylesheet" href="css/index.css" />
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,700,700i" rel="stylesheet">
</head>
<body>
	<div id="top-right">
		<div id="time"></div>
		<div id="date"></div>
		<br />
		<div id="icon"></div>
		<div id="temperature"></div>
		<div id="city"></div>
	</div>
	<div id="bottom-right">
		<div id="bitcoin">$<span id="bitcoin-value"></span> = 1 <img src="img/btc.png" style="height: 1em; margin-bottom: -5px;" /></div>
		Current Bitcoin Value
	</div>
	<div id="bottom-left">
		<div id="music-is-playing">
		Currently Playing
			<div id="song-name"></div>
			<div id="song-artist"></div>
			<br />
		</div>
		<div id="volume"><i class="fa fa-volume-up"></i> <span id="volume-percent"></span></div>
		<div id="shuffle"><i class="fa fa-random"></i> <span id="shuffle-on-off"></span></div>
	</div>
	<div id="top-left">
		<div id="news-title">News Headlines</div>
		<div class="news-source-title">BBC</div>
		<div class="news-article" id="bbc-1"></div>
		<div class="news-article" id="bbc-2"></div>
		<div class="news-article" id="bbc-3"></div>
		
		<br />
		<div class="news-source-title">Hacker News</div>
		<div class="news-article" id="hn-1"></div>
		<div class="news-article" id="hn-2"></div>
		<div class="news-article" id="hn-3"></div>
	</div>
</body>
<script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"></script>
<script src='https://code.responsivevoice.org/responsivevoice.js'></script>
<script src="js/cleverbot.io.min.js"></script>
<script src="js/jquery.js"></script>
<script src="config.js"></script>
<script src="js/speech.js"></script>
<script src="js/display.js"></script>
</html>