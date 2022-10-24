import { collection, getDocs } from "firebase/firestore"
import { IJarUser } from "../types/common"
import { db } from "./app"

export async function getJarData() {
	try {
		const data = await getDocs(collection(db, "users"))
		const result: IJarUser[] = []

		data.forEach((doc) => {
			result.push(doc.data() as IJarUser)
		})

		return result
	} catch (error) {
		console.error(error)
		return []
	}
}
