export function ThreeDGamesSection() {
	return (
		<div className="relative bg-slate-800 h-[1000px] w-full">
			2d games
			<div
				className="
          absolute inset-0
          after:content-[''] after:absolute after:inset-0
          after:bg-[url('/dt_ui_content_divider.svg')]
          after:bg-repeat-x 
          after:bg-bottom translate-y-5
        "
			/>
			<div
				className="
          absolute inset-0
          after:content-[''] after:absolute after:inset-0
          after:bg-[url('/dt_ui_content_divider.svg')]
          after:bg-repeat-x 
          after:bg-top -translate-y-4
        "
			/>
		</div>
	);
}
