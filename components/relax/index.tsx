// Components
import { RelaxItemMusic, RelaxItemPodcasts } from "./components/RelaxItems";

export function Relax() {
  return (
    <article className="flex flex-col justify-center gap-8">
      <h2 className="text-4xl font-medium">Relax your mind</h2>

      <RelaxItemMusic />
      <RelaxItemPodcasts />
    </article>
  );
}
