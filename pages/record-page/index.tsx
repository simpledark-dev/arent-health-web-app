import Diary from "@/components/RecordPage/Diary";
import EntryButtons from "@/components/RecordPage/EntryButtons";
import ExerciseRecord from "@/components/RecordPage/ExerciseRecord";
import Graph from "@/components/RecordPage/Graph";

const RecordPage = () => {
  return (
    <section className="max-w-screen-lg mx-auto">
      <EntryButtons />
      <Graph />
      <ExerciseRecord />
      <Diary />
    </section>
  );
};

export default RecordPage;
