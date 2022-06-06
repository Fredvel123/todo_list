import styled from "styled-components";
import { dark, light } from "../tools/colors.js";
import Image from "next/image";

export const TasksListStyles = styled.div`
  margin-top: 1vh;
  margin-bottom: 1vh;
  height: 35px;
  display: grid;
  grid-template-columns: 5% 92% 3%;
  align-items: center;
  .image {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid;
    // border-image-slice: 1;
    border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
    border-radius: 100%;
    background: linear-gradient(to left, #743ad5, #d53a9d);
    margin-right: 5px;
    cursor: pointer;
    .checkedIcon {
      // opacity: 0;
    }
  }
  .no-image {
    display: flex;
    justify-content: center;
    cursor: pointer;
    width: 15px;
    height: 15px;
    border: 1px solid
      ${({ mode }) => (mode ? light.DarkGrayishBlue : dark.LightGrayishBlue)};
    border-radius: 50%;
    .checkedIcon {
      opacity: 0;
    }
  }
  p {
    margin-left: 10px;
    color: ${({ mode }) => (mode ? "black" : "white")};
    font-weight: 300;
  }
`;

export const LineStyle = styled.div`
  background: ${({ theme }) =>
    theme ? light.DarkGrayishBlue : dark.LightGrayishBlue};
  width: 100%;
  height: 1px;
`;
export const CrossIcon = styled(Image)`
  cursor: pointer;
`;
