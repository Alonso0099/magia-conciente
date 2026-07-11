import HomeFinalCta from "@/components/home/HomeFinalCta";
import HomeHero from "@/components/home/HomeHero";
import HomeHowItWorks from "@/components/home/HomeHowItWorks";
import HomeServicesPreview from "@/components/home/HomeServicesPreview";
import HomeSocials from "@/components/home/HomeSocials";
import HomeTestimonialsPreview from "@/components/home/HomeTestimonialsPreview";

export default function Home() {
  return (
    <div className="space-y-16 sm:space-y-20 md:space-y-24">
      <HomeHero />
      <HomeServicesPreview />
      <HomeHowItWorks />
      <HomeTestimonialsPreview />
      <HomeSocials />
      <HomeFinalCta />
    </div>
  );
}
