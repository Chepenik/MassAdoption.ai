"use client"

import React from 'react';

interface VideoCardProps {
  title: string;
  src: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, src }) => (
  <div className="video-card">
    <div className="video-wrapper">
      <iframe
        width="560"
        height="315"
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

export default VideoCard;
