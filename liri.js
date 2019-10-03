require("dotenv").config();

var axios = require('axios');
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');

var spotifykey = new Spotify(keys.spotify);
var bandsKey = keys.bandskey.key;
var moviekey = keys.moviekey.key;

var command = process.argv[2];
var input = process.argv[3];

if (command === "concert-this") {
    var url = 'https://rest.bandsintown.com/artists/' + input + '/events?app_id=' + bandsKey;

    axios
        .get(url)
        .then(function(response) {
        console.log("axios response")
        console.log(response.data[0]);
        })
        .catch(function(error) {
            if(error) {
                console.log(error);
            }
        })
}

if (command === "spotify-this-song") {
    spotifykey.search({type: "track", query: input}, function(err, data) {
        if (err) {
            return console.log(err)
        }
        
        console.log(data);
    })
}

if (command === "movie-this") {
    var url = "https://www.omdbapi.com/?apikey=" + moviekey + "&t=" + input;

    axios
        .get(url)
        .then(function(response) {
            console.log(response);
        })
        .catch(function(err) {
            if(err) {
                console.log(err);
            }
        })

}

if (command === "do-what-it-says") {

}