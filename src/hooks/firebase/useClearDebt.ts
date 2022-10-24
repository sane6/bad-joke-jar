import { auth } from "../../firebase/app"
import { clearDebtFromJar } from "../../firebase/clearDebtFromJar"

export async function useClearDebt() {
	console.log("clear started")

	if (auth.currentUser?.uid) {
		await clearDebtFromJar(auth.currentUser.uid)
		console.log("cleared")
	} else {
		console.error("failed to clear")
	}
}
