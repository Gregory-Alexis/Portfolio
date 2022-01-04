import Header from "./components/Header";
import "../src/App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 800 });

function App() {
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleToggleButton = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setToggle(false);
      }
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <section style={{ backgroundColor: "#151E2B" }}>
      <div className="fixed w-full z-30 backdrop-filter backdrop-blur">
        <Header
          handleToggleButton={handleToggleButton}
          width={width}
          toggle={toggle}
          setToggle={setToggle}
        />
      </div>
      <div className={toggle ? "filter blur-sm" : ""}>
        <div className="flex items-center justify-center">
          <Main />
          <div className="absolute bottom-0 animate-bounce text-lightblue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default App;
