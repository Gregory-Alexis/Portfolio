const ToggleNavbar = ({ handleToggleButton }) => {
  return (
    <nav
      /* "animate-right-to-left" le déroulement vers la gauche de la NavBar lors d'un click sur le toggle button via Smartphone et iPad. 
            Petit soucis, le déroulement inverse ne se fait pas. (voir le fichier tailwind.config.js) */
      className="fixed right-0 top-0 flex h-screen items-center w-64 z-10 animate-right-to-left "
      style={{ color: "#ccd6f6", backgroundColor: "#151E2B" }}
    >
      <ul className="flex flex-col mt-2 text-2xl w-screen lg:flex-row">
        <div
          // "green-bg-link" le style des liens (Acceuil, Infos, Projet, Exp)  sur petit écran (voir fichier index.css)
          className="blue-bg-link "
        >
          <li className="my-5 md:mr-4 " onClick={handleToggleButton}>
            <a href="#intro">Acceuil</a>
          </li>
        </div>
        <div className="blue-bg-link">
          <li className="my-5 md:mr-4" onClick={handleToggleButton}>
            <a href="#infos">À propos de moi</a>
          </li>
        </div>
        <div className="blue-bg-link">
          <li className="my-5 md:mr-4" onClick={handleToggleButton}>
            <a href="#projets">Projets</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default ToggleNavbar;
