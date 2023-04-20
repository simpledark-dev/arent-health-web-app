import Diary from "@/components/RecordPage/Diary";
import Entries from "@/components/RecordPage/Entries";
import ExerciseRecord from "@/components/RecordPage/ExerciseRecord";
import Graph from "@/components/RecordPage/Graph";
import Container from "@/layouts/Container";

const RecordPage = () => {
  return (
    <Container>
      <Entries />
      <Graph />
      <ExerciseRecord />
      <Diary />
    </Container>
  );
};

export default RecordPage;
