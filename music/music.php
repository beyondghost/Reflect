<?php
  exec("mpc volume 20");
  $inp = $_POST['input'];
  if ($inp == "play music") {
    exec("mpc random on");
    exec("mpc stop");
    exec("mpc clear");
    exec("mpc add spotify:user:jmistri:playlist:7j7r1h2XnQGlJZSebnDy4Y");
    exec("mpc play");
    echo "Playing songs from your favorite playlist.";
  } else if ($inp == "instrumental") {
    exec("mpc random on");
    exec("mpc stop");
    exec("mpc clear");
    exec("mpc add spotify:user:jmistri:playlist:7aGmfRA4C324rcFfDqBNaw");
    exec("mpc play");
    echo "Playing instrumental music.";
  } else if ($inp == "top50") {
    exec("mpc random off");
    exec("mpc stop");
    exec("mpc clear");
    exec("mpc add spotify_web:user:spotifycharts:playlist:37i9dQZEVXbMDoHDwVN2tF");
    exec("mpc play");
    echo "Playing the top 50.";
  } else if ($inp == "party") {
    exec("mpc random on");
    exec("mpc stop");
    exec("mpc clear");
    exec("mpc add spotify:user:sank13:playlist:6H63wlgtDtQ2xQ36GuYnrX");
    exec("mpc play");
    echo "Playing party music.";
  } else if ($inp == "throwback") {
    exec("mpc random on");
    exec("mpc stop");
    exec("mpc clear");
    exec("mpc add spotify:user:12158521759:playlist:54V4VZVbcyLUv3IdWb8DIw");
    exec("mpc play");
    echo "Playing throwback music.";
  } else if ($inp == "pause") {
    if (isPlaying() == false) {
      exec("mpc play");
    } else {
      exec("mpc pause");
    }
    echo "Paused music.";
  } else if ($inp == "resume") {
    if (isPlaying() == false) {
      exec("mpc play");
    } else {
      exec("mpc pause");
    }
    echo "Resumed music.";
  } else if ($inp == "next") {
    exec("mpc next");
    echo "Playing next song.";
  } else if ($inp == "previous") {
    exec("mpc prev");
    echo "Playing previous song.";
  } else if ($inp == "info") {
    $info = [];
    exec("mpc", $info);
    if (0 === strpos($info[1], '[paused]')) {
      $volume = exec("sudo -u pi ../volume");
      $shuffle = getStringBetween($info[2], "random: ", "single");
      $info = [
        "artist" => null,
        "song" => null,
        "volume" => $volume,
        "shuffle" => $shuffle
      ];
      echo @json_encode($info, true);
    } else if (0 === strpos($info[0], 'volume')) {
      $volume = exec("sudo -u pi ../volume");
      $shuffle = getStringBetween($info[0], "random: ", "single");
      $info = [
        "artist" => null,
        "song" => null,
        "volume" => $volume,
        "shuffle" => $shuffle
      ];
      echo @json_encode($info, true);
    } else {
      $tempArray = explode(" - ", $info[0]);
      $artist = $tempArray[0];
      $song = $tempArray[1];
      $volume = exec("sudo -u pi ../volume");
      $shuffle = getStringBetween($info[2], "random: ", "single");
      $info = [
        "artist" => $artist,
        "song" => $song,
        "volume" => $volume,
        "shuffle" => $shuffle
      ];
      echo @json_encode($info, true);
    }
  } else if ($inp == "song") {
    $info = [];
    exec("mpc", $info);
    if (0 === strpos($info[1], '[paused]') || 0 === strpos($info[0], 'volume')) {
      echo "No song is currently being played.";
    } else {
      $tempArray = explode(" - ", $info[0]);
      $artist = $tempArray[0];
      $song = $tempArray[1];
      echo "This song is " . $song . " by " . $artist . ".";
    }
  } else if ($inp == "artist") {
    $info = [];
    exec("mpc", $info);
    if (0 === strpos($info[1], '[paused]') || 0 === strpos($info[0], 'volume')) {
      echo "No song is currently being played.";
    } else {
      $tempArray = explode(" - ", $info[0]);
      $artist = $tempArray[0];
      echo "This song is sung by " . $artist . ".";
    }
  } else if ($inp == "dim music" || $inp == "turn down") {
    exec("sudo -u pi ../volume -");
  } else if ($inp == "louden music" || $inp == "turn up") {
    exec("sudo -u pi ../volume +");
  } else {
    $songs = [];
    exec("mpc stop");
    exec("mpc clear");
    exec('mpc search title "' . substr(str_replace("'", "\'", strtolower($inp)), 5) . '"', $songs);
    exec("mpc add " . $songs[0]);
    exec("mpc play");
    echo "Playing " . substr($inp, 5) . ".";
  }

  function isPlaying() {
    $info = [];
    exec("mpc", $info);
    if (0 === strpos($info[1], '[paused]') || 0 === strpos($info[0], 'volume')) {
      return false;
    } else {
      return true;
    }
  }

function getStringBetween($string, $start, $end){
    $string = ' ' . $string;
    $ini = strpos($string, $start);
    if ($ini == 0) return '';
    $ini += strlen($start);
    $len = strpos($string, $end, $ini) - $ini;
    return substr($string, $ini, $len);
}
?>
