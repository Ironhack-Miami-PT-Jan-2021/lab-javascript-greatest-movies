// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  //     let mappedArray = movies.map((eachMovie) => {
  //         return eachMovie.director;
  //     });
  //   return mappedArray;

  return movies.map((eachMovie) => eachMovie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
  return arr.filter(
    (eachMovie) =>
      eachMovie.director === "Steven Spielberg" &&
      eachMovie.genre.includes("Drama")
  ).length;
  //   const spielbergDramas = spielbergMovies.filter((eachMovie) => {
  //     return eachMovie.genre.includes("Drama");
  //   });
  //   return spielbergDramas.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  const movieReviews = movies.reduce((acc, val) => {
    return acc + (val.rate || 0);
  }, 0);
  const reviewAvg = (movieReviews / movies.length).toFixed(2);
  return Number(reviewAvg) || 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  return ratesAverage(
    movies.filter(function (movie) {
      return movie.genre.includes("Drama");
    })
  );
  //   const dramas = movies.filter(function (movie) {
  //     return movie.genre.includes("Drama");
  //   });
  //   const avgDramas = ratesAverage(dramas);
  //   return avgDramas;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesCopy = movies.map((a) => a);
  moviesCopy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  //   const titleArray = [];
  //   for (const movie of movies) {
  //     titleArray.push(movie.title);
  //   }
  const titleArray = movies.map((movie) => movie.title);
  titleArray.sort((a, b) => a.localeCompare(b));
  return titleArray.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
