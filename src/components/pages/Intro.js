import Linkelogo from "../../assets/linkedin.svg";
import Gitlogo from "../../assets/github.svg";

const Intro = () => {
  return (
    // "acceuil" style de la page d'acceuil + filtre blur en arrière plan lors d'un clique sur le toggle boutton sur Smartphone
    <main className="acceuil min-h-screen" id="intro">
      {/* "data-aos" est un plugin permettant certaines animation type fade, zoom (https://michalsnik.github.io/aos/)
       */}
      <div data-aos="zoom-out">
        <h1
          className="mb-2 ml-1 md:text-sm lg:text-base xl:text-2xl"
          style={{
            fontFamily: "Inter",
            color: "#00e1ff",
          }}
        >
          Bonjour, je m'appelle
        </h1>
        <div
          className="text-3xl font-bold mb-3 md:text-5xl lg:text-6xl xl:text-8xl"
          style={{ fontFamily: "Poppins", color: "#ccd6f6" }}
        >
          <p>Grégory Alexis.</p>
        </div>
        <div
          className="text-3xl font-bold mb-3 md:text-5xl lg:text-6xl xl:text-8xl"
          style={{ fontFamily: "Poppins", color: "#ccd6f6" }}
        >
          <p>Développeur Front React.</p>
        </div>
        <div
          className=" font-bold mb-5 text-lg md:text-xl lg:text-2xl xl:text-4xl"
          style={{
            fontFamily: "Fira code",
            color: "#ccd6f6",
          }}
        >
          <p className="tracking-wider">Passioné par le développement web</p>
        </div>
        <div className="flex">
          <nav>
            <a
              href="https://www.linkedin.com/in/gr%C3%A9gory-alexis-57a21a202/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={Linkelogo}
                alt="linkedin"
                // "intro-icons-style" style des icones sur la page d'acceuil (voir fichier index.css)
                className="intro-icons-style"
                width="40"
                height="40"
              />
            </a>
          </nav>
          <nav>
            <a
              href="https://github.com/Westindiess"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={Gitlogo}
                alt="github"
                className="intro-icons-style ml-4"
                width="40"
                height="40"
              />
            </a>
          </nav>
        </div>
        <div className="flex">
          <button
            type="button"
            // "contact-button" style 'effet de zoom' du boutton 'Contactez Moi'  sur la page d'acceuil lors d'un hover (voir fichier index.css)
            className="contact-button"
            style={{ borderColor: "#00e1ff" }}
          >
            <a
              href="mailto:gregoryalexis.dev@gmail.com"
              className="no-underline lg:px-5 lg:py-1"
              style={{
                color: "#00e1ff",
                fontFamily: "Inter",
              }}
              rel="noopener noreferrer"
              target="_blank"
            >
              Contactez Moi
            </a>
          </button>
          <button
            type="button"
            // "contact-button" style 'effet de zoom' du boutton 'Contactez Moi'  sur la page d'acceuil lors d'un hover (voir fichier index.css)
            className="contact-button ml-5"
            style={{ borderColor: "#00e1ff" }}
          >
            <a
              href="https://gregalexis-cv.netlify.app/"
              className="no-underline lg:px-5 lg:py-1"
              style={{
                color: "#00e1ff",
                fontFamily: "Inter",
              }}
              rel="noopener noreferrer"
              target="_blank"
            >
              Mon CV
            </a>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Intro;
