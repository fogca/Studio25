import { getList } from "$lib/js/microcms";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return await getList();
};

export const prerender = true;