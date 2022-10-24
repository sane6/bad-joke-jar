import Button from "../components/atoms/Button"
import FullScreenCenterPage from "./templates/FullScreenCenterPage"
import { useSignInWithGoogle } from "../hooks/firebase/useSignInWithGoogle"

function SignInPage() {
	return (
		<FullScreenCenterPage>
			<Button onClick={useSignInWithGoogle}>Sign In With Google</Button>
		</FullScreenCenterPage>
	)
}

export default SignInPage
