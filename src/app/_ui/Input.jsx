function Input({ type, defaulltVailue, className = "" }) {
	return (
		<input
			type={type}
			defaultValue={defaulltVailue}
			className={`${className} py-2 px-4 text-primary-black border border-[#CFCFCF] border-solid rounded-lg active:border-primary-orange`}
		/>
	);
}

export default Input;
