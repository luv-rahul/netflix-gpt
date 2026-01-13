import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute blur-sm">
        <img src={BACKGROUND_URL} alt="background"></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
