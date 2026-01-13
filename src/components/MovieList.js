import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="text-2xl text-white font-semibold py-3">{title}</h1>
      <div>
        <div className="flex overflow-x-scroll gap-4 scrollbar-hide">
          {movies &&
            movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
