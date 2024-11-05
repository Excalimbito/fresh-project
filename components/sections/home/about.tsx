import loremIpsum from "../../../static/lorem-ipsum.ts";
import FixedScrollSection from "../fixed-scroll.tsx";

const About = () => {
  return (
    <FixedScrollSection id="about-section">
      {loremIpsum}
    </FixedScrollSection>
  );
};

export default About;
