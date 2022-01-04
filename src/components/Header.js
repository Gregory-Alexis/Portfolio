import Hero from "./Hero";
import NavBar from "./NavBar";
import ToggleButton from "./ToggleButton";
import ToggleNavbar from "./ToggleNavbar";

export const Header = ({ handleToggleButton, width, toggle }) => {
  return (
    <header className="flex px-4 py-5 shadow-md ">
      <Hero />
      <ToggleButton
        handleToggleButton={handleToggleButton}
        width={width}
        toggle={toggle}
      />
      {width >= 1024 && <NavBar />}
      {toggle && <ToggleNavbar handleToggleButton={handleToggleButton} />}
    </header>
  );
};

export default Header;
