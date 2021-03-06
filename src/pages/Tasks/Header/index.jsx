import lightModeIcon from "../../../assets/images/icon-sun.svg";
import darkModeIcon from "../../../assets/images/icon-moon.svg";
import { Header_Tasks, Image_icon } from "../../../styles/tasks/header-styled";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../../redux/slices/theme";

export default function Header() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const changeTheme = () => {
    dispatch(setTheme(!theme));
    localStorage.setItem("theme", JSON.stringify(!theme));
  };

  return (
    <>
      <Header_Tasks>
        <h2>TODO</h2>
        <Image_icon
          src={theme ? darkModeIcon : lightModeIcon}
          onClick={changeTheme}
          alt="image"
        />
      </Header_Tasks>
    </>
  );
}
