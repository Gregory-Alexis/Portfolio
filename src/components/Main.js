import Infos from "./pages/Infos";
import Intro from "./pages/Intro";
import Projets from "./pages/Projets";

const Main = () => {
  return (
    <section className="p-6">
      <Intro />
      <Infos />
      <Projets />
    </section>
  );
};

export default Main;
