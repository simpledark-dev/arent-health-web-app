import { useState } from "react";
import Image from "next/image";
import { Icons } from "@/public/icons";

import useFetchMealHistory from "@/hooks/useFetchMealHistory";

import LoadingSpinner from "@/components/shared/LoadingSpinner";
import SeeMoreButton from "@/components/shared/SeeMoreButton";

import { formateDateMonth } from "@/utils/dateTime";
import Container from "@/layouts/Container";

const FilterButtons = ({ setFilter }: { setFilter: any }) => {
  return (
    <div className="flex flex-wrap justify-center gap-16">
      <Image
        className="hover:translate-x-1 hover:-translate-y-1 hover:cursor-pointer"
        src={Icons.morningHex}
        alt="morning-hex"
        onClick={() => setFilter("Morning")}
      />
      <Image
        className="hover:translate-x-1 hover:-translate-y-1 hover:cursor-pointer"
        src={Icons.lunchHex}
        alt="lunch-hex"
        onClick={() => setFilter("Lunch")}
      />
      <Image
        className="hover:translate-x-1 hover:-translate-y-1 hover:cursor-pointer"
        src={Icons.dinnerHex}
        alt="dinner-hex"
        onClick={() => setFilter("Dinner")}
      />
      <Image
        className="hover:translate-x-1 hover:-translate-y-1 hover:cursor-pointer"
        src={Icons.snackHex}
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
    <div className="relative  md:w-[calc(25%-0.5rem)]">
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
    <Container>
      <div className="mt-8 mb-16 space-y-6">
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
      </div>
    </Container>
  );
};

export default MealHistory;
