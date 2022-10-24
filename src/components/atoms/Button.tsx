import React from "react"

interface Props extends React.PropsWithChildren {
	onClick?: () => void
	danger?: boolean
}

function Button({ children, onClick }: Props) {
	return (
		<button
			onClick={onClick}
			className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 focus:outline-1 focus:outline-offset-2 focus:outline-yellow-400 focus:outline-none text-black"
		>
			{children}
		</button>
	)
}

export default Button
