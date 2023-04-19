import Image from "next/image";
import morningHex from "@/public/assets/morning_component_hex.svg";
import lunchHex from "@/public/assets/lunch_component_hex.svg";
import dinnerHex from "@/public/assets/dinner_component_hex.svg";
import snackHex from "@/public/assets/snack_component_hex.svg";

import mealImg1 from "@/public/images/m01.jpg";
import mealImg2 from "@/public/images/m02.jpg";
import mealImg3 from "@/public/images/m03.jpg";
import mealImg4 from "@/public/images/d01.jpg";
import mealImg5 from "@/public/images/d02.jpg";
import mealImg6 from "@/public/images/l01.jpg";
import mealImg7 from "@/public/images/l02.jpg";
import mealImg8 from "@/public/images/l03.jpg";

const FilterButtons = () => {
  return (
    <div className="flex justify-center gap-16">
      <Image src={morningHex} alt="morning-hex" />
      <Image src={lunchHex} alt="lunch-hex" />
      <Image src={dinnerHex} alt="dinner-hex" />
      <Image src={snackHex} alt="snack-hex" />
    </div>
  );
};

enum MealType {
  MORNING = "Morning",
  LUNCH = "Lunch",
  DINNER = "Dinner",
  SNACK = "Snack",
}

const mealList = [
  {
    id: 0,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.MORNING,
    image: mealImg1,
  },
  {
    id: 0,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.MORNING,
    image: mealImg2,
  },
  {
    id: 0,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.MORNING,
    image: mealImg3,
  },
  {
    id: 0,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.MORNING,
    image: mealImg4,
  },
  {
    id: 0,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.MORNING,
    image: mealImg5,
  },
  {
    id: 0,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.MORNING,
    image: mealImg6,
  },
  {
    id: 0,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.MORNING,
    image: mealImg7,
  },
  {
    id: 0,
    time: {
      date: 21,
      month: 5,
    },
    type: MealType.MORNING,
    image: mealImg8,
  },
];

const MealList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {mealList.map((meal) => {
        return (
          <>
            <Image
              className="w-56 aspect-square object-cover"
              src={meal.image}
              alt="meal"
            />
          </>
        );
      })}
    </div>
  );
};

const MealHistory = () => {
  return (
    <section className="max-w-screen-lg mx-auto my-8  space-y-8">
      <FilterButtons />
      <MealList />
    </section>
  );
};

export default MealHistory;
