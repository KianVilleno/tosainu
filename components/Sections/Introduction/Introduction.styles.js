import styled from "@emotion/styled";

export const IntroductionWrapper = styled.section`
  height: 110vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 15vh;
  align-items: center;
  background-color: #fbda61;
  background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
`;

export const IntroductionLogoContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
`;

export const IntroductionTitle = styled.div`
  width: 95%;
  max-width: 1000px;
  margin-top: 1rem;
  position: relative;
  font-size: 2.5rem;
  color: white;
  text-align: center;
  letter-spacing: 0.1rem;
  font-family: "Varela Round", sans-serif;
  font-weight: 900;

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }

  @media (max-width: 420px) {
    letter-spacing: 0;
    font-size: 1.6rem;
  }
  @media (max-width: 320px) {
    letter-spacing: 0;
    font-size: 1.4rem;
  }
`;

export const IntroductionSubtitle = styled.div`
  font-size: 1.2rem;
  color: white;
  position: relative;
  margin-top: 2.5rem;
  width: 85%;
  text-align: center;
  font-family: MontserratLight;

  @media (max-width: 420px) {
    font-size: 0.95rem;
    margin-top: 1rem;
  }
`;

export const ButtonsWrapper = styled.div`
  margin-top: 1.8rem;
  width: 90%;
  max-width: 600px;
  height: 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
