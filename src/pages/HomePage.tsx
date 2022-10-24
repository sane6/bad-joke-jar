import Actions from "../components/molecules/Actions"
import JarTable from "../components/molecules/JarTable"
import ProfileHero from "../components/molecules/ProfileHero"

function HomePage() {
	return (
		<div>
			<ProfileHero />
			<Actions />
			<JarTable />
		</div>
	)
}

export default HomePage
