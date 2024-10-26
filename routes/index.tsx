import SubHeading from "../components/typo/SubHeading.tsx";
import Typing from "../islands/Typing.tsx";

export default function Home() {
  return (
    <div class="overflow-hidden flex flex-row">
      <section
        id="static-info"
        class="h-screen w-5/12 px-16 bg-[#0e1d24] flex flex-col items-center justify-center overflow-hidden text-white"
      >
        <img
          class="my-6"
          src="/logo.png"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <div class="w-full ">
          <h1 class="text-5xl font-bold">Rafael Libório</h1>
          <SubHeading>
            {`I'm `}
            <Typing
              inputs={[
                "a Developer",
                "a Game Enthusiast",
                "a Father",
                "a Creator",
                "Excalimbito",
              ]}
            />
          </SubHeading>
        </div>
      </section>
      <section id="dynamic-info" class="w-7/12">
        INFO HERE
      </section>
    </div>
  );
}
