import Categories from "./_components/Categories";
import SpeakerCategory from "@/app/_components/SpeakerCategory";
import Products from "@/app/_components/Products";
import About from "@/app/_components/About";
import Home from "./_components/Home";

export default function Page() {
	return (
		<>
			<Home />
			<Categories />
			<SpeakerCategory />
			<Products />
			<About />
		</>
	);
}
