# Reflect
A web-based software for magic mirrors
## Info
### What is it?
"A magic mirror is a raspberry pi powered monitor behind a double sided mirror. A mostly black web page allows you to add some widgets to the mirror’s reflection as if by magic." ([Dylan Pierce](http://blog.dylanjpierce.com/raspberrypi/magicmirror/tutorial/2015/12/27/build-a-magic-mirror.html)). My friend and I decided to make a magic mirror to go in my room, so we bought all of the materials and programmed it all from scratch. This repository contains all of the code for it.

This software is specifically designed for Raspberry Pi and has a few dependencies. 

### There are many things that it can do:
* Listen to commands and respond with a loud voice
* Play music from Spotify (requies Spotify premium)
* Control everything from a companion app

### It also has many voice commands:
* Tell you the time 
   * Okay mirror, what time is it?
* Tell you the date
   * Okay mirror, what is the date?
* Control your music (from Spotify)
   * Okay mirror, play music
   * Okay mirror, play throwback music
   * Okay mirror, play instrumental music
   * Okay mirror, play Xenogenesis by TheFatRat
   * Okay mirror, pause music
   * Okay mirror, next song
* Tell you the weather for the next seven days
   * Okay mirror, what will the weather be like tomorrow?
   * Okay mirror, what is the weather like today?
   * Okay mirror, what will the weather be like in 3 days?
   * Okay mirror, what will the weather be like on Sunday?
* Casual conversation
   * Okay mirror, what's up?

### It also has a lovely display:
![demo of display](https://i.imgur.com/3pE5aU2.png)

This display shows:
* Current news headlines from Hacker News and BBC News
* The time, date, and weather
* The current playing song, volume, and whether or not shuffle is on
* The current Bitcoin price (I also inserted a small widget to show my current Coinbase balance, as shown in the screenshot, but I did not include that in this repository.

## Dependencies
* Raspberry Pi running a linux based software (preferrably Raspbian)
* An external speaker and microphone hooked up to the Raspberry Pi (and configured)
* Apache webserver with PHP capabilities
* [mopidy](http://mopidy.com) and [mopidy-spotify](https://github.com/mopidy/mopidy-spotify) installed 
* mopidy-spotify configured to use a premium Spotify account

## Needed API Keys (all free)
* http://api.openweathermap.org
* http://cleverbot.io
* http://newsapi.org

## Setup
* Configure `config.js` and `config.php`, insert API keys and your current city
* Move the contents of the folder to `/var/www/html/reflect`
* Configure the Raspberry Pi to open Chromium in kiosk incognito mode to http://localhost/reflect on bootup: `chromium-browser --kiosk --incognito http://localhost/reflect`
* Configure mopidy and mopidy-spotify to run on boot
* Give the file `volume` executable permissions: `chmod a+x ./volume`

## Usage
* The mirror is located on http://localhost/reflect
* The companion app is located under http://localhost/reflect/app
   * If you want to use the companion app, find your Raspberry Pi's local IP address and use that in place of `localhost` in your mobile browser. For iOS, you can click the button at the bottom to add it to your homescreen. It will look like this:

![demo of companion app on home screen](https://i.imgur.com/0k1FXQ6.jpg)
And when you click it, it should look like so:
![demo of companion app](https://i.imgur.com/O4XRpe3.png)

## Questions
Please feel free to contact me if you have any questions!