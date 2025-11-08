function Input({ type, defaultValue, className = "" }) {
	return (
		<input
			type={type}
			defaultValue={defaultValue}
			className={`${className} py-2 px-4 text-primary-black border border-[#CFCFCF] border-solid rounded-lg focus:border-primary-orange focus:border-2 focus:outline-none`}
		/>
	);
}

export default Input;
