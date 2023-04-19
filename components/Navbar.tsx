import Image from "next/image";
import healthLogo from "@/public/assets/health_logo.svg";
import iconMemo from "@/public/assets/icon_memo.svg";
import iconChallenge from "@/public/assets/icon_challenge.svg";
import iconInfo from "@/public/assets/icon_info.svg";
import iconMenu from "@/public/assets/icon_menu.svg";

const Navbar = () => {
  return (
    <section className="bg-[#414141] w-full">
      <div className="max-w-screen-lg mx-auto text-base text-white font-light">
        <nav className="flex justify-between h-16 items-center">
          <div className="mt-2">
            <Image height={40} src={healthLogo} alt="logo" />
          </div>
          <ul className="flex gap-12">
            <li className="flex gap-1 items-center">
              <Image height={32} src={iconMemo} alt="icon-memo" />
              <span>自分の記録</span>
            </li>
            <li className="flex gap-1 items-center">
              <Image height={32} src={iconChallenge} alt="icon-challenge" />
              <span>チャレンジ</span>
            </li>
            <li className="flex gap-1 items-center">
              <Image height={32} src={iconInfo} alt="icon-info" />
              <span>お知らせ</span>
            </li>
            <li>
              <Image height={32} src={iconMenu} alt="icon-menu" />
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
