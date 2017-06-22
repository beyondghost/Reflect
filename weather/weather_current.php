<?php
  require_once("../config.php");
  $weather = @json_decode(file_get_contents("http://api.openweathermap.org/data/2.5/weather?q=" . $city . "&mode=json&APPID=" . $OpenWeatherMapAPI, true), true);

  $data = [
    "icon" => $weather['weather'][0]['icon'],
    "main" => $weather['weather'][0]['main'],
    "city" => $weather['name'],
    "temperature" => round((9/5) * ($weather['main']['temp'] - 273) + 32, 1)
  ];

  echo json_encode($data, true);