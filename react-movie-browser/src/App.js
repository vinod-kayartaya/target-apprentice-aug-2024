import './App.css';
import MovieList from './components/MovieList';
import RowColDemo from './components/RowColDemo';

function App() {
  return (
    <div className='container'>
      <h1 className='heading'>Search for movies</h1>
      <MovieList />
      {/* <RowColDemo /> */}
    </div>
  );
}

export default App;
