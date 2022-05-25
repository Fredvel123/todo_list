import Image from "next/image";
import lightWallpaper from "../../assets/images/bg-desktop-light.jpg";
import darkWallpaper from "../../assets/images/bg-desktop-dark.jpg";
import { WallpaperHome } from "../../styles/home/wallpaperHome";
// redux
import { useDispatch, useSelector } from "react-redux";

function BackgroundHome() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <>
      <WallpaperHome
        src={theme ? lightWallpaper : darkWallpaper}
        alt="wallpaper"
      />
    </>
  );
}

export default BackgroundHome;
