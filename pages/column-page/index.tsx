import Articles from "@/components/ColumnPage/Articles";
import RecommendSelections from "@/components/ColumnPage/RecommendSelections";
import Container from "@/layouts/Container";

const ColumnPage = () => {
  return (
    <Container>
      <RecommendSelections />
      <Articles />
    </Container>
  );
};

export default ColumnPage;
