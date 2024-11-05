import { IconProps } from "../icons.tsx";

const Code = ({ color = "#000000" }: IconProps) => (
  <svg
    width="100%"
    stroke-width="2.3"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 6L10 18.5"
      stroke={color}
      stroke-width="2.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
    </path>
    <path
      d="M6.5 8.5L3 12L6.5 15.5"
      stroke={color}
      stroke-width="2.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
    </path>
    <path
      d="M17.5 8.5L21 12L17.5 15.5"
      stroke={color}
      stroke-width="2.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
    </path>
  </svg>
);

export default Code;
