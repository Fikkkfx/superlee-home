import SiteLayout from "@/components/SiteLayout";
import LottiePlayer from "@/components/LottiePlayer";

export default function FlappySuperlee() {
  return (
    <SiteLayout>
      <section className="relative p-0">
        <div className="w-full h-[calc(100vh-96px)] md:h-[calc(100vh-112px)]">
          <LottiePlayer
            src="https://cdn.builder.io/o/assets%2F2711b768900f460f84e959042bd91f7e%2F9982a0b6a64440239c99117dce462173?alt=media&token=ce21721d-6abd-47e1-8d4b-3975a5cdafed&apiKey=2711b768900f460f84e959042bd91f7e"
            autoplay
            loop
            className="w-full h-full"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
