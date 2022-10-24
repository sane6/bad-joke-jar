import React from "react"

interface Props extends React.PropsWithChildren {}

function WitdthContainer({ children }: Props) {
	return <div className="max-w-screen-lg mx-auto px-2">{children}</div>
}

export default WitdthContainer
