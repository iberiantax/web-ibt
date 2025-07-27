export interface Post {
    id: string;
    title: string;
    summary: string;
    content: string;
    tags: string;
    meta_title: string;
    meta_description: string;
    url: string;
    language: string;
    image_url: string;
    image_thumbnail_url: string;
    created_at: Date;
}