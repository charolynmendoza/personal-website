import React from "react";

interface Props {
  style?: any;
}

export const Dribbble = (props: Props) => {
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
        d="M15 0.46875C6.98742 0.46875 0.46875 6.98742 0.46875 15C0.46875 23.0126 6.98742 29.5312 15 29.5312C23.0126 29.5312 29.5312 23.0126 29.5312 15C29.5312 6.98742 23.0126 0.46875 15 0.46875ZM24.6076 7.16988C26.3363 9.28195 27.3831 11.9721 27.4104 14.9016C27.0012 14.8151 22.8977 13.9828 18.7678 14.5021C18.4307 13.6794 18.1126 12.9557 17.6769 12.0638C22.266 10.1902 24.3459 7.52385 24.6076 7.16988V7.16988ZM23.2278 5.73457C23.0046 6.05256 21.1362 8.56383 16.7227 10.2181C14.6887 6.48123 12.4345 3.41139 12.0914 2.95201C16.0275 2.0032 20.1754 3.02643 23.2278 5.73457V5.73457ZM9.72311 3.78633C10.0504 4.2351 12.2683 7.30875 14.3249 10.9646C8.519 12.5064 3.40535 12.4842 2.85023 12.4768C3.65508 8.62529 6.25066 5.4242 9.72311 3.78633ZM2.58809 15.0189C2.58809 14.892 2.59061 14.7657 2.59441 14.6396C3.13746 14.6508 9.15223 14.7283 15.3506 12.8733C15.7059 13.5687 16.0454 14.2746 16.3569 14.9797C11.8687 16.2438 7.79086 19.8738 5.77893 23.3179C3.79652 21.1175 2.58809 18.2068 2.58809 15.0189ZM7.38146 24.8107C8.67797 22.1603 12.1966 18.7391 17.2005 17.032C18.9431 21.5603 19.6638 25.3554 19.8483 26.4444C15.8574 28.1444 11.0584 27.678 7.38146 24.8107V24.8107ZM21.935 25.3081C21.8078 24.5531 21.1471 20.9196 19.5237 16.4585C23.4132 15.8359 26.8304 16.8551 27.255 16.9891C26.7018 20.4427 24.7195 23.4253 21.935 25.3081Z"
        fill="#FDFFFC"
      />
    </svg>
  );
};