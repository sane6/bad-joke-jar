import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth, authProvider } from "../../firebase/app"
import { createUserInDb } from "../../firebase/createUserInDb"

export async function useSignInWithGoogle() {
	try {
		const result = await signInWithPopup(auth, authProvider)

		const credential = GoogleAuthProvider.credentialFromResult(result)
		const user = result.user

		createUserInDb(user.uid, user.displayName || "Annonymous")
	} catch (error) {
		console.error("Error in authentication", error)
	}
}
