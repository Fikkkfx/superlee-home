import { useChiptuneAudio } from "@/hooks/use-chiptune";

export default function AudioToggle() {
  const { enabled, toggle } = useChiptuneAudio();
  return (
    <button
      type="button"
      aria-label={enabled ? "Disable sound" : "Enable sound"}
      onClick={toggle}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition text-base"
      title={enabled ? "Sound on" : "Sound off"}
    >
      <span role="img" aria-hidden>
        {enabled ? "🔊" : "🔈"}
      </span>
    </button>
  );
}
