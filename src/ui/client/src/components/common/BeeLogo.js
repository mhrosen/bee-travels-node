import React from "react";

const BeeLogo = ({ ...rest }) => (
  <svg
    {...rest}
    // width="1320px"
    width="930px"
    viewBox="0 0 1320 930"
    // className={className}
    // style={style}
  >
    {/* Body */}
    <path
      transform="translate(450 200)"
      fillRule="evenodd"
      // fill="rgb(238, 181, 13)"
      fill="#E3B602"
      d="M0.000,420.000 L420.000,420.000 L420.000,520.000 L0.000,520.000 L0.000,420.000 ZM0.000,220.000 L420.000,220.000 L420.000,310.000 L0.000,310.000 L0.000,220.000 ZM210.000,0.000 C289.776,0.000 359.161,44.484 394.706,110.000 L25.294,110.000 C60.839,44.484 130.224,0.000 210.000,0.000 ZM388.906,630.000 C351.938,689.998 285.645,730.000 210.000,730.000 C134.355,730.000 68.062,689.998 31.094,630.000 L388.906,630.000 Z"
    />

    {/* Left Wing */}
    <path
      transform="translate(0 280)"
      fillRule="evenodd"
      // fill="rgb(38, 146, 60)"
      fill="#27AA7C"
      d="M460.000,-0.000 L331.000,386.000 L330.532,386.045 C307.370,452.394 244.249,500.000 170.000,500.000 C76.112,500.000 0.000,423.888 0.000,330.000 C0.000,262.255 39.629,203.772 96.967,176.451 L97.000,176.000 L460.000,-0.000 Z"
    />

    {/* Left Wing */}
    <path
      transform="translate(860 280)"
      fillRule="evenodd"
      // fill="rgb(38, 146, 60)"
      fill="#27AA7C"
      d="M460.000,330.000 C460.000,423.888 383.888,500.000 290.000,500.000 C215.751,500.000 152.630,452.394 129.468,386.045 L129.000,386.000 L0.000,-0.000 L363.000,176.000 L363.033,176.451 C420.371,203.772 460.000,262.255 460.000,330.000 Z"
    />

    {/* Left Eye */}
    <path
      transform="translate(460 0)"
      fillRule="evenodd"
      // fill="rgb(247, 175, 187)"
      fill="#F7685E"
      d="M95.000,0.000 C147.467,0.000 190.000,42.533 190.000,95.000 C190.000,147.467 147.467,190.000 95.000,190.000 C42.533,190.000 0.000,147.467 0.000,95.000 C0.000,42.533 42.533,0.000 95.000,0.000 Z"
    />

    <path
      transform="translate(670 0)"
      fillRule="evenodd"
      // fill="rgb(247, 175, 187)"
      fill="#F7685E"
      d="M95.000,0.000 C147.467,0.000 190.000,42.533 190.000,95.000 C190.000,147.467 147.467,190.000 95.000,190.000 C42.533,190.000 0.000,147.467 0.000,95.000 C0.000,42.533 42.533,0.000 95.000,0.000 Z"
    />
  </svg>
);

export default BeeLogo;