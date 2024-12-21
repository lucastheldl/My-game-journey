import Image from "next/image";

export function HeroSection() {
	return (
		<div className="relative bg-slate-800 h-[500px] w-full">
			hero
			<div
				className="
          absolute inset-0
          after:content-[''] after:absolute after:inset-0
          after:bg-[url('/dt_ui_content_divider.svg')]
          after:bg-repeat-x 
          after:bg-bottom translate-y-5
        "
			/>
		</div>
	);
}
