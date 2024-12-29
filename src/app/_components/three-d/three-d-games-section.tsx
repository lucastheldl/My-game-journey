"use client";
import bookMarker from "@/../public/book-marker.png";
import Image from "next/image";
import { IconCube } from "@tabler/icons-react";
import { motion, useScroll } from "motion/react";
import { DevImagesSection } from "./dev-images-section";

export function ThreeDGamesSection() {
	return (
		<div className="relative bg-zinc-600 h-[1000px] w-full">
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: -50 }}
				transition={{ duration: 0.5, bounce: "linear" }}
				className="relative z-10 h-24"
			>
				<div className="flex items-center h-full px-10">
					<h2 className="inline-flex items-center gap-2 text-foreground text-3xl font-semibold z-10">
						<IconCube size={30} />
						Jogos 3D
					</h2>
				</div>
				<div className="absolute left-0 top-0 -z-10">
					<Image src={bookMarker} alt="" height={100} />
				</div>
			</motion.div>
			<DevImagesSection />
			<div
				className="
          absolute inset-0
          before:content-[''] before:absolute before:inset-0
          before:bg-[url('/divider.png')]
          before:bg-repeat-x 
          before:bg-bottom translate-y-[4.5rem]
        "
			/>
			<div
				className="
          absolute inset-0
          after:content-[''] after:absolute after:inset-0
          after:bg-[url('/divider.png')]
          after:bg-repeat-x 
          after:bg-top -translate-y-[4.5rem]
        "
			/>
		</div>
	);
}
