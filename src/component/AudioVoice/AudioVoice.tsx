import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function AudioVoice() {
  return (
    <div>
      <AudioPlayer
        style={{ display: "none" }}
        autoPlay
        src="https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3"
      />
    </div>
  );
}
