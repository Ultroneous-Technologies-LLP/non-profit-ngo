import { Image } from "@/types";

export interface Article {
  id?:number
  image: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  date?: string;
}

export interface PopularArticlesProps {
  title?: string;
  mainArticle: Article;
  sideArticles: Article[];
  backgroundImage?:Image
}
