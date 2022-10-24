import { doc, updateDoc } from "firebase/firestore"
import { db } from "./app"

export async function clearDebtFromJar(userId: string) {
	try {
		const userDocRef = doc(db, "users", userId)

		await updateDoc(userDocRef, { owed: 0 })

		return
	} catch (error) {
		console.error(error)
		return
	}
}
