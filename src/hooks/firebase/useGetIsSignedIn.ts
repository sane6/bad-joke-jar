import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../firebase/app"

export function useGetIsSignedIn() {
	onAuthStateChanged(auth, (user) => {
		if (user) {
			return true
		} else {
			return false
		}
	})
}
