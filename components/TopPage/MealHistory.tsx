import { useState } from "react";
import Image from "next/image";
import morningHex from "@/public/assets/morning_component_hex.svg";
import lunchHex from "@/public/assets/lunch_component_hex.svg";
import dinnerHex from "@/public/assets/dinner_component_hex.svg";
import snackHex from "@/public/assets/snack_component_hex.svg";

import useFetchMealHistory from "@/hooks/useFetchMealHistory";

import { formateDateMonth } from "@/utils/dateTime";
import { Meal } from "@/types";
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

const MealList = ({ mealList }: { mealList: Meal[] | null }) => {
  return (
    <section>
      <div className="flex flex-wrap justify-center gap-2">
        {mealList &&
          mealList.map((meal) => {
            if (!meal) return <></>;

            return (
              <div key={meal.id} className="relative ">
                <Image
                  className="w-[14.625rem] aspect-square object-cover"
                  src={meal.image}
                  alt="meal"
                />
                <div
                  className="absolute bottom-0 left-0 w-1/2 h-8 bg-[#FFCC21] flex justify-center items-center
                text-white font-light text-[0.9rem]"
                >
                  {formateDateMonth(meal.time.date, meal.time.month)}.
                  {meal.type}
                </div>
              </div>
            );
          })}
        {mealList && mealList.length >= 8 && (
          <SeeMoreButton text={"記録をもっと見る"} />
        )}
      </div>
    </section>
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
      {loading ? <LoadingSpinner /> : <MealList mealList={filteredMealList} />}
    </section>
  );
};

export default MealHistory;
