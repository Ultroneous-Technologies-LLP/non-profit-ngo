import Image from "next/image";
import { FC } from "react";

import { PopularArticlesProps } from "./type";

export const DesktopArticles: FC<PopularArticlesProps> = ({ mainArticle, sideArticles }) => (
  <div className="hidden gap-16 px-4 md:px-6 xl:flex xl:px-15">
    <div className="z-10 w-full max-w-175">
      <Image alt={mainArticle.title} height={341} src={mainArticle.image} width={701} />
      <h3 className="font-segoe-regular pt-6 pb-4 text-[26px]/normal font-semibold">
        <span>{mainArticle.category}</span>
      </h3>
      <h4 className="font-segoe-regular pb-4 text-4xl/normal font-semibold">
        <span>{mainArticle.title}</span>
      </h4>
      <p className="font-segoe-regular line-clamp-2 h-15 overflow-hidden pb-4 text-lg/normal text-ellipsis text-[#8D8D8D]">
        <span>{mainArticle.description}</span>
      </p>
      <p className="font-segoe-regular line-clamp-2 text-base/normal text-ellipsis text-[#8D8D8D]">
        <span>{mainArticle.date}</span>
      </p>
    </div>
    <div className="z-10 w-full max-w-144.5 space-y-8.5">
      {sideArticles.map((article, index) => (
        <div className="flex gap-6.5" key={index}>
          <div>
            <Image alt={article.title} height={160} src={article.image} width={245} />
          </div>
          <div className="w-full max-w-76">
            <h3 className="font-segoe-regular py-3.5 text-base/normal font-semibold">
              <span>{article.category}</span>
            </h3>
            <h4 className="font-segoe-regular line-clamp-2 pb-1 text-lg/normal font-semibold text-ellipsis">
              <span>{article.title}</span>
            </h4>
            <p className="font-segoe-regular line-clamp-2 text-xs/normal text-ellipsis text-[#8D8D8D]">
              <span>{article.description}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
