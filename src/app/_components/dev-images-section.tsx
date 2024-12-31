import Image, { type StaticImageData } from "next/image";
import image from "@/../public/kllr.jpeg";
import { motion } from "motion/react";

type DevImagesSectionPorps = {
	image_1: StaticImageData;
	image_2: StaticImageData;
	image_3: StaticImageData;
};
export function DevImagesSection({
	image_1,
	image_2,
	image_3,
}: DevImagesSectionPorps) {
	return (
		<div className="flex w-full justify-center gap-5 sm:gap-20 pt-20 pb-12 overflow-hidden">
			<motion.div
				initial={{ opacity: 0, x: -10 }}
				whileInView={{ opacity: 1, x: 0, rotateZ: -12 }}
				transition={{ duration: 0.5, bounce: "linear" }}
				className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-12"
			>
				<Image
					src={image_1}
					alt=""
					sizes="(min-width: 640px) 18rem, 11rem"
					className="absolute inset-0 h-full w-full object-cover"
				/>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, bounce: "linear" }}
				className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800"
			>
				<Image
					src={image_2}
					alt=""
					sizes="(min-width: 640px) 18rem, 11rem"
					className="absolute inset-0 h-full w-full object-cover"
				/>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: -40 }}
				whileInView={{ opacity: 1, x: 0, rotateZ: 12 }}
				transition={{ duration: 0.5, bounce: "linear" }}
				className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800"
			>
				<Image
					src={image_3}
					alt=""
					sizes="(min-width: 640px) 18rem, 11rem"
					className="absolute inset-0 h-full w-full object-cover"
				/>
			</motion.div>
		</div>
	);
}
