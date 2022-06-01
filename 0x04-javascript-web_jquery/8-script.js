$.get('https://swapi-api.hbtn.io/api/films/?format=json', (films) => 
    films.results.forEach((film) => {
      $('#list_movies').append(`<li> ${film.title} </li>`);
    })
);
