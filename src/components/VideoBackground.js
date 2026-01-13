import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies.trailerVideo);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?&autoplay=1&mute=1&controls=0&showinfo=0"
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
