import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../firebase/app"
import { IJarUser } from "../types/common"

export async function createUserInDb(userId: string, userName: string) {
	const docRef = doc(db, "users", userId)
	const docSnap = await getDoc(docRef)

	if (docSnap.exists()) {
		console.warn("this user already exists")
	} else {
		const newDoc: IJarUser = {
			name: userName,
			owed: 0,
			total: 0,
		}

		try {
			await setDoc(doc(db, "users", userId), newDoc)
			console.log("created user in db", newDoc)
		} catch (error) {
			console.error("failed to create document", error)
		}
	}
}
