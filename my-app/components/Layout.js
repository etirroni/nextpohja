import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden -z-1">
      <div className="absolute inset-0 -z-1">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bgbg.mp4" type="video/mp4" />
          {/* Add additional source tags for other video formats if needed */}
        </video>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default Layout;