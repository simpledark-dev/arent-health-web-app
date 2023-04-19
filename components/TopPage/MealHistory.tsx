import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";
import morningHex from "@/public/assets/morning_component_hex.svg";
import lunchHex from "@/public/assets/lunch_component_hex.svg";
import dinnerHex from "@/public/assets/dinner_component_hex.svg";
import snackHex from "@/public/assets/snack_component_hex.svg";

import useFetchMealHistory from "@/hooks/useFetchMealHistory";

import { formateDateMonth } from "@/utils/dateTime";
import { Meal } from "@/types";
import { useState } from "react";

const FilterButtons = ({ setFilter }: { setFilter: any }) => {
  return (
    <div className="flex justify-center gap-16">
      <Image
        className="hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg"
        src={morningHex}
        alt="morning-hex"
        onClick={() => setFilter("Morning")}
      />
      <Image
        className="hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg"
        src={lunchHex}
        alt="lunch-hex"
        onClick={() => setFilter("Lunch")}
      />
      <Image
        className="hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg"
        src={dinnerHex}
        alt="dinner-hex"
        onClick={() => setFilter("Dinner")}
      />
      <Image
        className="hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg"
        src={snackHex}
        alt="snack-hex"
        onClick={() => setFilter("Snack")}
      />
    </div>
  );
};

const MealList = ({ mealList }: { mealList: Meal[] | null }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-2">
        {mealList &&
          mealList.map((meal) => {
            if (!meal) return <></>;

            return (
              <div key={meal.id} className="relative ">
                <Image
                  className=" w-56 aspect-square object-cover"
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
      </div>

      {mealList && mealList?.length >= 8 && (
        <button
          // special linear gradient
          style={{
            background:
              "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
          }}
          className="block h-14 w-72 bg-black text-white font-light rounded mt-6 mx-auto"
        >
          記録をもっと見る
        </button>
      )}
    </>
  );
};

const MealHistory = () => {
  const { mealList, loading } = useFetchMealHistory();
  const [filter, setFilter] = useState("Morning");

  const filteredMealList = mealList
    ? mealList.filter((meal) => meal.type === filter)
    : [];

  return (
    <section className="max-w-screen-lg mx-auto my-8 space-y-6">
      <FilterButtons setFilter={setFilter} />
      {loading ? (
        <div className="w-max mx-auto py-32">
          <ClipLoader />
        </div>
      ) : (
        <MealList mealList={filteredMealList} />
      )}
    </section>
  );
};

export default MealHistory;
