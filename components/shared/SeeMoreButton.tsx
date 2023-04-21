const SeeMoreButton = ({ text }: { text: string }) => {
  return (
    <div className="mx-auto w-max mt-7">
      <button
        // special linear gradient
        style={{
          background:
            "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
        }}
        className="h-14 w-72 bg-black text-light-100 font-light rounded mx-auto"
      >
        {text}
      </button>
    </div>
  );
};

export default SeeMoreButton;
