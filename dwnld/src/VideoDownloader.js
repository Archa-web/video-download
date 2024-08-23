import React from 'react';

const VideoDownloader = () => {
  const downloadVideo = () => {
    const videoUrl = 'http://ondemandwebcast.niyamasabha.org/videos/kla_11072024/110724-Qstn-1-1.mp4'; // Replace with your video URL
    const a = document.createElement('a');
    a.href = videoUrl;
    a.download = 'video.mp4'; // Specify the filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div>
      <button onClick={downloadVideo}>Download Video</button>
    </div>
  );
};
export default VideoDownloader;
