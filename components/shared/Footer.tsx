import Container from "@/layouts/Container";

const Footer = () => {
  return (
    <section className="bg-[#414141]">
      <Container>
        <div className="py-16 px-8 md:px-0 mx-auto flex items-center">
          <ul className="flex flex-wrap gap-12 text-[11px] text-white font-light">
            <li>会員登録</li>
            <li>運営会社</li>
            <li>利用規約</li>
            <li>個人情報の取扱について</li>
            <li>特定商取引法に基づく表記</li>
            <li>お問い合わせ</li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
