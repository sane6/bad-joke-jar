import { signOut } from "firebase/auth"
import { auth } from "../../firebase/app"

export function useSignOut() {
	signOut(auth)
}
