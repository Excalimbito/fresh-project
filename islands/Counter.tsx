import type { Signal } from "@preact/signals";
import CircleButton from "../components/buttons/circle.tsx";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      <CircleButton onClick={() => props.count.value -= 1}>-1</CircleButton>
      <p class="text-3xl tabular-nums">{props.count}</p>
      <CircleButton onClick={() => props.count.value += 1}>+1</CircleButton>
    </div>
  );
}
