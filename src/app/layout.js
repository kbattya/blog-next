import { Inter } from "next/font/google";
import './main.scss';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arrakis AI",
  description: "A new economic primitive for funding decentralazed AI",
	icons: {
		icon: '/icon.ico'
	},
};


export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<body className={inter.className}>
				{children}
			</body>
		</html>
  );
}
