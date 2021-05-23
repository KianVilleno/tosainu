import Introduction from "../components/Sections/Introduction/Introduction.component";
import About from "../components/Sections/About/About.component";
import Tokenomics from "../components/Sections/Tokenomics/Tokenomics.component";
import Contact from "../components/Sections/Contact/Contact.component";

const Home = () => {
  return (
    <>
      <Introduction />
      <About />
      <Tokenomics />
      <Contact />
    </>
  );
};

export default Home;
