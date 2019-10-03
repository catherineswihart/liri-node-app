console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.bandskey = {
    key: process.env.BANDS_KEY,
}

exports.moviekey = {
    key: process.env.MOVIE_KEY,
}