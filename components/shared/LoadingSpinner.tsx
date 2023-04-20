import { ClipLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="w-max mx-auto py-32">
      <ClipLoader size={60} />
    </div>
  );
};

export default LoadingSpinner;
