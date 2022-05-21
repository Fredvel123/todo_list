import Image from "next/image";
import wallpaper from "../../assets/images/bg-desktop-light.jpg";

function BackgroundHome() {
  return (
    <>
      <Image src={wallpaper} alt="wallpaper" />
    </>
  );
}

export default BackgroundHome;
