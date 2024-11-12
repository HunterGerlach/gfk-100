import React from 'react';

type YouTubeProps = {
  videoId: string;
  width?: string;
  height?: string;
};

const YouTube: React.FC<YouTubeProps> = ({ videoId, width = "560", height = "315" }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?si=Xte0_iRAJhxgP_0z`;

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: '20px', 
      backgroundColor: '#f0f0f0', 
      borderRadius: '8px',
      marginBottom: '20px' // Add some space between the video and the next section
    }}>
      <iframe
        width={width}
        height={height}
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
};

export default YouTube;
