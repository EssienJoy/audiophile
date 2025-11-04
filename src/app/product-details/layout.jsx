import About from "../_components/About";
import Categories from "../_components/Categories";

function layout({ children }) {
	return (
		<>
			{children}
			<Categories />
			<About />
		</>
	);
}

export default layout;
