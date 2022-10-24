import { addToJar } from "../../firebase/addToJar"
import { auth } from "../../firebase/app"
import { useClearDebt } from "../../hooks/firebase/useClearDebt"
import { useSignOut } from "../../hooks/firebase/useSignOut"
import Button from "../atoms/Button"
import Subtitle from "../atoms/Subtitle"

type Props = {}

function Actions({}: Props) {
	function handleAddToJar(addAmount: number) {
		addToJar(auth.currentUser?.uid || "", addAmount)
	}

	return (
		<>
			<Subtitle>Actions</Subtitle>

			<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
				<Button onClick={() => handleAddToJar(1)}>
					+1 for bad joke
				</Button>
				<Button onClick={() => handleAddToJar(2)}>
					+2 for bad joke
				</Button>
				<Button onClick={() => handleAddToJar(5)}>
					+5 for racist joke
				</Button>
				<Button onClick={useClearDebt}>clear</Button>
				<Button onClick={useSignOut}>sign out</Button>
			</div>
		</>
	)
}

export default Actions
