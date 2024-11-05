import Navigation from "../../../islands/navigation/navigation.tsx";
import SocialLinks from "../../../islands/social-links.tsx";
import Typing from "../../../islands/type-text.tsx";
import SubHeading from "../../typo/sub-heading.tsx";

const Side = () => {
  return (
    <section
      id="static-info"
      class="h-screen w-5/12 px-16 bg-primary flex flex-col overflow-hidden text-white pb-12 pt-[15vh] fixed"
    >
      <section class="mb-20 flex items-center overflow-hidden">
        <img
          src="/logo.png"
          width="65"
          href={"https://github.com/excalimbito"}
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <span class="ml-4">
          <h1 class="text-5xl font-bold">Rafael Libório</h1>
          <SubHeading>
            {`I'm `}
            <Typing
              inputs={[
                "a Developer",
                "a Game Enthusiast",
                "a Father",
                "a Creator",
                // "Excalimbito",
              ]}
            />
          </SubHeading>
        </span>
      </section>
      <Navigation />
      <SocialLinks />
    </section>
  );
};

export default Side;
