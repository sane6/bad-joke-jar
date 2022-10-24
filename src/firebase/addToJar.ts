import { doc, getDoc, updateDoc } from "firebase/firestore"
import { IJarUser } from "../types/common"
import { db } from "./app"

export async function addToJar(userId: string, addAmount: number) {
	try {
		const userDocRef = doc(db, "users", userId)
		const user = (await (await getDoc(userDocRef)).data()) as IJarUser

		await updateDoc(userDocRef, {
			owed: user.owed + addAmount,
			total: user.total + addAmount,
		})

		return
	} catch (error) {
		console.log(error)
	}
}
