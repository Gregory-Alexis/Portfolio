const Footer = () => {
  return (
    <footer className="text-center text-sm md:text-base  text-grey pt-24">
      <div className="shadow-white px-12 py-2 rounded-lg m-auto  inline-block md:px-24 lg:px-36">
        <p>Site toujours en cours de développement.</p>
        <br />
        <p>
          Vous pouvez consulter le code source{" "}
          <a
            href="https://github.com/Westindiess/MyPortfolio"
            // "underlinelink" voir fichier app.css
            className="text-lightblue underlinelink"
            rel="noopener noreferrer"
            target="_blank"
          >
            ici
          </a>
          .
        </p>
      </div>
      <br />
      <p className="pt-5">
        Pour toute remarque ou suggèstion n'hésitez pas à me contacter via{" "}
        <a
          href="mailto:gregoryalexis.dev@gmail.com"
          className="text-lightblue underlinelink"
          rel="noopener noreferrer"
          target="_blank"
        >
          Email
        </a>{" "}
        ou{" "}
        <a
          href="https://github.com/Westindiess"
          className="text-lightblue underlinelink"
          rel="noopener noreferrer"
          target="_blank"
        >
          Github
        </a>
      </p>
    </footer>
  );
};

export default Footer;
