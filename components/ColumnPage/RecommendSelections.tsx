interface RecommendationCard {
  texts: {
    en: string;
    jp: string;
  };
}

const RecommendationCard = ({ texts }: RecommendationCard) => {
  return (
    <div className="w-[275px] sm:w-[calc(50%-2rem)] md:w-[calc(25%-2rem)] h-36 bg-[#2E2E2E] flex flex-col justify-center items-center">
      <div className="text-center space-y-2">
        <h3 className="text-[#FFCC21] text-[22px] font-light tracking-wider">
          {texts.en}
        </h3>
        <hr className="w-14 mx-auto" />
        <h3 className="text-white">{texts.jp}</h3>
      </div>
    </div>
  );
};

const RecommendSelections = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-8 mt-16">
      <RecommendationCard
        texts={{ en: "RECOMMENDED COLUMN", jp: "オススメ" }}
      />
      <RecommendationCard
        texts={{ en: "RECOMMENDED DIET", jp: "ダイエット" }}
      />
      <RecommendationCard texts={{ en: "RECOMMENDED BEAUTY", jp: "美容" }} />
      <RecommendationCard texts={{ en: "RECOMMENDED HEALTH", jp: "健康" }} />
    </div>
  );
};

export default RecommendSelections;
