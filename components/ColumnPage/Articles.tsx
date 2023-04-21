import Image from "next/image";
import SeeMoreButton from "@/components/shared/SeeMoreButton";
import usefetchArticles from "@/hooks/usefetchArticles";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

interface ArticleCardProps {
  date: string;
  time: string;
  title: string;
  image: any;
  hashtags: string[];
}

const ArticleCard = ({
  date,
  time,
  title,
  image,
  hashtags,
}: ArticleCardProps) => {
  return (
    <div className="w-[30rem] sm:w-[calc(33.3%-0.5rem)] md:w-[calc(25%-0.5rem)]">
      {/* Image container */}
      <div className="relative h-72 sm:h-36">
        <Image className="h-full object-cover" src={image} alt="article-img" />
        <div
          className="absolute bottom-0 left-0 w-[60%] h-6 px-2 bg-primary-300 
            flex justify-between items-center
            text-light-100 font-light text-[0.9rem]"
        >
          <span>{date}</span> <span>{time}</span>
        </div>
      </div>

      {/* Texts */}
      <div className="font-light space-y-2 my-2">
        <p className="text-sm">{title}</p>
        <p className="text-xs text-primary-400 space-x-2">
          {hashtags.map((hashtag) => (
            <span key={hashtag}>{hashtag}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

const Articles = () => {
  const { articleList, loading } = usefetchArticles();

  return (
    <div className="my-16">
      <div className="flex flex-wrap justify-center md:justify-between gap-2">
        {loading ? (
          <LoadingSpinner />
        ) : (
          articleList?.map((article) => {
            return (
              <ArticleCard
                key={article.id}
                image={article.image}
                title={article.title}
                date={article.date}
                time={article.time}
                hashtags={article.hashtags}
              />
            );
          })
        )}
      </div>
      {articleList && articleList?.length >= 8 && (
        <SeeMoreButton text="コラムをもっと見る" />
      )}
    </div>
  );
};

export default Articles;
