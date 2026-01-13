const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video text-justify pt-[20%] px-24 absolute z-8 text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="pt-5 w-1/2">{overview}</p>
      <div className="flex gap-10 pt-5">
        <button className="bg-white text-black px-12 py-4 rounded-md text-xl hover:bg-white/80">
          Play
        </button>
        <button className="bg-gray-500 text-white px-12 py-4 rounded-md text-xl">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
