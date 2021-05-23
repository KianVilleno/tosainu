import {
  TokenomicsWrapper,
  Title,
  ContentWrapper,
  Content,
  ContentTitle,
  ContentSubtitle,
} from "./Tokenomics.styles";

import Image from "next/image";

const Tokenomics = () => {
  return (
    <TokenomicsWrapper id="tokenomics">
      <Title>Our Tokenomics</Title>
      <ContentWrapper>
        <Content>
          <Image src="/assets/img/hand-coin.svg" width="180px" height="180px" />
          <ContentTitle>5%</ContentTitle>
          <ContentSubtitle>Re-distributed to Holders</ContentSubtitle>
        </Content>
        <Content>
          <Image src="/assets/img/liqudity.svg" width="180px" height="180px" />
          <ContentTitle>5%</ContentTitle>
          <ContentSubtitle>Liquidity</ContentSubtitle>
        </Content>
      </ContentWrapper>
    </TokenomicsWrapper>
  );
};

export default Tokenomics;
