import { useBacksound } from "@/hooks/use-backsound";

const TRACK_URL =
  "https://cdn.builder.io/o/assets%2F2711b768900f460f84e959042bd91f7e%2Fca8628dfa03f44c09d670659c2bd622e?alt=media&token=6e79d2b9-5fb6-443b-a78f-6845a0435956&apiKey=2711b768900f460f84e959042bd91f7e";

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
