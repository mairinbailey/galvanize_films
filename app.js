// var postEndpoint=

$(document).ready(function(){
//
// var $title = $("#title").val();
// var $genre = $("#genre").val();
// var $description = $("#description").val();
// var $url = $("url").val();
// var $rating = $("#rating").val();

$("#search").click(function(e){
  e.preventDefault();
  var movieName = $("#movie-name").val().toLowerCase().replace(/\s+/g, '+');
  localStorage.setItem('movie', movieName);
  window.location="movies.html";
  console.log(localStorage.getItem('movie'));
});
});

// return {
// title: form.find("#title").val();
// genre: form.find("#genre").val();
// description: form.find("#description").val()
//
// }

//
