import Image from "next/image";
import healthLogo from "@/public/assets/health_logo.svg";
import iconMemo from "@/public/assets/icon_memo.svg";
import iconChallenge from "@/public/assets/icon_challenge.svg";
import iconInfo from "@/public/assets/icon_info.svg";
import iconMenu from "@/public/assets/icon_menu.svg";
import iconClose from "@/public/assets/icon_close.svg";
import Link from "next/link";
import DrawnMenu from "./DrawnMenu";
import { useState } from "react";

const Navbar = () => {
  const [drawnMenuOpen, setDrawnMenuOpen] = useState(false);

  return (
    <section className="bg-[#414141] w-full">
      <div className="max-w-screen-lg mx-auto px-8 text-base text-white font-light">
        <nav className="flex justify-between h-16 items-center">
          <div className="mt-2">
            <Link href="/top-page">
              <Image height={40} src={healthLogo} alt="logo" />
            </Link>
          </div>
          <ul className="flex gap-12">
            <Link href="/record-page">
              <li className="flex gap-1 items-center">
                <Image height={32} src={iconMemo} alt="icon-memo" />
                <span>自分の記録</span>
              </li>
            </Link>
            <li className="flex gap-1 items-center">
              <Image height={32} src={iconChallenge} alt="icon-challenge" />
              <span>チャレンジ</span>
            </li>
            <li className="flex gap-1 items-center">
              <Image height={32} src={iconInfo} alt="icon-info" />
              <span>お知らせ</span>
            </li>
            <li>
              {drawnMenuOpen && (
                <div className="relative">
                  <DrawnMenu />
                </div>
              )}
              <Image
                className="hover:cursor-pointer"
                height={32}
                src={drawnMenuOpen ? iconClose : iconMenu}
                alt="icon-menu"
                onClick={() => setDrawnMenuOpen(!drawnMenuOpen)}
              />
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
