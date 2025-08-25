import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Header() {
  return (
    <header>
      <h1>☕ 오즈 카페</h1>
      <nav>
        <Link to="/">메인</Link>
        <Link to="/cart">장바구니</Link>
        <ThemeButton />
      </nav>
    </header>
  );
}

export default Header;

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  return (
    <button className="themeBtn" onClick={toggleTheme}>
      {theme === "light" ? "dark" : "light"}
    </button>
  );
}
