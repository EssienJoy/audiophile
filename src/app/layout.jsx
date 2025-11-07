import { Manrope } from "next/font/google";
import "./_styles/globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Cart from "./_components/Cart";
import { CartProvider } from "./_context/CartContext";
import { AddtoCartProvider } from "./_context/AddtoCartContext";
import { Toaster } from "react-hot-toast";
import { ConvexClientProvider } from "./ConvexClientProvider";

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
				<Toaster
					position='top-center'
					gutter={12}
					containerStyle={{ margin: "8px" }}
					toastOptions={{
						success: { duration: 5000 },
						error: { duration: 5000 },
						style: {
							fontSize: "15px",
							maxWidth: "500px",
							padding: "16px 24px",
							backgroundColor: "var(--color-primary-black)",
							color: "var(--color-primary-white)",
						},
					}}
				/>
			</body>
		</html>
	);
}
