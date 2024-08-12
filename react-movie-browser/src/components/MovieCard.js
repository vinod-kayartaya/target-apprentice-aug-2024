import { useState } from 'react';

function MovieCard({ movie }) {
  const [movieDetails, setMovieDetails] = useState({});
  const apiKey = 'aa9e49f';

  const fetchMovie = (imdbID) => {
    const url = `https://omdbapi.com?apikey=${apiKey}&i=${imdbID}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setMovieDetails(data);
      });
  };

  return (
    <>
      <div className='col-3'>
        <div className='card'>
          <img src={movie.Poster} className='card-img-top' alt={movie.Title} />
          <div className='card-body'>
            <h5 className='card-title'>{movie.Title}</h5>
            <p className='card-text'>
              {movie.Year} <br />
              {movie.Type}
            </p>
            <button
              className='btn btn-primary'
              onClick={() => fetchMovie(movie.imdbID)}
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
            >
              View details
            </button>
          </div>
        </div>
      </div>
      <div
        className='modal fade'
        tabIndex='-1'
        id='exampleModal'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                {movieDetails.Title} ({movieDetails.Year})
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <div className='row'>
                <div className='col-md-6'>
                  <img
                    src={movieDetails.Poster}
                    alt={movieDetails.Title}
                    className='img-fluid'
                  />
                </div>
                <div className='col-md-6'>
                  <table className='table'>
                    <tbody>
                      <tr>
                        <th>Plot</th>
                        <td>{movieDetails.Plot}</td>
                      </tr>
                      <tr>
                        <th>Actors</th>
                        <td>{movieDetails.Actors}</td>
                      </tr>
                      <tr>
                        <th>Director</th>
                        <td>{movieDetails.Director}</td>
                      </tr>
                      <tr>
                        <th>Writer</th>
                        <td>{movieDetails.Writer}</td>
                      </tr>
                      <tr>
                        <th>Language</th>
                        <td>{movieDetails.Language}</td>
                      </tr>
                      <tr>
                        <th>Runtime</th>
                        <td>{movieDetails.Runtime}</td>
                      </tr>
                      <tr>
                        <th>Metascore</th>
                        <td>{movieDetails.Metascore}</td>
                      </tr>
                      <tr>
                        <th>Type</th>
                        <td>{movieDetails.Type}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
