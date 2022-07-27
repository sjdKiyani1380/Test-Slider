import React from "react";
import {
  Li,
  SliderContainer,
  TitleSlider,
  SearchIcon,
  DocumentIcon,
  AccountIcon,
  AccountDocumentIcon,
  LiStar,
  StarIconFill,
  StarIcon,
  UlStarIcon,
  ImgLogo,
  ContainerLogo,
  DivUlStarIcon,
} from "./sliderElement";

const Slider = () => {
  return (
    <div>
      <ContainerLogo>
        <ImgLogo src="images/logo.png" />
        <svg
          id="edtQ8ayzCDA1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 280"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
        >
          <path
            d="M0,0.013774v299.931685h300L299.176352,0.066906c0,0-69.217706,223.733646-150,223.626438C68.51818,223.586301,0,0.013774,0,0.013774Z"
            transform="matrix(1 0 0 1.000405 0.823648-.066938)"
            fill="#00f"
            stroke="#3f5787"
            stroke-width="0.6"
          />
        </svg>
      </ContainerLogo>
      <SliderContainer>
        <TitleSlider>املاک هاشمی نسب</TitleSlider>
        <DivUlStarIcon>
          <UlStarIcon>
            <LiStar>
              <StarIconFill />
            </LiStar>

            <LiStar>
              <StarIconFill />
            </LiStar>
            <LiStar>
              <StarIconFill />
            </LiStar>

            <LiStar>
              <StarIcon />
            </LiStar>

            <LiStar>
              <StarIcon />
            </LiStar>
          </UlStarIcon>
        </DivUlStarIcon>
        <ul>
          <Li>
            <a href="google.com">چست و چو</a>
            <span></span>
            <SearchIcon />
          </Li>
          <Li>
            <a href="google.com">آگهی های من </a>
            <span></span>
            <DocumentIcon />
          </Li>
          <Li>
            <a href="google.com"> نماینده ها</a>
            <span></span>
            <AccountDocumentIcon />
          </Li>
          <Li>
            <a href="google.com">
              پروفایل
            </a>

            <span></span>
            <AccountIcon />
          </Li>
        </ul>
      </SliderContainer>
    </div>
  );
};

export default Slider;
