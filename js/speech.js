var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var owner = "Jamsheed";

var bot = new cleverbot(CleverbotKeyOne,CleverbotKeyTwo);

bot.setNick("mirror");
bot.create(function (err, session) {});

$("#message").keypress(function(e) {
  if(e.which == 13 && $("#message").val() !== "") {
    talk($("#message").val());
  }
});

// ====================================== Speaking ======================================
function talk(inp) {
  // ====================================== Speech Trimming ======================================
  inp = inp.toLowerCase();
  // Log what we said
  console.log(inp);

  // If they say okay mirror twice, check again
  while (inp.startsWith("okay mirror")) {
    inp = inp.replace("okay mirror ", "");
  }

  // Check for aliases
  if (inp.startsWith("play next song") || inp.startsWith("play the next song")) {
    inp = "next song";
  } else if (inp.startsWith("play previous song") || inp.startsWith("play the previous song") || inp.startsWith("play last song") || inp.startsWith("play the last song")) {
    inp = "previous song";
  }

  // Cut any extra slack at the beginning
  if (inp.startsWith(" ")) {
    inp = inp.replace(" ", "");
  }

  // ====================================== Speech Correction ======================================
  if (inp.startsWith("paz music") || inp.startsWith("paul's music") || inp.startsWith("house music") || inp.startsWith("paul's music") || inp.startsWith("falls music")) {
    inp = "pause music";
  } else if (inp.startsWith("nixon") || inp.startsWith("mets")) {
    inp = "next song";
  }

  // ====================================== AI ======================================

  if (inp.startsWith("what time") || inp.startsWith("what is the time") || inp.startsWith("what's the time")) {
    var d = new Date();
    var timeOfDay = " AM";
    var hour = "" + d.getHours();
    var separator = ":";
    var minutes = "" + d.getMinutes();
    if (d.getHours() == 0) {
      hour = "12";
    }

    if (d.getHours() >= 12) {
		if (d.getHours() !== 12) {
			hour = "" + (d.getHours() - 12);
		}
  		timeOfDay = " PM";
    }

    if (d.getMinutes() == 0) {
      minutes = "o'clock";
      separator = " ";
    } else if (d.getMinutes() < 10) {
      minutes = "0" + d.getMinutes();
    }
    respond("It is " + hour + separator + minutes + timeOfDay + ".");
  } else if (inp.startsWith("what day") || inp.startsWith("what date") || inp.startsWith("what's the day") || inp.startsWith("what's the date") || inp.startsWith("what is the date")) {
    var d = new Date();
    var date = d.getDate();
    var day = daysOfTheWeek[d.getDay()];
    var month = monthNames[d.getMonth()];
    var year = d.getFullYear();

    if (date == 1) {
      date = "1st";
    } else if (date == 2) {
      date = "2nd";
    } else if (date == 3) {
      date = "3rd";
    } else if (date == 21) {
      date = "21st";
    } else if (date == 22) {
      date = "22nd";
    } else if (date == 23) {
      date = "23rd";
    } else if (date == 31) {
			date = "31st";
		} else {
      date = date + "th";
    }
    respond("It is " + day + ", " + month + " " + date + ", " + year + ".");
  }
	
  // Music
    // Play

  else if (inp.startsWith("play")) {
    if (inp.startsWith("play music")) {
      musicControl("play music");
    } else if (inp.startsWith("play musical") || inp.startsWith("play instrumental")) {
      musicControl("instrumental");
    } else if (inp.startsWith("play top 50") || inp.startsWith("play top fifty") || inp.startsWith("play popular music") || inp.startsWith("play american top fifty") || inp.startsWith("play american top 50") || inp.startsWith("play the top 50") || inp.startsWith("play american top fifty")) {
      musicControl("top50");
    } else if (inp.startsWith("play party music") || inp.startsWith("play study music")) {
      musicControl("party");
    } else if (inp.startsWith("play throwback") || inp.startsWith("play billboard") || inp.startsWith("play old music")) {
      musicControl("throwback");
    } else {
      musicControl(inp);
    }
  }
    // Pause
  else if (inp.startsWith("pause")) {
    musicControl("pause");
  }
	
	else if (inp.startsWith("resume")) {
    musicControl("resume");
  }
	
	  // Volume
	else if (inp.startsWith("turn it up") || inp.startsWith("volume up") || inp.startsWith("turn up")) {
		musicControl("turn up");
	}
	
	else if (inp.startsWith("turn it down") || inp.startsWith("volume down") || inp.startsWith("turn down")) {
		musicControl("turn down");
	}

    // Next song
  else if (inp.startsWith("next song")) {
    musicControl("next");
  }
    // Previous song
  else if (inp.startsWith("previous song")) {
    musicControl("previous");
  }
    // What is this song?
  else if (inp.startsWith("what is this song") || inp.startsWith("what is playing") || inp.startsWith("what is that song") || inp.startsWith("what is this") || inp.startsWith("what tune is this") || inp.startsWith("what tune is playing") || inp.startsWith("what song is this")) {
    musicControl("song");
  } else if (inp.startsWith("who sings this") || inp.startsWith("who is the artist")) {
    musicControl("artist");
	}
	
  // Weather
  else if (inp.indexOf("weather")) {
    var split = inp.split(" ");

    if (split[0] + " " + split[1] == "what is") {
      split.splice(0, 1);
      split.splice(0, 1);
    } else if (split[0] == "what's") {
      split.splice(0, 1);
    } else if (split[0] + " " + split[1] == "what will") {
      split.splice(0, 1);
      split.splice(1, 1);
    }

    if (split[0] == "the") {
      split.splice(0, 1);
    }

    if (split[0] == "weather") {
      split.splice(0, 1);
    }

    if (split[0] == "like") {
      split.splice(0, 1);
    }

    if (split[0] == "for") {
      split.splice(0, 1);
    }

    if (split[0] + " " + split[1] == "going to") {
      split.splice(0, 1);
      split.splice(0, 1);
    }

    if (split[0] == "be") {
      split.splice(0, 1);
    }

    if (split[0] == "like") {
      split.splice(0, 1);
    }

    if (split[0] == "for") {
      split.splice(0, 1);
    }

    if (split[0] == "on") {
      split.splice(0, 1);
    }

    var acceptedEnglish = {"today": 0, "tomorrow": 1, "the day after tomorrow": 2, "day after tomorrow": 2};
    var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var words = {"one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6};

    if (split[0] == "in") {
      split.splice(0, 1);
      var rq = split[0];
      if (!isNaN(rq)) {
        weatherControl(rq, "in " + rq + " " + split[1]);
      } else if (rq in words) {
        weatherControl(words.rq, "in " + rq + " " + split[1]);
      }
    } else if (split.length == 1) {
      var rq = split[0];
      if (rq in acceptedEnglish) {
        weatherControl(acceptedEnglish[rq], rq);
      } else if ($.inArray(rq, days)) {
        var d = new Date();
        var today = d.getDay();
        var wanted = days.indexOf(rq);

        if (today == wanted) {
          weatherControl(6, rq);
        } else if (today > wanted) {
          weatherControl((wanted + 7) - today, rq);
        } else if (today < wanted) {
          weatherControl(wanted - today, rq);
        }
      } else {
        respond("I don't know what you mean by \"" + split[0] + "\"");
      }
    } else if (split.length == 3) {
      var rq = split[0] + " " + split[1] + " " + split[2];
      if (rq in acceptedEnglish) {
        weatherControl(acceptedEnglish[rq], rq);
      } else {
        respond("I don't know what you mean by \"" + split[0] + " " + split[1] + " " + split[2] + "\"");
      }
    } else if (split.length == 4) {
      var rq = split[0] + " " + split[1] + " " + split[2] + " " + split[3];
      if (rq in acceptedEnglish) {
        weatherControl(acceptedEnglish[rq], rq);
      } else {
        respond("I don't know what you mean by \"" + split[0] + " " + split[1] + " " + split[2] + " " + split[3] + "\"");
      }
    }
  } else {
		// ====================================== Conversational Responses ======================================
    bot.ask(inp, function (err, response) {
      respond(response);
    });
  }
}

function respond(response, cb) {
	responsiveVoice.speak(response, "UK English Male");
}

// ====================================== Functions ======================================

function musicControl(arg) {
  $.post('music/music.php', { input: arg }, function(response) {
    if (response !== "") respond(response);
  });
}

function weatherControl(day, english) {
  $.post("weather/weather.php", { "day": day, "english": english }, function(response) {
    respond(response);
  });
}

// ====================================== Utilities TODO: MOVE THIS TO ANOTHER FILE ======================================
function contains(needle, haystack) {
  if (haystack.indexOf(needle) !== -1) {
    return true;
  } else {
    return false;
  }
}

function chooseRandomExpression(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}

function getTimeOfDay() {
  var date = new Date();
  if (date.getHours() >= 5 && date.getHours() <= 12) {
    return "morning";
  } else if (date.getHours() >= 13 && date.getHours() <= 18) {
    return "afternoon";
  } else if ((date.getHours() >= 19 && date.getHours() <= 23) || (date.getHours() >= 0 && date.getHours() <= 4)) {
    return "evening";
  }
}

// ====================================== RECOGNITION ======================================
if (annyang) {
  var commands = {
    'okay mirror *inp': talk
  };

  annyang.addCommands(commands);
  annyang.start();
}
