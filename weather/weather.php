<?php
  require_once("../config.php");
  // this should be a number from 0 to 6. 0 = today and 6 = a week from today.
  $day = $_POST['day'];

  // this should be english, ex: "today", "tomorrow", "2 days"
  $english = $_POST['english'];

  $city = @json_decode(file_get_contents("http://ip-api.com/json/" . $_SERVER['HTTP_CLIENT_IP']), true);

  $weather = @json_decode(file_get_contents("http://api.openweathermap.org/data/2.5/forecast/daily?lat=" . $city["lat"] . "&lon=" . $city["lon"] . "&mode=json&APPID=" . $OpenWeatherMapAPIKey, true), true);

  // Converting the temperature from Kelvin to farenheight
  $temperature = ((9/5) * ($weather['list'][$day]['temp']['day'] - 273)) + 32;
  $description = $weather['list'][$day]['weather']['0']['description'];

  echo "The weather " . $english . " is " . $description . " with an average temperature of " . round($temperature, 1) . "°F.";
