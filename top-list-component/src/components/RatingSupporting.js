import React, { useCallback, useEffect, useState } from "react";
import Stack from "react-bootstrap/esm/Stack";

export default function RatingSupporting({
  ctBrandrating,
  ctUniquesellingpoints,
}) {
  const star = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9361 1.73963L8.22468 7.2372L2.15824 8.12163C1.07035 8.27942 0.634368 9.6206 1.4233 10.3888L5.81222 14.6656L4.77416 20.7071C4.58731 21.7991 5.73748 22.6171 6.7008 22.1064L12.1278 19.2538L17.5548 22.1064C18.5181 22.613 19.6683 21.7991 19.4814 20.7071L18.4434 14.6656L22.8323 10.3888C23.6212 9.6206 23.1852 8.27942 22.0973 8.12163L16.0309 7.2372L13.3195 1.73963C12.8337 0.759696 11.4261 0.747239 10.9361 1.73963Z" fill="#191919"/>
<mask id="mask0_230_1274" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="23" height="22">
<path d="M10.9361 1.73963L8.22468 7.2372L2.15824 8.12163C1.07035 8.27942 0.634368 9.6206 1.4233 10.3888L5.81222 14.6656L4.77416 20.7071C4.58731 21.7991 5.73748 22.6171 6.7008 22.1064L12.1278 19.2538L17.5548 22.1064C18.5181 22.613 19.6683 21.7991 19.4814 20.7071L18.4434 14.6656L22.8323 10.3888C23.6212 9.6206 23.1852 8.27942 22.0973 8.12163L16.0309 7.2372L13.3195 1.73963C12.8337 0.759696 11.4261 0.747239 10.9361 1.73963Z" fill="white"/>
</mask>
<g mask="url(#mask0_230_1274)">
<rect width="24" height="24" fill="#191919"/>
<rect width="24" height="24" fill="white"/>
<rect width="24" height="24" fill="#E38527"/>
</g>
</svg>
`;
  const halfStar = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0803 7.23668L22.158 8.12152C23.2479 8.27931 23.6847 9.62049 22.8941 10.3887L18.4965 14.6646L19.5358 20.7057C19.6836 21.569 18.9935 22.2587 18.2212 22.2587C18.0173 22.2587 17.8072 22.2105 17.6054 22.1046L12.1685 19.252L6.7311 22.1038C6.52889 22.2109 6.31837 22.2595 6.11366 22.2595C5.34217 22.2595 4.65332 21.5673 4.80114 20.7045L5.84169 14.6638L1.44487 10.387C0.654699 9.61882 1.09152 8.27806 2.18148 8.12028L8.25954 7.23626L10.9764 1.73952C11.2213 1.24498 11.6943 1 12.1676 1C12.6439 1 13.1202 1.2483 13.3643 1.73952L16.0803 7.23668ZM16.3506 13.9687L17.103 13.2371L20.5348 9.89952L15.7917 9.209L14.7532 9.05785L14.289 8.1182L12.1701 3.82934L12.1689 16.9999L13.0982 17.4873L17.3389 19.7125L16.5283 15.0018L16.3506 13.9687Z" fill="#191919"/>
<mask id="mask0_230_1273" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="23" height="22">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0803 7.23668L22.158 8.12152C23.2479 8.27931 23.6847 9.62049 22.8941 10.3887L18.4965 14.6646L19.5358 20.7057C19.6836 21.569 18.9935 22.2587 18.2212 22.2587C18.0173 22.2587 17.8072 22.2105 17.6054 22.1046L12.1685 19.252L6.7311 22.1038C6.52889 22.2109 6.31837 22.2595 6.11366 22.2595C5.34217 22.2595 4.65332 21.5673 4.80114 20.7045L5.84169 14.6638L1.44487 10.387C0.654699 9.61882 1.09152 8.27806 2.18148 8.12028L8.25954 7.23626L10.9764 1.73952C11.2213 1.24498 11.6943 1 12.1676 1C12.6439 1 13.1202 1.2483 13.3643 1.73952L16.0803 7.23668ZM16.3506 13.9687L17.103 13.2371L20.5348 9.89952L15.7917 9.209L14.7532 9.05785L14.289 8.1182L12.1701 3.82934L12.1689 16.9999L13.0982 17.4873L17.3389 19.7125L16.5283 15.0018L16.3506 13.9687Z" fill="white"/>
</mask>
<g mask="url(#mask0_230_1273)">
<rect width="24" height="24" fill="#191919"/>
<rect width="24" height="24" fill="white"/>
<rect width="24" height="24" fill="#E38527"/>
</g>
</svg>
`;

  //Logic for dynamic rating generation
  //I am using the useCallback to avoid double rendering
  const handleRating = useCallback(
    async (rating) => {
      let stars = "";
      if (Number.isInteger(rating)) {
        for (let i = 1; i <= rating; i++) {
          stars += star;
        }
      } else {
        for (let i = 1; i <= Math.floor(rating); i++) {
          stars += star;
          if (i == Math.floor(rating)) {
            stars += halfStar;
          }
        }
      }

      document.getElementById("brandRating").innerHTML = stars;
    },
    [ctBrandrating]
  );

  const handlePoints = (sellingPoints) => {
    document.getElementById("points").innerHTML = sellingPoints;
  };

  //calling the functions to generate de dynamic data inside a use effect to avoid weird behaviour on non mounted components
  useEffect(() => {
    handleRating(ctBrandrating);
    handlePoints(ctUniquesellingpoints);
  }, [handleRating]);

  return (
    <Stack>
      <div className="spacer-sm"></div>
      <div>
        <p className="secondary-font secondary-color tiny">
          <span id="brandRating" className="rating"></span>Read Review
        </p>
        <div className="spacer-sm"></div>
        <span id="points" className="pointsList"></span>
      </div>
    </Stack>
  );
}
