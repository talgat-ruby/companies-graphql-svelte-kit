import type { PageLoad } from './$types';
import { getCompanies } from '$lib/graphql/companies';

export const load: PageLoad = async () => {
	const data = await getCompanies();

	return data;
};
