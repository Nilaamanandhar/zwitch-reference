import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

type audioVoiceType = {
  url: string;
};
export default function AudioVoice(props: audioVoiceType) {
  return (
    <div>
      <AudioPlayer style={{ display: "none" }} autoPlay src={props.url} />
    </div>
  );
}
