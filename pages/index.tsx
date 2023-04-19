import { Inter } from "next/font/google";
import TopPage from "./top-page";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      {/* Load Top page by default */}
      <TopPage />
    </>
  );
};

export default Home;
