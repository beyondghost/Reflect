function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function updateTime() {
    var minutes = new Date().getMinutes();
    var hours = new Date().getHours();
    var AMorPM;
    if (hours <= 11) {
        AMorPM = "AM";
        if (hours == 0) hours = 12;
    }
    else {
        AMorPM = "PM";
        if (hours !== 12) hours -= 12;
    }
    $("#time").html(hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + AMorPM);

    var newDate = new Date();
    newDate.setDate(newDate.getDate());
    $('#date').html(daysOfTheWeek[newDate.getDay()] + ", " + monthNames[newDate.getMonth()] + " " + newDate.getDate() + ", " + newDate.getFullYear());
};

function updateWeather() {
    $.get("weather/weather_current.php", function(e) {
        var json = $.parseJSON(e);
        $("#icon").html("<img src='img/icons/" + json['icon'] + ".png' />");
        $("#city").html("There's currently " + json['main'].toLowerCase() + " in " + json['city'] + ".");
        $("#temperature").html(json['temperature'] + "°F");
    });
}

function updateBitcoin() {
  $.get("http://api.coindesk.com/v1/bpi/currentprice.json", function(e) {
        var json = $.parseJSON(e);
        $("#bitcoin-value").html(numberWithCommas(json['bpi']['USD']['rate_float'].toFixed(2)));
    });
}

function updateNews() {
  $.get("https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=" + NewsAPIKey, function(e) {
    for (var i = 1; i <= 3; i++) {
      $("#hn-" + i).html("<b>" + i + ".</b> " + e["articles"][i]["title"]);
    }
  });
  
  $.get("https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=" + NewsAPIKey, function(e) {
    for (var i = 1; i <= 3; i++) {
      $("#bbc-" + i).html("<b>" + i + ".</b> " + e["articles"][i]["title"]);
    }
  });
}

function updateMusic() {
  $.post("music/music.php", { "input": "info" }, function(e) {
    var json = $.parseJSON(e);
    if (json['artist'] == null) {
      $("#music-is-playing").css("display", "none");
    } else {
      $("#music-is-playing").css("display", "block");
      $("#song-name").html(json['song']);
      $("#song-artist").html(json['artist'].replace(/\;/g, ", "));
    }
    $("#volume-percent").html(json['volume'] + "%");
    $("#shuffle-on-off").html(capitalizeFirstLetter(json['shuffle'].trim()));
  });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

$(document).ready(function() {
    updateTime();
    setInterval(updateTime, 1000);
  
    updateMusic();
    setInterval(updateMusic, 5000);

    updateWeather();
    setInterval(updateWeather, 60000);
  
    updateBitcoin();
    setInterval(updateBitcoin, 60000);
  
    updateNews();
    setInterval(updateNews, 60000);
});