import usefetchExercises from "@/hooks/usefetchExercises";
import LoadingSpinner from "../shared/LoadingSpinner";

interface ExerciseEntryProps {
  title: string;
  energyAmount: number;
  energyUnit: string;
  durationAmount: number;
  durationUnit: string;
}

const ExerciseEntry = ({
  title,
  energyAmount,
  energyUnit,
  durationAmount,
  durationUnit,
}: ExerciseEntryProps) => {
  return (
    <li>
      <div className="flex justify-between">
        <div>
          <p>{title}</p>
          <p className="text-[#FFCC21]">
            {energyAmount}
            {energyUnit}
          </p>
        </div>
        <span className="text-[#FFCC21] text-lg">
          {durationAmount} {durationUnit}
        </span>
      </div>
      <hr className="border-[#777777]" />
    </li>
  );
};

const ExerciseRecord = () => {
  const { exerciseList, loading } = usefetchExercises();
  return (
    <div className="w-full bg-[#414141] py-4 pr-8 mt-16 font-light text-white">
      <div className="flex w-48 justify-between mb-2 mx-8">
        <h3 className="w-[2ch]">MY EXERCISE</h3>
        <h3 className="text-xl">2021.05.21</h3>
      </div>
      <div
        className={`mx-auto h-56 bg-[#414141] px-8
        ${
          !loading ? "overflow-x-hidden overflow-scroll" : ""
        } scrollbar scrollbar-thumb-[#FFCC21] scrollbar-track-[#777777]`}
      >
        <ul
          style={{ columnGap: "4rem" }} // missing tailwind class
          className={
            !loading
              ? `grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-outside pl-4`
              : ""
          }
        >
          {loading ? (
            <LoadingSpinner />
          ) : (
            exerciseList?.map((exercise) => {
              return (
                <ExerciseEntry
                  key={0}
                  title={exercise.title}
                  energyAmount={exercise.energy.amount}
                  energyUnit={exercise.energy.unit}
                  durationAmount={exercise.duration.amount}
                  durationUnit={exercise.duration.unit}
                />
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default ExerciseRecord;
