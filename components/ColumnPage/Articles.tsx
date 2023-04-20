import Image from "next/image";
import SeeMoreButton from "../SeeMoreButton";
import usefetchArticles from "@/hooks/usefetchArticles";
import LoadingSpinner from "../LoadingSpinner";

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
    <div className="w-56">
      {/* Image container */}
      <div className="relative h-36">
        <Image className="h-full object-cover" src={image} alt="article-img" />
        <div
          className="absolute bottom-0 left-0 w-[60%] h-6 px-2 bg-[#FFCC21] 
            flex justify-between items-center
            text-white font-light text-[0.9rem]"
        >
          <span>{date}</span> <span>{time}</span>
        </div>
      </div>

      {/* Texts */}
      <div className="font-light space-y-2 my-2">
        <p className="text-sm">{title}</p>
        <p className="text-xs text-[#FF963C] space-x-2">
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
      <div className="flex flex-wrap justify-between ">
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
