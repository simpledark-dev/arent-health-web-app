import LineChart from "../shared/LineChart";
import LoadingSpinner from "../shared/LoadingSpinner";
import useFetchGraphData from "@/hooks/useFetchGraphData";

const BodyRecordGraph = () => {
  const { loading, graphData } = useFetchGraphData();

  return (
    <div className="w-full h-[304px] py-4 mt-16 bg-[#414141] font-light">
      <div className="text-white">
        <div className="flex w-48 justify-between mb-2 mx-8">
          <h3 className="w-[2ch]">BODY RECORD</h3>
          <h3 className="text-xl">2021.05.21</h3>
        </div>
      </div>
      {loading ? (
        <LoadingSpinner color="white" />
      ) : (
        <>
          <div className="w-full bg-[#414141] flex justify-center items-center">
            <LineChart
              data={graphData.lines}
              width={850}
              height={185}
              hatchMarkLabels={graphData.labels}
              colors={["#FFCC21", "#8FE9D0"]}
            />
          </div>
          <div className="text-[#FFCC21] space-x-4 mx-8">
            <button className="bg-white h-6 w-14 rounded-3xl">日</button>
            <button className="bg-white h-6 w-14 rounded-3xl">週</button>
            <button className="bg-white h-6 w-14 rounded-3xl">月</button>
            <button className="bg-[#FFCC21] text-white h-6 w-14 rounded-3xl">
              年
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BodyRecordGraph;
