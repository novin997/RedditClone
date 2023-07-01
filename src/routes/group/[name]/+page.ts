import type { PageLoad } from './$types.js';

// export interface PageLoadProps {
//     post: {
//         title: string;
//     }
// }

export const load : PageLoad = ({params}) => {
    return {
        post: {
            title: `${params.name}`
        }
    }
}