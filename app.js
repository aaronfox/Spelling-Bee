const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var Dictionary = require("oxford-dictionary");
  
var config = {
    //TODO: use process.env here
   app_id : "af50e942",
   app_key : "187501834b1d4b2f750af346417a57da",
   source_lang : "en"
};

var testWords = ["cat", "dog", "mouse", "hello"];


dict = new Dictionary(config);


var word = 'no';

function logWord(dict_word) {
    var lookup = dict.find(dict_word);
    lookup.then(function(res) {
        //    console.log(res);
        //    console.log(JSON.stringify(res.results[0].lexicalEntries));
            word = JSON.stringify(res.results[0].lexicalEntries);
                JSONWord = JSON.parse(word);
                console.log('JSONWord ==');
        // Use JSONWord[0].entries[0].senses[0].definitions to extract the first definition of a word
                console.log(JSONWord[0].entries[0].senses[0].definitions);
        definition = JSONWord[0].entries[0].senses[0].definitions;
        pronunciation = JSONWord[0].pronunciations[0].audioFile;
        wordObject = {definition: definition, 
                    pronunciation: pronunciation};
        console.log(pronunciation);
        //    console.log("word!!");
        //    console.log(word);
            app.post('/myaction', function(req, res) {
        //    res.send('You sent the name "' + req.body.name + word + '".');
        //    console.log(testWords[Math.floor(Math.random()*testWords.length)]);
            // lookupWord is a random word word from the word bank array
            lookupWord = testWords[Math.floor(Math.random()*testWords.length)];
            logWord(lookupWord);
            res.render('pages/index', {
                wordObject: wordObject
            });

        });
        
  },
  function(err) {
      console.log(err);
  });
};
logWord("cool");

/* hmmm */

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/* end hmm */

app.get('/', function(req, res) {
res.render('pages/index', {
    wordObject: wordObject
});
    });

//app.post('/myaction', function(req, res) {
//res.send('You sent the name "' + req.body.name + '".');
//
//});

app.listen(3000, () => console.log('App is listening on port 3000!'))



