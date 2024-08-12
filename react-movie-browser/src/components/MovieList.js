import React, { useRef, useState } from 'react';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';

function MovieList() {
  //   const movies = [];
  const [movies, setMovies] = useState([]);
  const searchRef = useRef();
  const apiKey = 'aa9e49f';

  //   function fetchMovies() {}
  const fetchMovies = (searchTerm) => {
    const url = `https://omdbapi.com?apikey=${apiKey}&s=${searchTerm}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        // movies = data.Search;
        setMovies(data.Search ? data.Search : []);
        console.log('movies assigned');
      })
      .catch((error) => {
        setMovies([]);
      });
  };

  const moviesJsx = movies.map((m) => <MovieCard key={m.imdbID} movie={m} />);

  const submitHandler = (e) => {
    e.preventDefault();
    const searchTerm = searchRef.current.value;
    if (!searchTerm) return;

    fetchMovies(searchTerm);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          ref={searchRef}
          type='search'
          className='form-control mb-4'
          autoFocus
        />
      </form>
      <div className='row'>{moviesJsx}</div>
    </>
  );
}

export default MovieList;
