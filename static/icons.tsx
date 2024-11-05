import AppWindow from "./icons/app-window.tsx";
import Arcade from "./icons/arcade.tsx";
import Code from "./icons/code.tsx";
import Discord from "./icons/discord.tsx";
import Github from "./icons/github.tsx";
import Linkedin from "./icons/linkedin.tsx";
import MultiBubble from "./icons/multi-bubble.tsx";
import SendMail from "./icons/send-mail.tsx";

type IconNames =
  | "linkedin"
  | "arcade"
  | "github"
  | "send-mail"
  | "discord"
  | "code"
  | "multi-bubble"
  | "app-window";

type Props = {
  name: IconNames;
  IconProps?: IconProps;
};

export type IconProps = {
  color?: string;
};

const Icon = ({ name, IconProps }: Props) => {
  switch (name) {
    case "linkedin":
      return <Linkedin {...IconProps} />;
    case "arcade":
      return <Arcade {...IconProps} />;
    case "github":
      return <Github {...IconProps} />;
    case "discord":
      return <Discord {...IconProps} />;
    case "send-mail":
      return <SendMail {...IconProps} />;
    case "code":
      return <Code {...IconProps} />;
    case "multi-bubble":
      return <MultiBubble {...IconProps} />;
    case "app-window":
      return <AppWindow {...IconProps} />;
  }
};

export default Icon;
