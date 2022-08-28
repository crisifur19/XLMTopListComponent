import React, { useState } from "react";
import Stack from "react-bootstrap/esm/Stack";

export default function OfferButton({
  brandName,
  productGroup,
  offer,
  code,
  affiliateLink,
}) {
  const [btnColor, setBtnColor] = useState("code-button");

  return (
    <Stack>
      <h5 className="bold secondary-font primary-color">{`[${brandName}] // [${productGroup}]`}</h5>
      <h3 className="bold primary-font">{offer}</h3>
      <div className="spacer-xs"></div>
      <p className="secondary-font tiny">Terms &amp; Conditions Apply</p>
      <div className="spacer-sm"></div>
      <section className="dC">
        <button
          className={btnColor}
          onClick={() => setBtnColor("code-button-clicked")}
        >
          <ul>
            <li>
              <p className=" secondary-font small bold">{code}</p>
            </li>
            <li>
              <svg
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.5 0H6.5C5.4 0 4.5 0.9 4.5 2V16C4.5 17.1 5.4 18 6.5 18H16.5C17.6 18 18.5 17.1 18.5 16V2C18.5 0.9 17.6 0 16.5 0ZM2.5 4H0.5V20C0.5 21.1 1.4 22 2.5 22H14.5V20H2.5V4ZM6.5 16H16.5V2H6.5V16Z"
                />
              </svg>
            </li>
          </ul>
        </button>
      </section>
      <div className="spacer-xs"></div>
      <section className="dC">
        <button
          className="md-button secondary secondary-font"
          onClick={() => {
            window.location.assign(affiliateLink);
          }}
        >
          Visit Site
        </button>
      </section>
    </Stack>
  );
}
