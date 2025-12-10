import { getDetail } from "$lib/js/microcms";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  return await getDetail(
    params.slug
  );
};

//export const prerender = true;
export const prerender = false; // Add this line