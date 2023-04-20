import Image from "next/image";
import { RecommendedImages } from "@/public/images";

const EntryCard = ({
  header,
  buttonText,
  image,
  imageObjectPosition,
}: {
  header: string;
  buttonText: string;
  image: any;
  imageObjectPosition: string;
}) => {
  return (
    <div className="bg-amber-400 w-1/2 md:w-[calc(33.3%-1.5rem)] p-6">
      <div className="relative aspect-square">
        <Image
          className={`h-full object-cover ${imageObjectPosition} grayscale`}
          src={image}
          alt="entry"
        />
        <div className="absolute top-0 h-full aspect-square bg-[#2E2E2E] opacity-80" />
        <div className="absolute top-[50%] -translate-y-1/2 left-0 right-0 mx-auto">
          <div className="flex flex-col items-center space-y-2">
            <h4 className="text-[#FFCC21] text-lg sm:text-2xl font-light tracking-wider">
              {header}
            </h4>
            <button className="bg-[#FF963C] text-white font-light text-xs sm:text-sm h-6 px-4">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Entries = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-6 mt-16">
      {/* BODY RECORD */}
      <EntryCard
        header="BODY RECORD"
        buttonText="自分のカラダの記録"
        image={RecommendedImages.MyRecommend1}
        imageObjectPosition="object-left"
      />

      {/* MY EXERCISE */}
      <EntryCard
        header="MY EXERCISE"
        buttonText="自分の運動の記録"
        image={RecommendedImages.MyRecommend2}
        imageObjectPosition="object-left"
      />

      {/* MY DIARY */}
      <EntryCard
        header="MY DIARY"
        buttonText="自分の日記"
        image={RecommendedImages.MyRecommend3}
        imageObjectPosition="object-center"
      />
    </div>
  );
};

export default Entries;
