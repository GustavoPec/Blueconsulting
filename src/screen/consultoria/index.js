import { Footer } from "../../components/Footer/index.js";
import { Navbar } from "../../components/Navbar/index.js";
import { Modules } from "./Modules/index.js";
import * as Styles from "./style.js";

export const Consultoria = () => {
  return (
    <Styles.Main>
      <Styles.Navbar>
        <Navbar />
      </Styles.Navbar>
      <Styles.Consult>
        <Styles.ConsultText>
          <div className="ConsultTextTitle">
            <h2>GERENCIAMENTO DE</h2>
            <h1>
              APLICAÇÕES <strong>AMS</strong>
            </h1>
          </div>
          <div className="ConsultTextDesc">
            <span>
              Com a complexidade crescente do ambiente <br /> de negócios, é
              inevitável que os sistemas de <br /> informação da sua empresa
              tenham evoluído <br /> e{" "}
              <strong> demandem grande esforço.</strong>
            </span>
            <span>
              Com o propósito de garantir um ambiente <br />
              operacional eficiente para nossos clientes,
              <br /> desenvolvemos o{" "}
              <strong>
                AMS, serviço que fornece <br />
                suporte, manutenção{" "}
              </strong>
              e <strong>sustentação</strong> para <br />
              suas soluções.
            </span>
          </div>
        </Styles.ConsultText>
        <Styles.ConsultImg></Styles.ConsultImg>
      </Styles.Consult>
      <Styles.ErpSap>
        <div className="ErpSapTitle">
          <h1>ERP SAP</h1>
        </div>
        <Styles.ErpSapText>
          <span>
            O ERP SAP é projetado para fornecer uma{" "}
            <strong>visão holística </strong>e em
            <strong> tempo real</strong> das operações de uma empresa,
            permitindo uma
            <strong> melhor coordenação</strong> e <strong>controle</strong> de
            todas as atividades. Ele é baseado em um conjunto de módulos
            interconectados, onde cada módulo se concentra em uma área
            específica da empresa.
          </span>
        </Styles.ErpSapText>
        <Styles.ErpSapDesc>
          <span>
            Esses módulos podem ser adaptados <br />e configurados de acordo com
            as necessidades específicas de cada organização.
          </span>
        </Styles.ErpSapDesc>
        <Modules />
      </Styles.ErpSap>
      <Footer />
    </Styles.Main>
  );
};
