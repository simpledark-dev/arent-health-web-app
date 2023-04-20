import useFetchDiary from "@/hooks/useFetchDiary";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import SeeMoreButton from "@/components/shared/SeeMoreButton";

interface DiaryCardProps {
  date: string;
  time: string;
  contentIntro: string;
  content: string;
}

const DiaryCard = ({ date, time, contentIntro, content }: DiaryCardProps) => {
  return (
    <div className="w-56 aspect-square border border-[#707070] p-4">
      <h4 className="text-lg font-light">{date}</h4>
      <h4 className="text-lg font-light">{time}</h4>
      <div className="text-xs font-light mt-2">
        <p>{contentIntro}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Diary = () => {
  const { diaryList, loading } = useFetchDiary();
  return (
    <div className="my-16 space-y-4">
      <h3 className="text-xl font-light"> MY DIARY</h3>
      <div className="flex flex-wrap justify-between gap-3">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {diaryList?.map((diary) => {
              return (
                <DiaryCard
                  key={diary.id}
                  date={diary.date}
                  time={diary.time}
                  contentIntro={diary.contentIntro}
                  content={diary.content}
                />
              );
            })}
            {diaryList && diaryList?.length >= 8 && (
              <SeeMoreButton text="自分の日記をもっと見る" />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Diary;
