import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const RouletteIcon = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <Box marginLeft="4px">
      <svg
        version="1.1"
        id="Icons"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 32 32"
        xmlSpace="preserve"
        fill="#D7AB74"
        width={isMobile ? "44px" : "50px"}
        height={isMobile ? "44px" : "50px"}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <style type="text/css">
            {`
        .st0 {
          fill: none;
          stroke: #D7AB74;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        }
      `}
          </style>
          <circle className="st0" cx="16" cy="16" r="9"></circle>
          <circle className="st0" cx="16" cy="16" r="14"></circle>
          <line className="st0" x1="16" y1="2" x2="16" y2="7"></line>
          <line className="st0" x1="10.6" y1="3.1" x2="12.6" y2="7.7"></line>
          <line className="st0" x1="6.1" y1="6.1" x2="9.6" y2="9.6"></line>
          <line className="st0" x1="3.1" y1="10.6" x2="7.7" y2="12.6"></line>
          <line className="st0" x1="2" y1="16" x2="7" y2="16"></line>
          <line className="st0" x1="3.1" y1="21.4" x2="7.7" y2="19.4"></line>
          <line className="st0" x1="6.1" y1="25.9" x2="9.6" y2="22.4"></line>
          <line className="st0" x1="10.6" y1="28.9" x2="12.6" y2="24.3"></line>
          <line className="st0" x1="16" y1="30" x2="16" y2="25"></line>
          <line className="st0" x1="21.4" y1="28.9" x2="19.4" y2="24.3"></line>
          <line className="st0" x1="25.9" y1="25.9" x2="22.4" y2="22.4"></line>
          <line className="st0" x1="28.9" y1="21.4" x2="24.3" y2="19.4"></line>
          <line className="st0" x1="30" y1="16" x2="25" y2="16"></line>
          <line className="st0" x1="28.9" y1="10.6" x2="24.3" y2="12.6"></line>
          <line className="st0" x1="25.9" y1="6.1" x2="22.4" y2="9.6"></line>
          <line className="st0" x1="21.4" y1="3.1" x2="19.4" y2="7.7"></line>
          <circle className="st0" cx="16" cy="11" r="1"></circle>
          <circle className="st0" cx="16" cy="16" r="1"></circle>
          <circle className="st0" cx="21" cy="16" r="1"></circle>
          <circle className="st0" cx="11" cy="16" r="1"></circle>
          <circle className="st0" cx="16" cy="21" r="1"></circle>
          <line className="st0" x1="11" y1="16" x2="21" y2="16"></line>
          <line className="st0" x1="16" y1="21" x2="16" y2="11"></line>
        </g>
      </svg>
    </Box>
  );
};

export default RouletteIcon;
