"use client";
import bookMarker from "@/../public/book-marker-blue.png";
import Image from "next/image";
import { IconCube } from "@tabler/icons-react";
import { motion } from "motion/react";
import { DevImagesSection } from "../dev-images-section";
import image from "@/../public/kllr.jpeg";

export function ThreeDGamesSection() {
	return (
		<div className="relative bg-slate-900 h-[1000px] w-full pt-16">
			<motion.div
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, bounce: "linear" }}
				className="relative z-10 h-24 "
			>
				<div className="flex items-center h-full px-10">
					<h2 className="inline-flex items-center gap-2 text-foreground text-3xl font-semibold z-10">
						<IconCube size={30} />
						Jogos 3D
					</h2>
				</div>
				<div className="absolute left-0 top-1/2 sm:top-0 -translate-y-1/2 sm:translate-y-0 -z-10">
					<Image src={bookMarker} alt="" height={100} />
				</div>
			</motion.div>
			<DevImagesSection image_1={image} image_2={image} image_3={image} />
			<div
				className="
          absolute inset-0
          before:content-[''] before:absolute before:inset-0
          before:bg-[url('/divider.png')]
          before:bg-repeat-x 
          before:bg-bottom translate-y-[4.7rem]
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
