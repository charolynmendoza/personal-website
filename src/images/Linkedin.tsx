import React from "react";

interface Props {
  style?: any;
}

export const Linkedin = (props: Props) => {
  return (
    <svg
      style={props.style}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM15 28.2C22.2902 28.2 28.2 22.2902 28.2 15C28.2 7.70984 22.2902 1.8 15 1.8C7.70984 1.8 1.8 7.70984 1.8 15C1.8 22.2902 7.70984 28.2 15 28.2ZM8.4 12.0708V20.7949H11.2261V12.0708H8.4ZM9.99882 7.8C9.03204 7.8 8.4 8.45152 8.4 9.30691C8.4 10.1446 9.01336 10.8149 9.96213 10.8149H9.98019C10.9656 10.8149 11.5793 10.1446 11.5793 9.30691C11.561 8.45152 10.9656 7.8 9.99882 7.8ZM18.3462 12.0708C16.8457 12.0708 16.1739 12.9176 15.7988 13.5116V12.2759H12.9725C13.0097 13.0945 12.9725 21 12.9725 21H15.7988V16.1278C15.7988 15.867 15.8172 15.6069 15.8919 15.4202C16.0962 14.8994 16.5612 14.3601 17.342 14.3601C18.365 14.3601 18.774 15.16 18.774 16.3324V20.9998H21.5999L21.6 15.9976C21.6 13.318 20.2058 12.0708 18.3462 12.0708Z"
        fill="#FDFFFC"
      />
    </svg>
  );
};
