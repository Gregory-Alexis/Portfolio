import ReactIllu from "../../assets/react.svg";

const Infos = () => {
  return (
    <article
      className="pt-24 xl:px-80 xl:pt-36 lg:grid lg:grid-cols-2"
      id="infos"
      style={{
        fontFamily: "Fira code",
      }}
    >
      <div data-aos="flip-right">
        <h2
          className="pb-5 text-center text-xl border-b-2 text-lightblue md:text-3xl md:w-96 md:m-auto xl:ml-16"
          style={{
            fontFamily: "Heebo",
            borderBottomColor: "#8892b0",
          }}
        >
          À propos de moi
        </h2>
        {/* "info-text-style" mise en forme global de la section texte "infos"*/}
        <div className="info-text-style">
          <p>
            Bonjour!, Je m'appelle Grégory et je suis passionné depuis plus d'un
            an maintenant par le développement front-end. Après avoir passé ma
            vie à travailler dans différents domaines (Logistique, Hôtellerie,
            Animation...), j'étais à la recherche d'un nouveau challenge,
            quelque chose qui me passionne.
          </p>
          <br />
          <p>
            C'est au début de l'année 2020 que j'ai découvert le développement
            web et j'ai donc décidé commencé cette aventure en apprenant les
            bases HTML, CSS et Javascript via différentes plateformes comme (
            <a
              href="https://www.codecademy.com/"
              className="text-lightblue  underlinelink"
              rel="noopener noreferrer"
              target="_blank"
            >
              Codecademy
            </a>
            ,{" "}
            <a
              href="https://openclassrooms.com/fr/"
              className="text-lightblue underlinelink"
              rel="noopener noreferrer"
              target="_blank"
            >
              OpenClassRoom
            </a>
            ,{" "}
            <a
              href="https://www.freecodecamp.org/"
              className="text-lightblue underlinelink"
              rel="noopener noreferrer"
              target="_blank"
            >
              FreeCodeCamp
            </a>
            ...).
          </p>
          <br />
          <p>
            Après plusieurs mois, je me suis senti prêt pour intégrer une
            formation dans le but d'aller plus loin dans mon apprentissage, et
            c'est ainsi, qu'à démarré mon aventure au sein de la formation{" "}
            <a
              href="https://alyra.fr/"
              className="underlinelink text-lightblue "
              rel="noopener noreferrer"
              target="_blank"
            >
              Alyra
            </a>
            . Ce fut une magnifique expérience. Suite à cela, j'ai décidé de me
            lancer pleinement dans une carrière de développeur front-end React.
          </p>
        </div>
      </div>
      <div data-aos="flip-down" className="m-auto md:w-3/4 lg:w-auto">
        <img src={ReactIllu} alt="logo react" width="900" height="900" />
      </div>
    </article>
  );
};

export default Infos;
