// Hooks
import useFetchGraphData from "@/hooks/useFetchGraphData";

// Components
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import LineChart from "@/components/shared/LineChart";

const BodyRecordGraph = () => {
  const { loading, graphData } = useFetchGraphData();

  return (
    <div className="w-full h-[304px] py-4 mt-16 bg-dark-500 font-light">
      {/* Graph Title */}
      <div className="text-light-100">
        <div className="flex w-48 justify-between mb-2 mx-8">
          <h3 className="w-[2ch]">BODY RECORD</h3>
          <h3 className="text-xl">2021.05.21</h3>
        </div>
      </div>
      {loading ? (
        <LoadingSpinner color="white" />
      ) : (
        <>
          {/* Graph */}
          <div className="w-full bg-dark-500 flex justify-center items-center">
            <LineChart
              data={graphData.lines}
              width={850}
              height={185}
              hatchMarkLabels={graphData.labels}
              colors={["#FFCC21", "#8FE9D0"]}
            />
          </div>
          {/* Graph buttons */}
          <div className="text-primary-300 space-x-4 mx-8">
            <button className="bg-white h-6 w-14 rounded-3xl">日</button>
            <button className="bg-white h-6 w-14 rounded-3xl">週</button>
            <button className="bg-white h-6 w-14 rounded-3xl">月</button>
            <button className="bg-primary-300 text-light-100 h-6 w-14 rounded-3xl">
              年
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BodyRecordGraph;
