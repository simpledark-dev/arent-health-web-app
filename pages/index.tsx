import Image from "next/image";
import { Inter } from "next/font/google";
import TopPage from "./top-page";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <TopPage />
    </>
  );
};

export default Home;
