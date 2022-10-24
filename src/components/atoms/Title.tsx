import React from "react"

interface Props extends React.PropsWithChildren {}

function Title({ children }: Props) {
	return <h1 className="my-4 text-2xl">{children}</h1>
}

export default Title
