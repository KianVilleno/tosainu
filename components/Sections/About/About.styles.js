import styled from "@emotion/styled";

export const AboutWrapper = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20vh;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 2rem;
  text-align: center;
  font-family: "Varela Round", sans-serif;
  color: #ff5acd;
`;

export const Description = styled.div`
  width: 90%;
  max-width: 900px;
  margin-top: 2.5rem;
  line-height: 2rem;
  font-size: 1.3rem;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 1.3rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 420px) {
    font-size: 0.9rem;
  }
  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;
