import { MealImages } from "@/public/images";
import Image from "next/image";
import LineChart from "@/components/shared/LineChart";
import useFetchGraphData from "@/hooks/useFetchGraphData";
import LoadingSpinner from "../shared/LoadingSpinner";
import useFetchAchievementRate from "@/hooks/useFetchAchievementRate";

const CircularProgress = ({ progress }: { progress: number }) => {
  const { loading, achievementRate } = useFetchAchievementRate();
  return (
    <div
      className="absolute top-[50%] -translate-y-1/2 left-0 right-0 mx-auto radial-progress text-white flex items-center gap-1"
      // @ts-ignore
      style={{ "--size": "11rem", "--value": progress, "--thickness": "3px" }}
    >
      {loading ? (
        <span className="tracking-widest">Loading...</span>
      ) : (
        <div className="space-x-1">
          <span className="font-light">05/21</span>
          <span className="text-2xl">{progress}%</span>
          <div />
        </div>
      )}
    </div>
  );
};

const Overview = () => {
  const { loading, graphData } = useFetchGraphData();

  return (
    <section>
      <div className="flex flex-wrap">
        <div className="sm:w-[42%] max-h-80 ">
          <div className="relative h-full bg-gradient-to-br from-yellow-300/10 to-yellow-500/30 saturate-150 brightness-100">
            <Image
              className=" z-10 h-full object-cover mix-blend-soft-light"
              src={MealImages.mealImg1}
              alt="Achievement rate bg"
            />
            <CircularProgress progress={75} />
          </div>
        </div>
        <div className="bg-[#2E2E2E] w-full h-80 sm:w-[58%] px-8 flex justify-center items-center">
          {loading ? (
            <LoadingSpinner color="white" />
          ) : (
            <LineChart
              data={graphData.lines}
              width={700}
              height={285}
              hatchMarkLabels={graphData.labels}
              colors={["#FFCC21", "#8FE9D0"]}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Overview;
