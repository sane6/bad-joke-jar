import { useEffect, useState } from "react"
import { getJarData } from "../../firebase/getJarData"
import { IJarUser } from "../../types/common"
import Button from "../atoms/Button"
import Subtitle from "../atoms/Subtitle"

type Props = {}

function JarTable({}: Props) {
	const [jarData, setJarData] = useState<IJarUser[]>([])
	const [refresh, setRefresh] = useState(false)

	useEffect(() => {
		async function fetchJarData() {
			const result = await getJarData()
			setJarData(result)
		}

		fetchJarData()
	}, [refresh])

	return (
		<div>
			<Subtitle>Jar</Subtitle>

			<table className="w-full overflow-auto">
				<thead>
					<tr>
						<th className="px-2  text-left">name</th>
						<th className="px-2 text-right">owed</th>
						<th className="px-2 text-right">total</th>
					</tr>
				</thead>

				<tbody>
					{jarData.map((user) => (
						<tr
							key={user.name}
							className="py-8 border-slate-600 border-2"
						>
							<td className="px-2">{user.name}</td>
							<td className="px-2 text-right">{user.owed}</td>
							<td className="px-2 text-right">{user.total}</td>
						</tr>
					))}
				</tbody>
			</table>

			<div className="my-4">
				<Button onClick={() => setRefresh((state) => !state)}>
					Refresh
				</Button>
			</div>
		</div>
	)
}

export default JarTable
