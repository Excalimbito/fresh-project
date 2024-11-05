import { useSignal } from "@preact/signals";
import Button from "../../components/buttons/default.tsx";
import Icon from "../../static/icons.tsx";

const Navigation = () => {
  const activeSection = useSignal(0);

  return (
    <div class="flex flex-col gap-3">
      <Button
        href="#about-section"
        onClick={() => activeSection.value = 1}
        class="bg-primary border-white shadow-white text-white "
      >
        {activeSection.value == 1 &&
          (
            <span class="pr-16 w-24 transition-all">
              <Icon name="multi-bubble" IconProps={{ color: "#C7C1B7" }} />
            </span>
          )}
        About
      </Button>
      <Button
        href="#experience-section"
        onClick={() => activeSection.value = 2}
        class="bg-primary border-white shadow-white text-white"
      >
        {activeSection.value == 2 &&
          (
            <span class="pr-16 w-24 transition-all">
              <Icon name="code" IconProps={{ color: "#C7C1B7" }} />
            </span>
          )}
        Experience
      </Button>
      <Button
        href="#projects-section"
        onClick={() => activeSection.value = 3}
        class="bg-primary border-white shadow-white text-white"
      >
        {activeSection.value == 3 &&
          (
            <span class="pr-16 w-24 transition-all">
              <Icon name="arcade" IconProps={{ color: "#C7C1B7" }} />
            </span>
          )}
        Projects
      </Button>
      <Button
        onClick={() => activeSection.value = 4}
        class="bg-primary border-white shadow-white text-white"
      >
        {activeSection.value == 4 &&
          (
            <span class="pr-16 w-24 transition-all">
              <Icon name="app-window" IconProps={{ color: "#C7C1B7" }} />
            </span>
          )}
        CONSOLE
      </Button>
    </div>
  );
};

export default Navigation;
