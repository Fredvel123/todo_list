import Image from "next/image";
import lightWallpaper from "../../assets/images/bg-desktop-light.jpg";
import darkWallpaper from "../../assets/images/bg-desktop-dark.jpg";
import { WallpaperHome } from "../../styles/home/wallpaperHome";
// redux
import { useSelector } from "react-redux";

function BackgroundHome() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <WallpaperHome>
      <Image
        className="wallpaper-home"
        src={theme ? lightWallpaper : darkWallpaper}
        alt="wallpaper"
        layout="fill"
      />
    </WallpaperHome>
  );
}

export default BackgroundHome;
