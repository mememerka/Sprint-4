// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result =  movies.map(({director})=> director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  return movies.filter(movies=>movies.director == director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies,director) {
let moviesdirector =  movies.filter(movies=>movies.director == director);
let total = moviesdirector.length;
let resultat = moviesdirector.reduce(function(acc,moviesdirector) {
  return (moviesdirector.score + acc); 
  },0);
  return parseFloat((resultat/total).toFixed(2));
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies){
 let movies2 = movies;
 let sorted = movies2.sort(function(a,b){
   //tolowercase
    if (a.title < b.title){
      return -1;
    }
    if (a.title > b.title){
      return 1;
    }
      return 0;
  });
  return movies2.map(({title})=>title).slice(0,20);
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
   movies.sort(function(a,b) {
    if (a.year > b.year){
      return 1;
    }
    if (a.year < b.year){
      return -1;
    }
    if (a.year == b.year){
      if (a.title > b.title){
        return 1;
      }
      if (a.title < b.title){
        return -1;
      }
      if (a.title == b.title){
        return 0;
      }
    }
  })
  return movies;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies,genre){
  let genrefiltered = movies.filter(movies=>movies.genre == genre);//.includes
  let total = genrefiltered.length;
  let genreAverage = movies.reduce(function(acc,genrefiltered) {
  return (genrefiltered.score + acc); 
},0);
  return parseFloat((genreAverage/total).toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let movies2 = movies
  let regex = /(\d+)/g;
  let duration;
  let time;

  for (movie of movies2){
    duration = movie.duration;
    time = duration.match(regex);
    if(!time[1]){
      time[1] = 0;
    }
    movie.duration = parseInt((parseInt(time[0])*60)+parseInt(time[1]));
  }
  return movies2;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies,year) {
  movies.filter(movies => movies.year == year);
  let bestmovie = movies[0]
  for (movie of movies){
    if (movie.score > bestmovie.score){
      bestmovie = movie;
    }
  }
  return [bestmovie];
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}