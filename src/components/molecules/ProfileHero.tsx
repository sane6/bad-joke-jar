import { doc, onSnapshot } from "firebase/firestore"
import { useState, useEffect } from "react"
import { auth, db } from "../../firebase/app"
import { IJarUser } from "../../types/common"
import Title from "../atoms/Title"

type Props = {}

function ProfileHero({}: Props) {
	const [jarUserData, setJarUserData] = useState<IJarUser | undefined>(
		undefined
	)
	const [userPhoto] = useState(auth.currentUser?.photoURL || "")

	useEffect(() => {
		const unsubscribe = onSnapshot(
			doc(db, "users", auth.currentUser?.uid || ""),
			(doc) => {
				const updatedUser = doc.data() as IJarUser

				setJarUserData(updatedUser)
			}
		)

		return () => {
			unsubscribe()
		}
	}, [])

	if (!jarUserData) {
		return <div>loading</div>
	}

	return (
		<div className="flex flex-col items-center my-8">
			<img
				src={userPhoto}
				alt={jarUserData.name}
				className="w-24 rounded-full"
			/>

			<Title>{jarUserData.name}</Title>

			<div className="w-full my-8 flex justify-around">
				<div className="flex flex-col items-center">
					<span>Owed to jar:</span>
					<span>{jarUserData.owed}</span>
				</div>
				<div className="flex flex-col items-center">
					<span>Total:</span>
					<span>{jarUserData.total}</span>
				</div>
			</div>
		</div>
	)
}

export default ProfileHero
