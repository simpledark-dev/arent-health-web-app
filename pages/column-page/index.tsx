import Articles from "@/components/ColumnPage/Articles";
import RecommendSelections from "@/components/ColumnPage/RecommendSelections";

const ColumnPage = () => {
  return (
    <section className="max-w-screen-lg mx-auto">
      <RecommendSelections />
      <Articles />
    </section>
  );
};

export default ColumnPage;
