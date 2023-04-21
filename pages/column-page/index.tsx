import Container from "@/layouts/Container";
import Articles from "@/components/ColumnPage/Articles";
import RecommendSelections from "@/components/ColumnPage/RecommendSelections";

const ColumnPage = () => {
  return (
    <Container>
      <RecommendSelections />
      <Articles />
    </Container>
  );
};

export default ColumnPage;
