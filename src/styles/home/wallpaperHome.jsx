import styled from "styled-components";
import Image from "next/image";

export const WallpaperHome = styled.div`
  width: 100vw;
  height: 50vh;
  position: relative;
  .wallpaper-home {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover; // Optional
  }
  @media screen and (max-width: 750px) {
    height: 30vh;
  }
`;
