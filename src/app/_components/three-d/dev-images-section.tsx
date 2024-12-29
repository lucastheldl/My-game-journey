import Image from "next/image";
import image from "@/../public/kllr.jpeg";
import { motion } from "motion/react";

export function DevImagesSection() {
	return (
		<div className="flex w-full justify-center gap-20">
			<motion.div
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0, rotateZ: -12 }}
				transition={{ duration: 0.5, bounce: "linear" }}
				className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-12"
			>
				<Image
					src={image}
					alt=""
					sizes="(min-width: 640px) 18rem, 11rem"
					className="absolute inset-0 h-full w-full object-cover"
				/>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: -500 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, bounce: "linear" }}
				className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800"
			>
				<Image
					src={image}
					alt=""
					sizes="(min-width: 640px) 18rem, 11rem"
					className="absolute inset-0 h-full w-full object-cover"
				/>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: -1000 }}
				whileInView={{ opacity: 1, x: 0, rotateZ: 12 }}
				transition={{ duration: 0.5, bounce: "linear" }}
				className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800"
			>
				<Image
					src={image}
					alt=""
					sizes="(min-width: 640px) 18rem, 11rem"
					className="absolute inset-0 h-full w-full object-cover"
				/>
			</motion.div>
		</div>
	);
}
