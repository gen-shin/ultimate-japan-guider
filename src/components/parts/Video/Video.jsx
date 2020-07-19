import React from 'react';
import video from '../../../img/video.mp4';

const Video = () => {
  return (
    <div className="bg-video">
      <video autoPlay loop muted src={video} className="bg-video__content" />
    </div>
  );
};

export default Video;
