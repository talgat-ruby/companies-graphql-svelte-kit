import client from '$lib/client';

export const getCompany = async (id: number) => {
	const post = client.query({
		companies_by_pk: {
			__args: {
				id
			},
			id: true,
			name: true,
			ceo: true,
			products: {
				name: true
			}
		}
	});

	return post;
};
