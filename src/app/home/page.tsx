import { ChatIcon } from "@/components/icons/Chat";
import { KeyboardIcon } from "@/components/icons/Keyboard";
import { SearchNgoIcon } from "@/components/icons/SearchNgo";
import { Section } from "@/components/Section";
import SearchNgoSection from "./_components/SearchNgoSection";
import HowItWorkSection from "./_components/HowItWorkSection";
import AboutSection from "./_components/AboutSection";

export default function Home() {
  return (
    <div>
      <SearchNgoSection />
      <HowItWorkSection />
      <AboutSection />
    </div>
  );
}
