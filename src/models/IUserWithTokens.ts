// описує поля користувача і токени з відповіді dummyjson на запит логіну
export interface IUserWithTokens {
	firstName: string;
	lastName: string;
	image: string;
	gender: string;
	id: number;
	accessToken: string;
	email: string;
	username: string;
	refreshToken: string;
}

