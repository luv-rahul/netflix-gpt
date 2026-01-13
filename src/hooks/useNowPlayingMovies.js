import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovie = async (params) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=in-IN&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};
