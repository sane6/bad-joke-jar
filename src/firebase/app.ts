// [ ] DO I NEED ANALITICS???

import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: "bad-joke-jar.firebaseapp.com",
	projectId: "bad-joke-jar",
	storageBucket: "bad-joke-jar.appspot.com",
	messagingSenderId: "584852570744",
	appId: "1:584852570744:web:b2687f4623ae02eaf9e38d",
	measurementId: "G-GLM00M48Z2",
}

// FIREBASE APP INSTANCE
export const app = initializeApp(firebaseConfig)

// auth
export const auth = getAuth(app)
export const authProvider = new GoogleAuthProvider()

// firestore
export const db = getFirestore(app)

// const analytics = getAnalytics(app)
