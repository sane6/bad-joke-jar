import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { auth } from "./firebase/app"
import HomePage from "./pages/HomePage"
import LoadingPage from "./pages/LoadingPage"
import SignInPage from "./pages/SignInPage"
import WitdthContainer from "./components/containers/WitdthContainer"
import { ISignInStatus } from "./types/common"

function App() {
	const [isSignedIn, setIsSignedIn] = useState<ISignInStatus>(
		ISignInStatus.loading
	)

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				setIsSignedIn(ISignInStatus.signedIn)
			} else {
				setIsSignedIn(ISignInStatus.signedOut)
			}
		})

		return () => {
			unsubscribe()
		}
	}, [])

	if (isSignedIn === ISignInStatus.loading) {
		return <LoadingPage />
	}

	return (
		<BrowserRouter>
			<WitdthContainer>
				<Routes>
					<Route
						path="/"
						element={
							isSignedIn === ISignInStatus.signedIn ? (
								<HomePage />
							) : (
								<Navigate to="/signin" />
							)
						}
					/>

					<Route
						path="/signin"
						element={
							isSignedIn === ISignInStatus.signedOut ? (
								<SignInPage />
							) : (
								<Navigate to="/" />
							)
						}
					/>
				</Routes>
			</WitdthContainer>
		</BrowserRouter>
	)
}

export default App
