import Diary from "@/components/RecordPage/Diary";
import Entries from "@/components/RecordPage/Entries";
import ExerciseRecord from "@/components/RecordPage/ExerciseRecord";
import Graph from "@/components/RecordPage/Graph";

const RecordPage = () => {
  return (
    <section className="max-w-screen-lg mx-auto">
      <Entries />
      <Graph />
      <ExerciseRecord />
      <Diary />
    </section>
  );
};

export default RecordPage;
