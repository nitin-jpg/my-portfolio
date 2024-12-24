/* eslint-disable no-undef */
import logo from "../assets/kevinRushLogo.png";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="mb-10 flex items-center justify-between py-20">
      
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      
      
      <div className="m-2 flex items-center justify-center gap-4">
        <button
          onClick={() => scrollToSection("About")}
          className="text-bold mr-3 hover:text-gray-400 text-white"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="text-bold ml-1 mr-3 hover:text-gray-400 text-white"
        >
          Contact
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className="text-bold ml-1 hover:text-gray-400 text-white"
        >
          Experience
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
