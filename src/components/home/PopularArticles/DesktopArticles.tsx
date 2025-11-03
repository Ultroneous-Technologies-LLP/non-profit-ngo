import Image from "next/image";
import { FC } from "react";

import { PopularArticlesProps } from "./type";

export const DesktopArticles: FC<PopularArticlesProps> = ({
  mainArticle,
  sideArticles,
}) => {
  return (
    <div className="gap-16 hidden xl:flex px-4 md:px-6 xl:px-15">
      <div className="max-w-175 w-full z-10">
        <Image
          src={mainArticle.image}
          alt={mainArticle.title}
          width={701}
          height={341}
        />
        <h3 className="font-segoe-regular font-semibold text-[26px]/normal pt-6 pb-4">
          <span>{mainArticle.category}</span>
        </h3>
        <h4 className="font-segoe-regular font-semibold text-4xl/normal pb-4">
          <span>{mainArticle.title}</span>
        </h4>
        <p className="font-segoe-regular text-lg/normal pb-4 line-clamp-2 text-ellipsis text-[#8D8D8D] overflow-hidden h-15">
          <span>{mainArticle.description}</span>
        </p>
        <p className="font-segoe-regular text-base/normal line-clamp-2 text-ellipsis text-[#8D8D8D]">
          <span>{mainArticle.date}</span>
        </p>
      </div>
      <div className="max-w-144.5 w-full space-y-8.5 z-10">
        {sideArticles.map((article, index) => (
          <div key={index} className="flex gap-6.5">
            <div>
              <Image
                src={article.image}
                alt={article.title}
                width={245}
                height={160}
              />
            </div>
            <div className="max-w-76 w-full">
              <h3 className="font-segoe-regular font-semibold text-base/normal py-3.5">
                <span>{article.category}</span>
              </h3>
              <h4 className="font-segoe-regular font-semibold text-lg/normal pb-1 line-clamp-2 text-ellipsis">
                <span>{article.title}</span>
              </h4>
              <p className="font-segoe-regular text-xs/normal text-[#8D8D8D] line-clamp-2 text-ellipsis">
                <span>{article.description}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
