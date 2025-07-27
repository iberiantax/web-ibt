import {api} from "~/api/api";
import type {Post} from "~/interfaces/post.interface";

export const getPostsAction = async (page: number = 1) => {
    try {
        const limit = 10;

        const { data } = await api.get<Post[]>(
            `?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0`,
        );

        return data;
    } catch (error) {
        console.log(error);
        throw new Error('Error getting posts');
    }
};
