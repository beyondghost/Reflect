document.addEventListener('ontouchstart', function(e) {e.preventDefault()}, false);
document.addEventListener('ontouchmove', function(e) {e.preventDefault()}, false);

$("#custome-one").click(function() {
	// custom button code here
	alert("You clicked custom button #1!");
});

$("#custom-two").click(function() {
	// custom button code here
	alert("You clicked custom button #2!");
});

$("#pause").click(function() {
	musicControl("pause");
});

$("#previous").click(function() {
	musicControl("previous");
});

$("#next").click(function() {
	musicControl("next");
});

$("#music-favorites").click(function() {
	musicControl("play music");
});

$("#music-top50").click(function() {
	musicControl("top50");
});

$("#music-party").click(function() {
	musicControl("party");
});

$("#music-instrumental").click(function() {
	musicControl("instrumental");
});

$("#music-throwback").click(function() {
	musicControl("throwback");
});

$("#music-custom").click(function() {
	$("#music-custom-menu").css("display", "block");
});

$("#music-custom-menu-container > div").click(function() {
	musicControl("play " + $("#music-custom-menu-container > input").val());
	$("#music-custom-menu-container > input").val("");
	$("#music-custom-menu").css("display", "none");
});

$("#music-custom-menu-container > input").keyup(function(e) {
	if (e.which == 13) {
		musicControl("play " + $("#music-custom-menu-container > input").val());
		$("#music-custom-menu-container > input").val("");
		$("#music-custom-menu").css("display", "none");
	}
});

$("#volume-up").click(function() {
	musicControl("turn up");
});

$("#volume-down").click(function() {
	musicControl("turn down");
});

function musicControl(arg) {
  $.post('../music/music.php', { input: arg } );
}