import CloseIcon from "@mui/icons-material/Close";

const AboutVideo = ({ openVideo, handleVideo }) => {
  return (
    <div
      className={`${
        openVideo
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } fixed inset-0 z-[100] about-video-bg transition-all duration-200 ease-linear w-full h-full`}
      onClick={() => handleVideo(false)}
    >
      <div className="flex flex-center h-full w-full px-8">
        <iframe
          className="w-full cLg:w-[940px] h-[280px] xs:h-[528px] object-cover"
          src="https://www.youtube.com/embed/XiA6cGnSPoM?si=f6eNEgTOZ8LpPcQ2"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div
          onClick={() => handleVideo(false)}
          className="absolute text-white top-[10px] right-[10px] opacity-70 transition-all duration-200 ease-linear hover:opacity-100 cursor-pointer p-3 z-[110]"
        >
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};

export default AboutVideo;
