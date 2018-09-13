//var app = require('../../app');
// TODO: MAKE sire scores are kept consisent for each page rendering
var player_one_score = 0;
var player_two_score = 0;
var curr_player = 1;
$(document).ready(function() {
    $("#check_spelling").click(function(){
        $("#check_spelling").prop("disabled", true);
        console.log("word == ");
        console.log()
        word = $("#secret-entry-word").text();
        spelling_attempt = $("#spelling_attempt").val();
        console.log(word.valueOf().toLowerCase().trim());
        console.log(spelling_attempt.valueOf().toLowerCase());
        if(word.valueOf().toLowerCase().trim() == spelling_attempt.valueOf().toLowerCase().trim()) {
            if(curr_player == 1) {
                player_one_score++;
                $("#player_one_score").text(player_one_score);
                $("#spelling-alert").text("Player one spelled " + spelling_attempt.valueOf().toLowerCase().trim() + " correctly!");
                curr_player = 2;
            } else {
                player_two_score++;
                $("#player_two_score").text(player_two_score);
                $("#spelling-alert").text("Player two spelled " + spelling_attempt.valueOf().toLowerCase().trim() + " correctly!");
                curr_player = 1;
            }
            console.log(player_one_score);
                        console.log(player_two_score);
        } else {
            if(curr_player == 1) {
                $("#spelling-alert").text("Player one incorrectly spelled " + word.valueOf().toLowerCase().trim() + " as " + spelling_attempt.valueOf().toLowerCase().trim() + ". :(");
                curr_player = 2;
            } else {
                $("#spelling-alert").text("Player two incorrectly spelled " + word.valueOf().toLowerCase().trim() + " as " + spelling_attempt.valueOf().toLowerCase().trim() + ". :(");
                curr_player = 1;
            }
            console.log("you are wrong!");
            console.log(player_one_score);
            console.log(player_two_score);
        }
    });
});

//var rows = JSON.stringify(dict);
//console.log(rows);
