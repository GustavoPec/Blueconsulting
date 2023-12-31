import { Footer } from "../../components/Footer/index.js";
import { Navbar } from "../../components/Navbar/index.js";
import { Costumers } from "./components/costumers/index.js";
import { ProjectsL } from "./components/projetsDotsLeft/index.js";
import { ProjectsR } from "./components/projetsDotsRight/index.js";
import * as Styles from "./style.js";

export const Blue = () => {
  return (
    <Styles.Main>
      <Styles.Navbar>
        <Navbar />
      </Styles.Navbar>
      <Styles.Container>
        <Styles.ContainerPerson></Styles.ContainerPerson>
        <Styles.ContinerOutsiteBlue>
          <Styles.ContainerBlue></Styles.ContainerBlue>
        </Styles.ContinerOutsiteBlue>
        <Styles.ContainerInfos>
          <div className="MissionText">
            <div className="Title">
              <h2>NOSSA MISSÃO</h2>
            </div>
            <div className="TitleSubText">
              <span>
                Nossa empresa é especializada em traduzir processos de negócios
                em <strong>soluções tecnológicas inovadoras.</strong> Somos
                reconhecidos por entregar projetos de alta qualidade que{" "}
                <strong>atendem</strong> e{" "}
                <strong>superam as expectativas</strong> de nossos clientes.
              </span>
            </div>
          </div>
          <Styles.AchievementsProjs>
            <div className="TitleAchievement">
              <h2>CONQUISTAS</h2>
            </div>
            <Styles.AchievementsProjects>
              <ProjectsL
                Number="43"
                Title="PROJETOS"
                Text="Compreendendo as necessidades e expectativas dos clientes."
              />
              <ProjectsR
                Number="19"
                Title="CLIENTES"
                Text="Satisfeitos com o nosso compromisso, excelência e qualidade de entrega."
              />
              <ProjectsL
                Number="25"
                Title="CONSULTORES"
                Text="Com conhecimento profundo em suas áreas de especialização."
              />
            </Styles.AchievementsProjects>
          </Styles.AchievementsProjs>
          <Styles.Costumers>
            <div className="TitleCostumers">
              <h2>OS CLIENTES CONFIAM</h2>
            </div>
            <Costumers />
          </Styles.Costumers>
        </Styles.ContainerInfos>
      </Styles.Container>
      <Footer />
    </Styles.Main>
  );
};
