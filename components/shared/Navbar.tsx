import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

// Icons
import { Icons } from "@/public/icons";

// Components / Layout
import DrawnMenu from "@/components/shared/DrawnMenu";
import Container from "@/layouts/Container";

// Config
import { PATHS } from "@/config/paths";

const Navbar = () => {
  const router = useRouter();
  const [drawnMenuOpen, setDrawnMenuOpen] = useState(false);

  return (
    <section className="bg-dark-500">
      <Container>
        <nav className="flex justify-between h-16 items-center text-base text-light-100 font-light">
          {/* Logo */}
          <div className="mt-2">
            <Link href={PATHS.top}>
              <Image height={40} src={Icons.healthLogo} alt="logo" />
            </Link>
          </div>

          {/* Menu Items */}
          <ul className="flex gap-12">
            {/* My Record */}
            <Link href={PATHS.record}>
              <li className="hidden md:flex gap-2 items-center">
                <Image height={32} src={Icons.iconMemo} alt="icon-memo" />
                <span
                  className={`${
                    router.pathname === PATHS.record ? "text-primary-400" : ""
                  }`}
                >
                  自分の記録
                </span>
              </li>
            </Link>

            {/* Challenge */}
            <li className="flex gap-2 items-center">
              <Image
                height={32}
                src={Icons.iconChallenge}
                alt="icon-challenge"
              />
              <span className="hidden sm:block">チャレンジ</span>
            </li>

            {/* Notification */}
            <li className="flex gap-2 items-center ">
              <div className="relative">
                <Image height={32} src={Icons.iconInfo} alt="icon-info" />
                <div className="absolute top-0 left-6 bg-primary-500 w-4 h-4 text-light-100 text-[10px] rounded-full flex items-center justify-center">
                  1
                </div>
              </div>
              <span className="hidden sm:block">お知らせ</span>
            </li>

            {/* Drawn Menu */}
            <li>
              {drawnMenuOpen && (
                <div className="relative">
                  <DrawnMenu setDrawnMenuOpen={setDrawnMenuOpen} />
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
      </Container>
    </section>
  );
};

export default Navbar;
