"use client";

function Button({
	children,
	className = "",
	bgColor = "",
	textColor = "text-primary-white",
	onClick = onClick,
}) {
	return (
		<button
			onClick={onClick}
			className={`py-2 px-4 flex items-center justify-center ${className} ${bgColor} ${textColor}`}>
			{children}
		</button>
	);
}

export default Button;
