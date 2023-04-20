import Image from "next/image";
import MyRecommend1 from "@/public/images/MyRecommend-1.jpg";
import MyRecommend2 from "@/public/images/MyRecommend-2.jpg";
import MyRecommend3 from "@/public/images/MyRecommend-3.jpg";

const Entries = () => {
  return (
    <div className="flex justify-between gap-12 mt-16">
      {/* BODY RECORD */}
      <div className="bg-amber-400 w-72 p-6">
        <div className="relative aspect-square">
          <Image
            className="h-full object-cover object-left grayscale"
            src={MyRecommend1}
            alt="entry"
          />
          <div className="absolute top-0 h-full aspect-square bg-[#2E2E2E] opacity-80" />
          <div className="absolute top-[50%] -translate-y-1/2 left-0 right-0 mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <h4 className="text-[#FFCC21] text-2xl font-light tracking-wider">
                BODY RECORD
              </h4>
              <button className="bg-[#FF963C] text-white font-light text-sm h-6 px-4">
                自分のカラダの記録
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MY EXERCISE */}
      <div className="bg-amber-400 w-72 p-6">
        <div className="relative aspect-square">
          <Image
            className="h-full object-cover object-left grayscale"
            src={MyRecommend2}
            alt="entry"
          />
          <div className="absolute top-0 h-full aspect-square bg-[#2E2E2E] opacity-80" />
          <div className="absolute top-[50%] -translate-y-1/2 left-0 right-0 mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <h4 className="text-[#FFCC21] text-2xl font-light tracking-wider">
                MY EXERCISE
              </h4>
              <button className="bg-[#FF963C] text-white font-light text-sm h-6 px-4">
                自分の運動の記録
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MY DIARY */}
      <div className="bg-amber-400 w-72 p-6">
        <div className="relative aspect-square">
          <Image
            className="h-full object-cover object-center grayscale"
            src={MyRecommend3}
            alt="entry"
          />
          <div className="absolute top-0 h-full aspect-square bg-[#2E2E2E] opacity-80" />
          <div className="absolute top-[50%] -translate-y-1/2 left-0 right-0 mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <h4 className="text-[#FFCC21] text-2xl font-light tracking-wider">
                MY EXERCISE
              </h4>
              <button className="bg-[#FF963C] text-white font-light text-sm h-6 px-4">
                自分の日記
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entries;
