import CircleButton from "../components/buttons/circle.tsx";
import Icon from "../static/icons.tsx";

const SocialLinks = () => {
  return (
    <footer class="flex flex-row gap-4 mt-auto">
      <CircleButton
        href="https://www.linkedin.com/in/rafalibaribeiro/"
        class="w-16 h-16 bg-primary border-white shadow-white text-white"
      >
        <Icon name="linkedin" IconProps={{ color: "#C7C1B7" }} />
      </CircleButton>
      <CircleButton
        href="https://github.com/excalimbito"
        class="w-16 h-16 bg-primary border-white shadow-white text-white"
      >
        <Icon name="github" IconProps={{ color: "#C7C1B7" }} />
      </CircleButton>
      <CircleButton
        href="mailto:rafa.liba.dev@pm.me"
        class="w-16 h-16 bg-primary border-white shadow-white text-white"
      >
        <Icon name="send-mail" IconProps={{ color: "#C7C1B7" }} />
      </CircleButton>
    </footer>
  );
};

export default SocialLinks;
