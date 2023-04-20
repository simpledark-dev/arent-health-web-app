const SeeMoreButton = ({ text }: { text: string }) => {
  return (
    <div className="mx-auto">
      <button
        // special linear gradient
        style={{
          background:
            "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
        }}
        className="h-14 w-72 bg-black text-white font-light rounded mt-7 mb-0 mx-auto"
      >
        {text}
      </button>
    </div>
  );
};

export default SeeMoreButton;
