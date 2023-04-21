import Container from "@/layouts/Container";
import Diary from "@/components/RecordPage/Diary";
import Entries from "@/components/RecordPage/Entries";
import ExerciseRecord from "@/components/RecordPage/ExerciseRecord";
import BodyRecordGraph from "@/components/RecordPage/BodyRecordGraph";

const RecordPage = () => {
  return (
    <Container>
      <Entries />
      <BodyRecordGraph />
      <ExerciseRecord />
      <Diary />
    </Container>
  );
};

export default RecordPage;
