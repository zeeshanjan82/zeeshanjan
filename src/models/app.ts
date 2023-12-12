
export interface ICustomer {
	customerID: '',
	customerName: '',
}

export const app = {
	state: {
		theme: 'light',
	},
	reducers: {
		setTheme: (state: any, theme: string) => {
			return {
				...state,
				theme,
			};
		},
	}
}