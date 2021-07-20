// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result =  movies.map(({director})=> director);
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
 const movies2 = movies.slice();
 movies2.sort(function(a,b){
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
    const movies2 = movies.slice();
    movies2.sort(function(a,b) {
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
  return movies2;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies,genre){
  const movies2 = movies.map(movie => ({ ...movie }));
  const genrefiltered = movies2.filter(movie => movie.genre == genre);
  const genrescorefiltered = genrefiltered.filter(movie => movie.score != isNaN(movie.score));
  let total = genrescorefiltered.length;
  let genreAverage = genrescorefiltered.reduce(function(acc,obj){
    return (obj.score + acc);
  },0);
  return parseFloat((genreAverage/total).toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  const movies2 = movies.map(movie => ({ ...movie }));
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