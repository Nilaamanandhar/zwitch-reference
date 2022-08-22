import React, { useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
// import demoAudio from "../audio/anthony-brown-what-to-expect-in-the-cook-islands-as-a-visitor";

export default function LevelTwoSubOne() {
  return (
    <div className="container">
      <h1>Hello, audio player!</h1>
      <AudioPlayer
        autoPlay
        src="https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3"
      />
    </div>
  );
}
