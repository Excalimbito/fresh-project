import About from "../components/sections/home/about.tsx";
import Experience from "../components/sections/home/experience.tsx";
import Intro from "../components/sections/home/intro.tsx";
import SideSection from "../components/sections/home/side.tsx";

const Home = () => {
  return (
    <div class="overflow-hidden flex flex-row">
      <SideSection />
      <section
        id="dynamic-info"
        class="w-7/12 h-fit relative left-[41.666667%]"
      >
        <Intro />
        <About />
        <Experience />
      </section>
    </div>
  );
};

export default Home;
