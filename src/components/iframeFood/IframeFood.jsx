// Import necessary hooks and utilities from React and additional libraries
import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useWindowSize } from '../utils/utility';

// Define the IframeFood component
const IframeFood = () => {
  // State to manage the display of the iframe animation
  const [showAnimation, setShowAnimation] = useState(false);
  // Use media query to detect if the device is desktop or laptop based on the width
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 700px)' });
  // Reference for the iframe element for direct DOM manipulation if necessary
  const pageRef = useRef(null);
  // Utilize custom hook to obtain window size for dynamic styling
  const size = useWindowSize();
  // State to manage the source URL of the iframe
  const [src] = useState('/foodGallery/FoodGallery.htm');
  // State to track if the iframe content has loaded
  const [load, setLoad] = useState(false);

  // Effect hook to initialize component state based on device type
  useEffect(() => {
    // Show animation only on desktop or laptop devices
    if (isDesktopOrLaptop) {
      setShowAnimation(true);
    }

    // Set up an onload event listener for the iframe to update the load state
    const iframe = document.getElementById('food-iframe');
    if (iframe) {
      iframe.onload = () => setLoad(true);
    }
  }, [isDesktopOrLaptop]); // Dependency array to re-run the effect only when isDesktopOrLaptop changes

  // Render the component UI
  return (
    <>
      {showAnimation && (
        <div className="w-full h-full z-50">
          <iframe
            id="food-iframe"
            src={src}
            scrolling="yes"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; fullscreen"
            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 2, zIndex: -1 }}
            width="100%"
            ref={pageRef}
            height={size.height}
            onLoad={() => setLoad(true)} // Directly update load state on load
            loading="lazy"
          />
          <img className="w-28 mt-10 mb-10 ml-10" src="/img/logo.png" alt="Logo" />
          {isDesktopOrLaptop && (
            <p className="text-xl leading-normal ml-10">
              Check file IframeFood.jsx and model is in the MobileVersion.js
            </p>
          )}
          {!isDesktopOrLaptop && (
            <ToggleAnimationButton showAnimation={showAnimation} toggleAnimation={() => setShowAnimation(!showAnimation)} />
          )}
        </div>
      )}
      {!isDesktopOrLaptop && !showAnimation && (
        <MobileView toggleAnimation={() => setShowAnimation(!showAnimation)} />
      )}
    </>
  );
};

// Component to handle toggle animation button for mobile view
const ToggleAnimationButton = ({ showAnimation, toggleAnimation }) => (
  <button
    className={`h-20 flex items-center justify-end px-10 gap-4 ${showAnimation ? 'absolute right-0 top-5' : 'pt-10'}`}
    onClick={toggleAnimation}
  >
    {/* Animation toggle icon here */}
  </button>
);

// Mobile view component
const MobileView = ({ toggleAnimation }) => (
  <div className="h-[100vh] flex flex-col">
    <ToggleAnimationButton showAnimation={false} toggleAnimation={toggleAnimation} />
    {/* Content here */}
  </div>
);

export default IframeFood;
