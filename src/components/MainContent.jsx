import "../styles/components/maincontent.sass";
import AboutContainer from "./AboutContainer";
import TechnologiesContainer from "./TechnologiesContainer";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnologiesContainer />
      <p>about</p>
      <p>tecnologias</p>
      <p>projetos</p>
    </main>
  );
};

export default MainContent;
