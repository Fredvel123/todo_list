import Image from "next/image";
import lightWallpaper from "../../assets/images/bg-desktop-light.jpg";
import darkWallpaper from "../../assets/images/bg-desktop-dark.jpg";
import { WallpaperHome } from "../../styles/home/wallpaperHome";
// redux
import { useSelector } from "react-redux";
import { useWindowWidth } from "@react-hook/window-size";

function BackgroundHome() {
  const theme = useSelector((state) => state.theme.value);

  const size = useWindowWidth();
  return (
    <WallpaperHome>
      <Image
        className="wallpaper-home"
        src={theme ? lightWallpaper : darkWallpaper}
        alt="wallpaper"
        height={size < 450 ? "650" : null}
      />
    </WallpaperHome>
  );
}

export default BackgroundHome;
