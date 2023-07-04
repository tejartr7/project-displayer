import { PortableTextBlock } from "sanity";

export type Project = {
    Alt: string | undefined;
    alt: string | undefined;
    _id: string;
    createdAt: Date;
    name: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
}