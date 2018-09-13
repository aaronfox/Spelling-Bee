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

var testWords =["Aardwolf","Aberration","Abridgment","Abscission","Acerbate","Aficionado","Algorithm","Alignment","Allocution","Ancillary","Apocalypse","Applique","Archetype","Avenge","Babushka","Baccalaureate","Balalaika","Baroque","Barracuda","Bayou","Beleaguer","Belligerence","Beret","Bivouac","Blithe","Boatswain","Bourgeois","Boutique","Boutonniere","Boysenberry","Buoy","Cabaret","Calisthenics","Callous","Camouflage","Cannoneer","Cantankerous","Cardiopulmonary","Carnivorous","Catastrophe","Celerity","Censer","Changeable","Chaparral","Commemorate","Committal","Connoisseur","Convalescence","Cornucopia","Corruptible","Crevasse","Croissant","Curmudgeon","Cynic","Dachshund","Decaffeinate","Deliverance","Denouement","Diaphragm","Dichotomy","Dietitian","Diphthong","Docile","Echo","Eclair","Eczema","Effervescent","Eloquence","Encumbrance","Exquisite","Extemporaneous","Facsimile","Fallacious","Fascinate","Fauna","Flocculent","Foliage","Forage","Forsythia","Fraught","Fuchsia","Gauche","Genre","Germane","Gerrymander","Glockenspiel","Gnash","Granary","Grippe","Guillotine","Hallelujah","Handwrought","Harebrained","Harpsichord","Haughty","Heir","Hemorrhage","Heterogeneous","Hoard","Holocaust","Homogenize","Homonym","Horde","Humoresque","Hydraulic","Hydrolysis","Hypothesis","Hysterical","Idyll","Iguana","Imperceptible","Impetuous","Impossible","Impromptu","Incidence","Indicator","Infallible","Inferior","Insurgence","Interfere","Invoice","Iridescent","Isle","Isthmus","Jackal","Jacuzzi","Joist","Juxtaposition","Kaiser","Kaleidoscope","Ketch","Knave","Knell","Knoll","Labyrinth","Laconic","Laggard","Lagoon","Laryngitis","Larynx","Lavender","Legionnaire","Leprechaun","Liege","Luau","Luscious","Lyre","Lymphatic","Mace","Magnanimous","Magnify","Malfeasance","Maneuver","Mantle","Marquee","Masquerade","Mature","Maul","Melee","Memento","Mercenary","Mesquite","Mettle","Minuscule","Mirage","Momentous","Monastery","Monocle","Morgue","Morphine","Mosque","Motif","Mousse","Mozzarella","Muenster","Municipal","Mysterious","Mystique","Naughty","Neuter","Nickel","Nickelodeon","Nomenclature","Nonchalant","Nonpareil","Noxious","Nuance","Nucleus","Nuisance","Nuptial","Nylons","Obnoxious","Obsolescent","Occurrence","Ocelot","Ogre","Onyx","Ophthalmology","Ordnance","Orphan","Oscillate","Overwrought","Oxygen","Pacifist","Palette","Palomino","Pamphlet","Pantomime","Papacy","Parable","Paralysis","Paraphernalia","Parishioner","Parochial","Parody","Parquet","Partition","Pasture","Patriarch","Patrician","Paunchy","Pause","Pavilion","Peak","Penchant","Penguin","Penicillin","Penitentiary","Perennial","Periphery","Perjury","Perseverance","Persuade","Peruse","Pesticide","Petition","Phalanx","Phenomenon","Philosopher","Phoenix","Physics","Picturesque","Peace","Pinnacle","Pinafore","Pixie","Placard","Placebo","Plaid","Plight","Plumber","Pneumonia","Poignant","Poinsettia","Politicize","Populous","Porridge","Posse","Posthumous","Potpourri","Practitioner","Prairie","Precise","Prerogative","Prestigious","Prey","Principle","Pronunciation","Psalm","Psychology","Purge","Quaff","Quandary","Quarantine","Questionnaire","Queue","Quiche","Quintessence","Rabble","Raffle","Rambunctious","Rancid","Raspberry","Ratchet","Rationale","Recede","Recluse","Reconnaissance","Rectify","Recurrence","Reggae","Rehearse","Reign","Rein","Remembrance","Reminiscence","Requisition","Rescind","Respondent","Resume","Resurrection","Revise","Rhapsodic","Rhetoric","Rhubarb","Right","Rigor","Rotor","Rouge","Roulette","Rubella","Sable","Sachet","Sacrilegious","Saffron","Salutatorian","Sanctimonious","Sapphire","Sarcasm","Satellite","Sauerkraut","Sauna","Scandalous","Scarab","Scenario","Scepter","Schizophrenia","Schnauzer","Sciatic","Scour","Scourge","Scrod","Scruple","Sculptor","Seance","Seclude","Seine","Semaphore","Sensuous","Separate","Sepulcher","Sequoia","Sergeant","Serial","Sew","Shackle","Sheathe","Sheen","Shrew","Shroud","Sierra","Silhouette","Simile","Simultaneous","Singe","Siphon","Skeptic","Skew","Slaughter","Sleigh","Sleight","Sleuth","Slough","Sojourn","Solder","Solemn","Sovereign","Spasm","Specter","Sponsor","Squabble","Squeak","Squint","Stationery","Stimulus","Strait","Straitjacket","Stroganoff","Suave","Subpoena","Subtle","Succinct","Sufficiency","Suite","Supersede","Supposition","Surety","Surrey","Surrogate","Surveillance","Swerve","Symposium","Synod","Synonym","Syntax","Tabernacle","Tableau","Tabular","Tachometer","Tacky","Tact","Taffy","Tail","Taint","Tally","Tambourine","Tandem","Tangible","Tantalize","Tapestry","Tassel","Taught","Taunt","Tawdry","Tea","Tee","Technique","Tedious","Teeter","Telegraph","Telepathy","Telephone","Temblor","Tempt","Tenor","Tense","Terrain","Terse","Tetanus","Thatch","Thermometer","Thesaurus","Thesis","Thigh","Thimble","Third","Thistle","Thorough","Thumb","Tier","Tinsel","Titanic","Titlist","Tobacco","Tongue","Tonsillectomy","Topaz","Torque","Tout","Toxicity","Traceable","Trachea","Trait","Tranquil","Transcend","Transient","Translucent","Trapeze","Trauma","Trestle","Trichotomy","Trivial","Trough","Troupe","Truancy","Tyrannize","Ulcer","Uncollectible","Unkempt","Vaccinal","Vague","Vaudeville","Vehemence","Veneer","Vengeance","Vermicelli","Victuals","Viscount","Vogue","Vying","Waive","Whack","Wheelwright","Wherever","Wince","Wrack","Wreak","Wren","Yeoman","Zeppelin","Zoological","Zucchini"];


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
        wordObject = {word: dict_word,
                      definition: definition, 
                    pronunciation: pronunciation};
        console.log(pronunciation);
        //    console.log("word!!");
        //    console.log(word);
            app.post('/nextWord', function(req, res) {
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
wordObject = {word: "test",
            definition: "Definitions will go here!", 
            pronunciation: "media/Recording.mp3"};

app.get('/', function(req, res) {
res.render('pages/index', {
    wordObject: wordObject
});
    });

//app.post('/nextWord', function(req, res) {
//res.send('You sent the name "' + req.body.name + '".');
//
//});

app.listen(3000, () => console.log('App is listening on port 3000!'))



