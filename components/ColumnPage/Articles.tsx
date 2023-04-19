import Image from "next/image";
import column1 from "@/public/images/column-1.jpg";

const Articles = () => {
  return (
    <div className="flex justify-between my-16">
      <div className="w-56 h-36 bg-black">
        <Image className="object-cover" src={column1} alt="col-img" />
        <p>魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</p>
        <p>#魚料理 #和食 #DHA</p>
      </div>
      <div className="w-56 h-36 bg-black"></div>
      <div className="w-56 h-36 bg-black"></div>
      <div className="w-56 h-36 bg-black"></div>
    </div>
  );
};

export default Articles;
