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
          <p className="text-primary-300">
            {energyAmount}
            {energyUnit}
          </p>
        </div>
        <span className="text-primary-300 text-lg">
          {durationAmount} {durationUnit}
        </span>
      </div>
      <hr className="border-gray-400" />
    </li>
  );
};

const ExerciseRecord = () => {
  const { exerciseList, loading } = usefetchExercises();
  return (
    <div className="w-full bg-dark-500 py-4 pr-8 mt-16 font-light text-light-100">
      <div className="flex w-48 justify-between mb-2 mx-8">
        <h3 className="w-[2ch]">MY EXERCISE</h3>
        <h3 className="text-xl">2021.05.21</h3>
      </div>
      <div
        className={`mx-auto h-56 bg-dark-500 px-8
        ${
          !loading ? "overflow-x-hidden overflow-scroll" : ""
        } scrollbar scrollbar-thumb-primary-300 scrollbar-track-gray-400`}
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
            <LoadingSpinner color="white" />
          ) : (
            exerciseList?.map((exercise) => {
              return (
                <ExerciseEntry
                  key={exercise.id}
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
