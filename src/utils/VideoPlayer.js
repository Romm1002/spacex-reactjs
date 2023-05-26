import YouTube from 'react-youtube'

const VideoPlayer = ({ videoId }) => {
  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onPlayerReady}
      />
    </div>
  );
};

export default VideoPlayer;