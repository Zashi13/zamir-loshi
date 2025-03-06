import React, { useState, useEffect } from 'react';
import Logo from "../assets/Logo.png";
import "../css/portfolioGrid.css";

// Dynamically require images and videos from the specified folder
const importMedia = () => {
  const context = require.context('../assets/portfolio', false, /\.(jpg|jpeg|JPG|JPEG|png|mp4|MP4)$/); // Adjust the file types as needed
  const media = context.keys()
    .sort() // Sort filenames alphabetically
    .reverse()
    .map((item) => context(item)); // Map the sorted filenames to their actual media paths
    console.log(media)
  return media;
};

const PortfolioGrid = () => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMedia = async () => {
      const media = importMedia(); // Import media
      setMediaFiles(media);
      // Ensure spinner is shown for at least 1 second
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    loadMedia();
  }, []);

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <div className="media-grid-container">
      {isLoading && (
        <div className="loading-spinner-overlay">
          <img src={Logo} id="loadingSpinner" ariaLabel="loading"/>
        </div>
      )}
      <div className={`media-grid ${isLoading ? "blurred" : ""}`}>
        {mediaFiles.map((file, index) => {
          const isVideo = /\.(mp4|webm)$/i.test(file);

          return isVideo ? (
            
            <video autoPlay muted loop playsInline controls={!isMobile} preload="metadata" key={index} className="portfolioVideo">
              <source src={file} type={`video/${file.split('.').pop()}`} />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img key={index} className="portfolioImg" src={file} alt={`media-${index}`} />
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioGrid;
