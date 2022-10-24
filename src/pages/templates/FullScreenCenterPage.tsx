import React from "react"

interface Props extends React.PropsWithChildren {}

const FullScreenCenterPage: React.FC<Props> = ({ children }) => {
	return (
		<div className="fixed inset-0 flex justify-center items-center bg-black">
			{children}
		</div>
	)
}

export default FullScreenCenterPage
