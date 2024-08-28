import React from "react";

const Main = () => {
  const downloadFile = async () => {
    const videoUrl =
      "http://ondemandwebcast.niyamasabha.org/videos/kla_11072024/110724-Qstn-1-1.mp4"; 

    try {
      const response = await fetch(videoUrl);

      if (!response.ok) {
        throw new Error(
          Failed to download video: ${response.status} ${response.statusText}
        );
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "your_video_name.mp4"; // Set the desired video file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the file:", error.message);
    }
  };

  return (
    <div>
      <button onClick={downloadFile}>
        Download Video
      </button>
    </div>
  );
};

export  default  Main;