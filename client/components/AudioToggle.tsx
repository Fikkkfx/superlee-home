import { useBacksound } from "@/hooks/use-backsound";

const TRACK_URL =
  "https://cdn.builder.io/o/assets%2F2711b768900f460f84e959042bd91f7e%2F59395e9994164f109e7b279af81af2a0?alt=media&token=4662b58c-878c-4a6a-a926-abc5cf7b0e62&apiKey=2711b768900f460f84e959042bd91f7e";

export default function AudioToggle() {
  const { enabled, toggle } = useBacksound(TRACK_URL, 0.18);
  return (
    <button
      type="button"
      aria-label={enabled ? "Disable sound" : "Enable sound"}
      onClick={toggle}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition text-base"
      title={enabled ? "Sound on" : "Sound off"}
    >
      <span role="img" aria-hidden="true">
        {enabled ? "🔊" : "🔈"}
      </span>
    </button>
  );
}
