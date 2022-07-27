import styled from "styled-components";
import { ImSearch } from "react-icons/im";
import { CgFileDocument } from "react-icons/cg";
import { BsPersonCheckFill, BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

export const SliderContainer = styled.nav`
  background-color: rgb(0, 0, 255);
  padding: 10px 0;
  padding-bottom: 0;
  text-align: center;
  box-shadow: 0px -7px 0px 0px rgb(0,0,255);  
  @media screen and (max-width: 1000px) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 5px 0;
    
    > ul {
      display: flex;
      justify-content: space-around;
    }
  }
`;

export const ContainerLogo = styled.div`
  position: relative;
  @media screen and (max-width:1000px){
    display:none;
  }
`;

export const ImgLogo = styled.img`
    position: absolute;
    top: 0;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    left: 25%;

    @media screen and (max-width:1000px){
        display:none;
    }

`;

export const SearchIcon = styled(ImSearch)`
  color: white;
  margin: 5px 10px 0 10px;
  font-size: 22px;
`;

export const DocumentIcon = styled(CgFileDocument)`
  color: white;
  margin: 5px 10px 0 10px;
  font-size: 25px;
`;

export const AccountIcon = styled(BsPersonCheckFill)`
  color: white;
  margin: 5px 10px 0 10px;
  font-size: 25px;
`;

export const AccountDocumentIcon = styled(BsFillFileEarmarkPersonFill)`
  color: white;
  margin: 5px 10px 0 10px;
  font-size: 25px;
`;

export const TitleSlider = styled.h2`
  color: bluedark;
  padding: 0 0 5px 0;
  border-bottom: 1px solid black;
  margin: 0 20px 0 20px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Li = styled.li`
  padding: 15px 0;
  padding-right:50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  list-style: none;
  position: relative;
  z-index: 99;
  display: flex;
  justify-content: end;
  align-items: center;
  &:hover {
    cursor: pointer;
    > a {
      color: black;
    }
    > span {
      display: block;
    }
    > svg {
      color: black;
    }
  }

  > span {
    width: 90%;
    height: 50px;
    border-top-right-radius: 200px;
    border-bottom-right-radius: 200px;
    background-color: white;
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -99;
  }
  > a {
    color: white;
    font-size: 18px;
    text-decoration:none;
  }

  @media screen and (max-width: 1000px) {
    border: none;
    flex-direction: column-reverse;
    gap: 10px 0;

    &:hover {
      > span {
        display: none;
      }
      > svg {
        top: -58px;
        background-color: orangered;
        padding: 20px;
        position: absolute;
        border-radius: 50%;
        border: 7px solid white;
        color: white;
      }
      >a{
        color:orangered;
      }
    }
  }
`;

export const DivUlStarIcon = styled.div`
@media screen and (max-width:1000px){
    display:none;
  }
`

export const UlStarIcon = styled.ul`
  display: flex;
  justify-content: center;
  margin: 10px 0 50px 0;
`;

export const LiStar = styled.li`
  margin: 10;
  list-style: none;

`;

export const StarIconFill = styled(AiFillStar)`
  color: orange;
`;

export const StarIcon = styled(AiFillStar)`
  color: white;
`;
