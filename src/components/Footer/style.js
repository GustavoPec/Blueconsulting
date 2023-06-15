import styled from "styled-components";
import bannerFooter from "../../assets/BannerFooter.png";

export const Footer = styled.div`
  height: 443px;
  width: 100%;
  background-image: url(${bannerFooter});
  background-position: right center;
  background-repeat: no-repeat;
  background-size: auto;
  display: flex;
  flex-direction: column;
  position: relative;


  @media (max-width: 767px) {
    height: 750px;
    background-size: cover;
  }

  .FooterPattern {
    width: 100%;
    display: flex;
    justify-content: end;
  }

  .Border {
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -125px;
    background-image: linear-gradient(to bottom, #005c83 51.4%, transparent 0%);
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 130px;

    img {
      width: 170px;
      height: 170px;
    }
  }

  .Footer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .Links {
    width: 900px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    gap: 50px;

    @media (max-width: 767px) {
      width: 100%;
      height: 100%;
      justify-content: start;
      flex-direction: column;
      padding-left: 20px;
      padding-top: 150px;
    }
  }

  .Box {
    border-left: 2px solid white;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 5px;
    color: white;

    span {
      cursor: pointer;
      width: auto;
    }

    p {
      font-weight: bold;
    }
  }

  .FooterLinksImg {
    display: flex;
    flex-direction: column;
    gap: 30px;

    img {
      @media (max-width: 767px) {
        width: 250px;
      }
    }
  }

  .Icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;

    i {
      font-size: 38px;
      color: white;
      cursor: pointer;
    }
  }
`;
