import { styled } from "styled-components";

export const Main = styled.div`
  width: auto;
  height: 75px;
  display: flex;
  flex-direction: row;
  align-items: end;

  @media (max-width: 767px) {
    width: auto;
  }
`;

export const Dot = styled.div`
  width: 75px;
  height: 75px;
  background: #0076e2;
  border-radius: 60px 60px 0px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  border-bottom: 5px solid #0076e2;
  padding: 7px;

  @media (max-width: 767px) {
    width: 250px;
    height: 70px;
  }

  h1 {
    font-size: 18px;
    @media (max-width: 767px) {
      text-align: center;
      width: 240px;
      padding-bottom: 5px;
    }
  }
`;
