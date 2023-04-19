import Articles from "@/components/ColumnPage/Articles";
import RecommendedItems from "@/components/ColumnPage/RecommendedItems";

const ColumnPage = () => {
  return (
    <section className="max-w-screen-lg mx-auto">
      <RecommendedItems />
      <Articles />
    </section>
  );
};

export default ColumnPage;
