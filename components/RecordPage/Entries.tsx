import Image from "next/image";
import MyRecommend1 from "@/public/images/MyRecommend-1.jpg";
import MyRecommend2 from "@/public/images/MyRecommend-2.jpg";
import MyRecommend3 from "@/public/images/MyRecommend-3.jpg";

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
    <div className="bg-amber-400 w-72 p-6">
      <div className="relative aspect-square">
        <Image
          className={`h-full object-cover ${imageObjectPosition} grayscale`}
          src={image}
          alt="entry"
        />
        <div className="absolute top-0 h-full aspect-square bg-[#2E2E2E] opacity-80" />
        <div className="absolute top-[50%] -translate-y-1/2 left-0 right-0 mx-auto">
          <div className="flex flex-col items-center space-y-2">
            <h4 className="text-[#FFCC21] text-2xl font-light tracking-wider">
              {header}
            </h4>
            <button className="bg-[#FF963C] text-white font-light text-sm h-6 px-4">
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
    <div className="flex justify-between gap-12 mt-16">
      {/* BODY RECORD */}
      <EntryCard
        header="BODY RECORD"
        buttonText="自分のカラダの記録"
        image={MyRecommend1}
        imageObjectPosition="object-left"
      />

      {/* MY EXERCISE */}
      <EntryCard
        header="MY EXERCISE"
        buttonText="自分の運動の記録"
        image={MyRecommend2}
        imageObjectPosition="object-left"
      />

      {/* MY DIARY */}
      <EntryCard
        header="MY DIARY"
        buttonText="自分の日記"
        image={MyRecommend3}
        imageObjectPosition="object-center"
      />
    </div>
  );
};

export default Entries;
