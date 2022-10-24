import { doc, getDoc } from "firebase/firestore"
import { auth, db } from "../../firebase/app"
import { IJarUser } from "../../types/common"

export async function useGetUserData() {
	const userId = auth.currentUser?.uid

	if (userId) {
		try {
			const userDocRef = doc(db, "users", userId)
			const user = (await (await getDoc(userDocRef)).data()) as IJarUser
			return user
		} catch (error) {
			console.error(error)
		}
	} else {
		return
	}
}
