export enum ISignInStatus {
	loading,
	signedIn,
	signedOut,
}

export interface IJarUser {
	name: string
	owed: number
	total: number
}
