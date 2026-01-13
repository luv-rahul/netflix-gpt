import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-36 flex-shrink-0">
      <img
        src={IMAGE_CDN_URL + movie.poster_path}
        alt="movie-poster"
      ></img>
    </div>
  );
};

export default MovieCard;
