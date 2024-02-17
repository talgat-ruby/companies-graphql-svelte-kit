import client from '$lib/client';

export const getCompanies = async () => {
	const post = client.query({
		companies: {
			id: true,
			name: true,
			ceo: true,
			founded_year: true,
			type: true
		}
	});

	return post;
};
