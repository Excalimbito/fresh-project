import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";

type Props = {
  inputs: string[];
};

// <== DON'T OVERCOMPLICATE ==>
/// TODO: find a better way to do this
// Islands are made for interactivity, but shared components can have interactive inside islands. Since this component is not interactive but has client-side only logic, maybe we can create a better solution.
const Typing = ({
  inputs,
}: Props) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const activeText = useSignal(0);

  useEffect(() => {
    const span = textRef.current;
    if (!span) return;

    const handleIteration = (event: AnimationEvent) => {
      if (event.animationName !== "hidden3sLoop") return;

      if (activeText.value >= inputs.length - 1) {
        activeText.value = 0;
        return;
      }

      activeText.value++;
    };

    span.addEventListener("animationiteration", handleIteration);

    return () => {
      span.removeEventListener("animationiteration", handleIteration);
    };
  }, [inputs.length]);

  return (
    <span
      ref={textRef}
      class={`relative whitespace-nowrap before:absolute before:inset-0 before:bg-primary after:absolute after:inset-0 after:w-[0.125em] after:bg-white before:animate-typewriter after:animate-caret animate-hidden3sLoop`}
      style={`
        --steps: ${inputs[activeText.value].length};
      `}
    >
      {inputs.map((input, index) => (
        <span
          key={index}
          class={`${activeText.value == index ? "visible" : "hidden"} `}
        >
          {input}
        </span>
      ))}
    </span>
  );
};

export default Typing;
