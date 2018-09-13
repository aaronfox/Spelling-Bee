//var app = require('../../app');

var player_one_score = 0;
var player_two_score = 0;
var curr_player = 1;
$(document).ready(function() {
    $("#check_spelling").click(function(){
        console.log("word == ");
        console.log()
        word = $("#secret-entry-word").text();
        spelling_attempt = $("#spelling_attempt").val();
        console.log(spelling_attempt);
        if(word.valueOf().toLowerCase() == spelling_attempt.valueOf().toLowerCase()) {
            if(curr_player == 1) {
                player_one_score++;
                curr_player = 2;
            } else {
                player_two_score++;
                curr_player = 1;
            }
            console.log(player_one_score);
                        console.log(player_two_score);
        } else {
            if(curr_player == 1) {
                curr_player = 2;
            } else {
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
