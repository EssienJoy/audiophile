import About from "./_components/About";
import Categories from "./_components/Categories";
import Home from "./_components/Home";
import Products from "./_components/Products";
import SpeakerCategory from "./_components/SpeakerCategory";

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
