import loremIpsum from "../../../static/lorem-ipsum.ts";
import FixedScrollSection from "../fixed-scroll.tsx";

const Experience = () => {
  return (
    <FixedScrollSection id="experience-section" class="bg-primary text-white">
      {loremIpsum}
    </FixedScrollSection>
  );
};

export default Experience;
