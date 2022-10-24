import {
	getRedirectResult,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
} from "firebase/auth"
import { Provider } from "react-redux"
import { auth, authProvider } from "../../firebase/app"
import { createUserInDb } from "../../firebase/createUserInDb"

export async function useSignInWithGoogle() {
	try {
		// const result = await signInWithPopup(auth, authProvider)

		// const credential = GoogleAuthProvider.credentialFromResult(result)
		// const user = result.user

		// createUserInDb(user.uid, user.displayName || "Annonymous")

		await signInWithRedirect(auth, authProvider)

		try {
			const result = await getRedirectResult(auth)

			const user = result?.user

			if (user) {
				createUserInDb(user.uid, user.displayName || "Annonymous")
			} else {
				console.log("foo")
			}
		} catch (error) {
			console.error(error)
		}
	} catch (error) {
		console.error("Error in authentication", error)
	}
}
