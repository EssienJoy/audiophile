import NextLink from "next/link";


function Link({ children,
    className = '',
    bgColor = 'bg-primary-orange',
    textColor = 'text-primary-white',
    href = href
}) {
    return (
        <NextLink className={`py-2 px-4 text-sm flex items-center justify-center ${className} ${bgColor} ${textColor}`} href={href}>
            {children}
        </NextLink>
    );
}

export default Link;
