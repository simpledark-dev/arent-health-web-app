import { useState } from "react";
import Image from "next/image";
import morningHex from "@/public/assets/morning_component_hex.svg";
import lunchHex from "@/public/assets/lunch_component_hex.svg";
import dinnerHex from "@/public/assets/dinner_component_hex.svg";
import snackHex from "@/public/assets/snack_component_hex.svg";

import useFetchMealHistory from "@/hooks/useFetchMealHistory";

import { formateDateMonth } from "@/utils/dateTime";
import SeeMoreButton from "../SeeMoreButton";
import LoadingSpinner from "../LoadingSpinner";

const FilterButtons = ({ setFilter }: { setFilter: any }) => {
  return (
    <div className="flex justify-center gap-16">
      <Image
        className="hover:translate-x-1 hover:-translate-y-1 hover:cursor-pointer"
        src={morningHex}
        alt="morning-hex"
        onClick={() => setFilter("Morning")}
      />
      <Image
        className="hover:translate-x-1 hover:-translate-y-1 hover:cursor-pointer"
        src={lunchHex}
        alt="lunch-hex"
        onClick={() => setFilter("Lunch")}
      />
      <Image
        className="hover:translate-x-1 hover:-translate-y-1 hover:cursor-pointer"
        src={dinnerHex}
        alt="dinner-hex"
        onClick={() => setFilter("Dinner")}
      />
      <Image
        className="hover:translate-x-1 hover:-translate-y-1 hover:cursor-pointer"
        src={snackHex}
        alt="snack-hex"
        onClick={() => setFilter("Snack")}
      />
    </div>
  );
};

interface MealCardProps {
  image: any;
  date: number;
  month: number;
  type: string;
}

const MealCard = ({ image, date, month, type }: MealCardProps) => {
  return (
    <div className="relative ">
      <Image
        className="w-[14.625rem] aspect-square object-cover"
        src={image}
        alt="meal"
      />
      <div
        className="absolute bottom-0 left-0 w-1/2 h-8 bg-[#FFCC21] flex justify-center items-center
  text-white font-light text-[0.9rem]"
      >
        {formateDateMonth(date, month)}.{type}
      </div>
    </div>
  );
};

const MealHistory = () => {
  const { mealList, loading } = useFetchMealHistory();
  const [filter, setFilter] = useState("Morning");

  const filteredMealList = mealList
    ? mealList.filter((meal) => meal.type === filter)
    : [];

  return (
    <section className="max-w-screen-lg mx-auto mt-8 mb-16 space-y-6">
      <FilterButtons setFilter={setFilter} />
      <div className="flex flex-wrap justify-center gap-2">
        {loading ? (
          <LoadingSpinner />
        ) : (
          filteredMealList?.map((meal) => {
            if (!meal) return <></>;

            return (
              <MealCard
                key={meal.id}
                image={meal.image}
                date={meal.time.date}
                month={meal.time.month}
                type={meal.type}
              />
            );
          })
        )}
      </div>
      {mealList && mealList.length >= 8 && (
        <SeeMoreButton text={"記録をもっと見る"} />
      )}
    </section>
  );
};

export default MealHistory;
