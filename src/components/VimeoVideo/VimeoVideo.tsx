function VimeoVideo() {
  return (
    <div className="flex flex-col items-center  ">
      <div className="relative pb-[40%] w-full max-w-5xl">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://player.vimeo.com/video/1018723222"
          title="video mur-mur"
        ></iframe>
      </div>
    </div>
  );
}

export default VimeoVideo;
