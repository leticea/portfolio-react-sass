import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";
import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Letícia Mangueira" />
      <p className="title">Desenvolvedora</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
