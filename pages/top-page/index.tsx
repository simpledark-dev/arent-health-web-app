import Navbar from "@/components/Navbar";
import MealHistory from "@/components/TopPage/MealHistory";
import Overview from "@/components/TopPage/Overview";

const TopPage = () => {
  return (
    <>
      <Navbar />
      <Overview />
      <MealHistory />
    </>
  );
};

export default TopPage;
