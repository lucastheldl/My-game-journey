import Image from "next/image";
import { HeroSection } from "./_components/hero-section";
import { TwoDGamesSection } from "./_components/two-d-games-section";
import { ThreeDGamesSection } from "./_components/three-d/three-d-games-section";
import { Footer } from "./_components/footer";

export default function Home() {
	return (
		<div className="items-center justify-items-center min-h-screen">
			<HeroSection />
			<TwoDGamesSection />
			<ThreeDGamesSection />
			<Footer />
		</div>
	);
}
