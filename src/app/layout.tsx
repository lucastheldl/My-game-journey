import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "My Game Dev Journey",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${montserrat.className} antialiased overflow-x-hidden`}>
				{children}
			</body>
		</html>
	);
}
