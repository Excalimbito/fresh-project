import { IconProps } from "../icons.tsx";

const SendMail = ({ color = "#000000" }: IconProps) => (
  <svg
    width="100%"
    viewBox="0 0 24 24"
    stroke-width="2.3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 9L13.5 12L18 9"
      stroke={color}
      stroke-width="2.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
    </path>
    <path
      d="M3 13.5H5"
      stroke={color}
      stroke-width="2.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
    </path>
    <path
      d="M1 10.5H5"
      stroke={color}
      stroke-width="2.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
    </path>
    <path
      d="M5 7.5V7C5 5.89543 5.89543 5 7 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H7C5.89543 19 5 18.1046 5 17V16.5"
      stroke={color}
      stroke-width="2.3"
      stroke-linecap="round"
    >
    </path>
  </svg>
);

export default SendMail;
