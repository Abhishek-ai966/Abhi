import React from 'react';
import VideoCard from './VideoCard';

const VideoList = () => {
  const sampleVideos = [
    { thumbnail: 'thumbnail1.jpg', title: 'Video 1', description: 'Description 1' },
    { thumbnail: 'thumbnail2.jpg', title: 'Video 2', description: 'Description 2' },
    { thumbnail: 'thumbnail3.jpg', title: 'Video 3', description: 'Description 3' },
    { thumbnail: 'thumbnail1.jpg', title: 'Video 1', description: 'Description 1' },
    { thumbnail: 'thumbnail2.jpg', title: 'Video 2', description: 'Description 2' },
    { thumbnail: 'thumbnail3.jpg', title: 'Video 3', description: 'Description 3' },{ thumbnail: 'thumbnail1.jpg', title: 'Video 1', description: 'Description 1' },
    { thumbnail: 'thumbnail2.jpg', title: 'Video 2', description: 'Description 2' },
    { thumbnail: 'thumbnail3.jpg', title: 'Video 3', description: 'Description 3' },{ thumbnail: 'thumbnail1.jpg', title: 'Video 1', description: 'Description 1' },
    { thumbnail: 'thumbnail2.jpg', title: 'Video 2', description: 'Description 2' },
    { thumbnail: 'thumbnail3.jpg', title: 'Video 3', description: 'Description 3' },
  ];

  return (
    <div className="d-flex flex-wrap">
      {sampleVideos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
