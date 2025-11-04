import { Manrope } from "next/font/google";
import "./_styles/globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Cart from "./_components/Cart";
import { ConvexClientProvider } from "@/app/ConvexClientProvider";
import { CartProvider } from "./_context/CartContext";
import { AddtoCartProvider } from "./_context/AddtoCartContext";

const manrope = Manrope({
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Audiophiles",
	description: "Ecommerce Gadget Store",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={` ${manrope.className} antialiased relative`}>
				<ConvexClientProvider>
					<AddtoCartProvider>
						<CartProvider>
							<Navbar />
							<Cart />
							<main>{children}</main>
							<Footer />
						</CartProvider>
					</AddtoCartProvider>
				</ConvexClientProvider>
			</body>
		</html>
	);
}
