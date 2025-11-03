import { Image } from "@/types";

export interface Article {
  alt: string;
  category: string;
  description: string;
  image: string;
  title: string;
  date?: string;
  id?: number;
}

export interface PopularArticlesProps {
  mainArticle: Article;
  sideArticles: Article[];
  backgroundImage?: Image;
  title?: string;
}
