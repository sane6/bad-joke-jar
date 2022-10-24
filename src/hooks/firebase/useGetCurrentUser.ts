import { auth } from "../../firebase/app"

export function useGetCurrentUser() {
	return auth.currentUser
}
