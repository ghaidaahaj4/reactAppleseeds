import React, { useRef } from "react";

function VideoPlayer() {
  // Create a reference for the video element
  const videoRef = useRef(null);

  // Function to play the video
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  // Function to pause the video
  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div>
      {/* Video element */}
      <video ref={videoRef} width="600" controls>
        <source src="./myVedio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play and Pause buttons */}
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
}

export default VideoPlayer;
