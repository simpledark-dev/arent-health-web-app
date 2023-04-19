import d01 from "@/public/images/d01.jpg";
import Image from "next/image";

//background: linear-gradient(225deg, #FFCC21 0%, #FF963C 100%);
const Overview = () => {
  return (
    <section>
      <div className="flex">
        <div className="w-[42%] max-h-80 ">
          <div className="h-full bg-gradient-to-br from-yellow-300/10 to-yellow-500/30 saturate-150 brightness-100">
            <Image
              className="relative z-10 h-full object-cover mix-blend-soft-light"
              src={d01}
              alt="Achievement rate bg"
            />
          </div>
        </div>
        <div className="bg-gray-200 w-[58%] border">Graph</div>
      </div>
    </section>
  );
};

export default Overview;
