import Link from "next/link";

const menus = [
  {
    name: "自分の記録",
    link: "/record-page",
  },
  {
    name: "体重グラフ",
    link: "/",
  },
  {
    name: "目標",
    link: "/",
  },
  {
    name: "選択中のコース",
    link: "/",
  },
  {
    name: "コラム一覧",
    link: "/column-page",
  },
  {
    name: "設定",
    link: "/",
  },
];

const Menu = ({ name, link }: { name: string; link: string }) => {
  return (
    <Link href={link}>
      <div
        className="w-72 h-16 py-5 px-8 bg-[#777777] border-b-[0.05px] border-[#2E2E2E50]
        text-lg text-white font-light"
      >
        {name}
      </div>
    </Link>
  );
};

const DrawnMenu = () => {
  return (
    <nav className="absolute w-max flex flex-col top-8 right-[calc(100%-2rem)] z-50">
      {menus.map((menu) => (
        <Menu key={menu.name} name={menu.name} link={menu.link} />
      ))}
    </nav>
  );
};

export default DrawnMenu;
