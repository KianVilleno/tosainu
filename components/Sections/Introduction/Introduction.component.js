import {
  IntroductionWrapper,
  IntroductionLogoContainer,
  IntroductionTitle,
  IntroductionSubtitle,
  ButtonsWrapper,
} from "./Introduction.styles";

import Image from "next/image";
import Button from "../../Button/Button.component";

const Introduction = () => {
  return (
    <IntroductionWrapper id="introduction">
      <IntroductionLogoContainer>
        <Image
          src="/assets/img/main-logo.svg"
          layout="fill"
          objectFit="cover"
        />
      </IntroductionLogoContainer>
      <IntroductionTitle>
        A token dedicated to all dog lovers, helping dogs thrive in loving homes
      </IntroductionTitle>
      <IntroductionSubtitle>
        If you’re a dog lover looking for a pet-friendly token, look no more
        than in Tosa Inu
      </IntroductionSubtitle>
      <ButtonsWrapper>
        <Button>BUY TOSA</Button>
        <Button>VIEW CHART</Button>
        <Button>CHECK BSCAN</Button>
      </ButtonsWrapper>
    </IntroductionWrapper>
  );
};

export default Introduction;
