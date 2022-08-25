import React from "react";
import Stack from "react-bootstrap/Stack";

export default function Badge({ imgUrl }) {
  return (
    <Stack className="badge">
      <div
        className="image-container"
        style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "100%" }}
      ></div>
      <div className="elipse"></div>

      <div className="badgeIcon">
        <svg
          width="58"
          height="58"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1907_25514)">
            <rect x="4" width="50" height="50" rx="25" fill="#3A66D5" />
            <rect
              x="6"
              y="2"
              width="46"
              height="46"
              rx="23"
              stroke="white"
              stroke-width="4"
            />
          </g>
          <path
            d="M23.7188 29.3662H21.9922V26.5732H24.2773L25.0391 22.8281H21.9922V20.0225H25.6104L26.6133 15.0713H29.457L28.4541 20.0225H31.2598L32.2373 15.0713H35.1826L34.167 20.0225H35.9189V22.8281H33.5957L32.834 26.5732H35.9189V29.3662H32.2627L31.2598 34.3174H28.4287L29.4062 29.3662H26.5879L25.585 34.3174H22.7158L23.7188 29.3662ZM27.8955 22.8281L27.1465 26.5732H29.9648L30.7012 22.8281H27.8955Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_1907_25514"
              x="0"
              y="0"
              width="58"
              height="58"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1907_25514"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1907_25514"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </Stack>
  );
}
