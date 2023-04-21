import { ClipLoader } from "react-spinners";

const LoadingSpinner = ({ color = "black" }) => {
  return (
    <div className="w-max mx-auto py-[10%]">
      <ClipLoader color={color} size={60} />
    </div>
  );
};

export default LoadingSpinner;
