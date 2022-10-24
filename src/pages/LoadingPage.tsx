import { faJar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function LoadingPage() {
	return (
		<div className="fixed inset-0 flex justify-center items-center bg-black">
			<FontAwesomeIcon
				icon={faJar}
				className="animate-spin text-8xl"
			/>
		</div>
	)
}

export default LoadingPage
