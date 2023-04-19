const SeeMoreButton = ({ text }: { text: string }) => {
  return (
    <button
      // special linear gradient
      style={{
        background: "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
      }}
      className="block h-14 w-72 bg-black text-white font-light rounded my-12 mx-auto"
    >
      {text}
    </button>
  );
};

export default SeeMoreButton;
