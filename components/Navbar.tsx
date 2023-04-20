import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/public/icons";
import DrawnMenu from "./DrawnMenu";

const Navbar = () => {
  const [drawnMenuOpen, setDrawnMenuOpen] = useState(false);

  return (
    <section className="bg-[#414141] w-full">
      <div className="max-w-screen-lg mx-auto px-8 text-base text-white font-light">
        <nav className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="mt-2">
            <Link href="/top-page">
              <Image height={40} src={Icons.healthLogo} alt="logo" />
            </Link>
          </div>

          {/* Menu Items */}
          <ul className="flex gap-12">
            {/* My Record */}
            <Link href="/record-page">
              <li className="flex gap-2 items-center">
                <Image height={32} src={Icons.iconMemo} alt="icon-memo" />
                <span>自分の記録</span>
              </li>
            </Link>

            {/* Challenge */}
            <li className="flex gap-2 items-center">
              <Image
                height={32}
                src={Icons.iconChallenge}
                alt="icon-challenge"
              />
              <span>チャレンジ</span>
            </li>

            {/* Notification */}
            <li className="flex gap-2 items-center ">
              <div className="relative">
                <Image height={32} src={Icons.iconInfo} alt="icon-info" />
                <div className="absolute top-0 left-6 bg-[#EA6C00] w-4 h-4 text-white text-[10px] rounded-full flex items-center justify-center">
                  1
                </div>
              </div>
              <span>お知らせ</span>
            </li>

            {/* Drawn Menu */}
            <li>
              {drawnMenuOpen && (
                <div className="relative">
                  <DrawnMenu />
                </div>
              )}
              <Image
                className="hover:cursor-pointer"
                height={32}
                src={drawnMenuOpen ? Icons.iconClose : Icons.iconMenu}
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
