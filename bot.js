var tracery = require('tracery-grammar');

var rawGrammar = 
{
    "origin": ["#alien#"],
    "alien": ["A #type# from Planet #planet# named #name# with #color# #accessory#. Your new friend #reaction#"],
    "type":["#first##second##third#"],
    "planet":["#first##second##third#"],
    "first":["Alp","Bet","Cep","Dek","Egl","Fer","Gar","Hob","Ick","Jen","Kip","Lem","Mar","Noz","Opl","Ply","Qu","Rin","Seb","Try","Ulm","Var","Wen","Xeth","Yew","Zen"],
    "second":["abi","ate","ake","apa","ana","anu","atu","abu","eti","ebi","ebu","emu","ema","eke","era","eri","iti","ina","ine","isa","ive","ivi","ide","opa","opo","obi","oba","ome","omi","oma", "ola","ole","oli","oru","ora","ume","uma","upo","ubi","uba","uze","uzi","ugo","uga","ushe","usha","usho"],
    "third":["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"],
    "name":["#first##second##third#"],
    "color":["red","orange","yellow","green","blue","purple","white","black","silver","gold"],
    "accessory":["spots","eyeballs","spikes","tentacles","paws","claws","stripes","bumps","wings","horns"],
    "reaction":["looks at you silently.","likes curling up with a book.","trusts you completely.","has your back.","winks at you.","is always happy to see you.","knows just how to cheer you up.","makes the best breakfast.","loves watching movies.","loves going on adventures.","is the funniest being you know."]
}

var processedGrammar = tracery.createGrammar(rawGrammar);

var tweet = processedGrammar.flatten("#origin#");
console.log(tweet);

var Twit = require('twit');


var T = new Twit(
{
    consumer_key:         process.env.CONSUMER_KEY
  , consumer_secret:      process.env.CONSUMER_SECRET
  , access_token:         process.env.ACCESS_TOKEN
  , access_token_secret:  process.env.ACCESS_TOKEN_SECRET
}
);

T.post('statuses/update', { status: tweet }, function(err, data, response) {  console.log(err)})