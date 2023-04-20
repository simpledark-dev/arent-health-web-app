const Container = ({
  children,
  customStyles,
}: {
  children: any;
  customStyles?: string;
}) => {
  return (
    <section className={`max-w-[960px] mx-auto px-2 ${customStyles}`}>
      {children}
    </section>
  );
};

export default Container;
