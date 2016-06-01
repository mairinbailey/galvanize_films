$(document).ready(function(){
  var movieName = localStorage.getItem('movie')
  console.log(movieName);
  $.get("https://api.themoviedb.org/3/search/movie?query=" + movieName + "&api_key=9494e38616d5ee7257d62b0e5ac17d63").done(function(data){
    console.log(data);
    var movieTitle = data.results[0].title;
    var movieOverview=data.results[0].overview;
    var moviePosterPath=data.results[0].poster_path;

    console.log(movieTitle);
    console.log(movieOverview);
    console.log(moviePosterPath);

    $(".movie").append("<p>" + movieTitle + "</p> <br> <p>" + movieOverview + "</p> <br> <img src= 'https://image.tmdb.org/t/p/w185"+ moviePosterPath +"'>");
  });
});
