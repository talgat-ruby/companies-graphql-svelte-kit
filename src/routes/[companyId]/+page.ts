import type { PageLoad } from './$types';
import { getCompany } from '$lib/graphql/company';

export const load: PageLoad = async ({ params }) => {
	const companyId = Number(params.companyId);
	const data = await getCompany(companyId);

	console.log('data', data);

	return data;
};
