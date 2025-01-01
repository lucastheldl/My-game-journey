import { cn } from "@/lib/utils";
import { IconQuote, IconQuoteFilled } from "@tabler/icons-react";

type TestimonialProps = {
	variant: "red" | "blue";
	content: string;
};
export function Testimonial({ variant, content }: TestimonialProps) {
	return (
		<div className="relative max-w-xs sm:max-w-xl mx-auto mt-20">
			<IconQuoteFilled
				className={cn(
					"absolute -left-16 sm:-left-20 -top-16 rotate-180 size-20 ",
					variant === "red" && "text-red-500",
					variant === "blue" && "text-blue-600",
				)}
			/>
			<p
				className={cn(
					" font-semibold text-lg",
					variant === "red" && "text-slate-950",
					variant === "blue" && "text-white",
				)}
			>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis
				amet labore minima eius, in nemo, voluptas omnis, dignissimos quos unde
				deserunt! Repudiandae minus omnis exercitationem distinctio cumque sunt
				necessitatibus!
			</p>
			<IconQuoteFilled
				className={cn(
					"absolute -right-16 sm:-right-20 -bottom-16 size-20 ",
					variant === "red" && "text-red-500",
					variant === "blue" && "text-blue-600",
				)}
			/>
		</div>
	);
}
