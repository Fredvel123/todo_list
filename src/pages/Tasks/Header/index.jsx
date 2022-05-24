import lightModeIcon from "../../../assets/images/icon-sun.svg";
import darkModeIcon from "../../../assets/images/icon-moon.svg";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div>
        <h2>TODO</h2>
        <Image src={darkModeIcon} alt="image" />
      </div>
    </>
  );
}
