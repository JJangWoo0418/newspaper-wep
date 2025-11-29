export type Article = {
    id: string;
    title: string;
    summary: string;
    content: string;
    category: string;
    reporter? : string;
    date?: string;
    imageUrl?: string;
    source?: string;
    link?: string;
};