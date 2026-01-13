const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video text-justify pt-[20%] px-24 absolute z-8 text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="pt-5 w-1/2">{overview}</p>
      <div className="flex gap-10 pt-5">
        <button className="bg-[#B20710] text-white px-12 py-4 rounded-md text-xl hover:bg-[#221F1F] flex items-center">
          <span class="material-symbols-outlined">play_arrow</span>Play
        </button>
        <button className="bg-[#221F1F] text-white px-12 py-4 rounded-md text-xl flex items-center gap-1">
          <span class="material-symbols-outlined">info</span> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
