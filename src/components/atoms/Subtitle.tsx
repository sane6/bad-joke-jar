import React from "react"

interface Props extends React.PropsWithChildren {}

function Subtitle({ children }: Props) {
	return <h2 className="my-4 text-2xl text-center">{children}</h2>
}

export default Subtitle
