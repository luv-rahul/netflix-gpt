import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div>
      <form className="p-40 flex items-center mx-auto justify-center z-9 relative">
        <input
          className="px-4 m-4 border-2 h-10 w-[50%] rounded-sm"
          type="text"
          placeholder={lang[`${langKey}`].gptSearchPlaceholder}
          autoFocus
        ></input>
        <button className="flex items-center bg-[#B20710] text-white px-4 py-2 rounded-sm">
          <span class="material-symbols-outlined">search</span>
          {lang[`${langKey}`].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
