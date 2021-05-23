import styled from "@emotion/styled";

export const TokenomicsWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #fbda61;
  padding-top: 20vh;
  background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 2rem;
  text-align: center;
  font-family: "Varela Round", sans-serif;
  color: white;
`;

export const ContentWrapper = styled.div`
  font-size: 2rem;
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Content = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 90%;
  max-width: 500px;
  height: 500px;
`;

export const ContentTitle = styled.div`
  margin-top: 2rem;
  font-size: 3rem;
  text-align: center;
  font-family: "Varela Round", sans-serif;
  color: white;
`;

export const ContentSubtitle = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
  text-align: center;
  color: white;
`;
