"use client";
import Image from "next/image";
import bookMarkerBlue from "@/../public/book-marker-blue.png";
import { IconNote } from "@tabler/icons-react";
import { motion } from "motion/react";

export function TwoDGamesSection() {
	return (
		<div className="relative bg-white h-[1000px] w-full">
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: -50 }}
				transition={{ duration: 0.5, bounce: "linear" }}
				className="relative z-10 h-24"
			>
				<div className="flex items-center h-full px-10">
					<h2 className="inline-flex items-center gap-2 text-foreground text-3xl font-semibold z-10">
						<IconNote size={30} />
						Jogos 2D
					</h2>
				</div>
				<div className="absolute left-0 top-0 -z-10">
					<Image src={bookMarkerBlue} alt="" height={100} />
				</div>
			</motion.div>

			<div
				className="
          absolute inset-0
          before:content-[''] before:absolute before:inset-0
          before:bg-[url('/divider.png')]
          before:bg-repeat-x 
          before:bg-top -translate-y-[4.5rem]
        "
			/>
		</div>
	);
}
