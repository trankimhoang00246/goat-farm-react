import SeoHelmet from "../../components/SeoHelmet";

import { useEffect, useState } from "react";
import type { Product } from "../../api/interface";
import ProductCarousel from "../../components/ProductCarousel";

const HomPage = () => {
  const [dataDetails, setDataDetails] = useState<Product[]>([]);
  const [dataNguyen, setDataNguyen] = useState<Product[]>([]);
  const [dataHoi, setDataHoi] = useState<Product[]>([]);
  const [phone, setPhone] = useState<string>("0862674748");
  const [phoneText, setPhoneText] = useState<string>("0862 674 748");
  const [facebook, setFacebook] = useState<string>(
    "https://www.facebook.com/people/Tr%E1%BA%A1i-D%C3%AA-%C4%90%E1%BA%AFk-Mil/61575975924397/"
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const details = await fetch("../../../public/data_detail.json");
    setDataDetails(await details.json());

    const nguyen = await fetch("../../../public/data_nguyen.json");
    setDataNguyen(await nguyen.json());

    const hoi = await fetch("../../../public/data_hoi.json");
    setDataHoi(await hoi.json());
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <SeoHelmet
        title="Thịt Dê Sạch Từ Trại - Giao hàng toàn quốc"
        description="Trang web giới thiệu thịt dê sạch tại nhà nuôi. Giao hàng tận nơi, uy tín – chất lượng – giá tốt."
        keywords="thịt dê, thịt dê tươi, thịt dê sạch, nhà cung cấp thịt dê, thịt dê Hà Nam"
        url="https://thitdenhanuoi.vn"
        image="https://thitdenhanuoi.vn/images/og-image.jpg"
      />

      <header className="bg-green-700 text-white p-6 text-center h-[250px] flex flex-col justify-center items-center bg-[url('../../../public/de_2con.jpg')]  bg-center bg-cover bg-no-repeat ">
        <h1 className="text-3xl font-bold shadow-2xs">
          Thịt Dê Sạch Từ Trại – Giao hàng toàn quốc
        </h1>
        <p className="mt-2 text-lg shadow-2xs font-bold">
          Thịt dê tươi mỗi ngày - Uy tín – Chất lượng - Giá tốt
        </p>
      </header>

      <main className="p-6 max-w-6xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Giới Thiệu Trại Dê</h2>
          <p>
            Chúng tôi là trại chăn nuôi dê tại{" "}
            <strong>xã Đắk Mil huyện Đắk Nông</strong>, với quy trình nuôi tự
            nhiên, không tăng trọng, không thuốc kháng sinh. Thịt dê được giết
            mổ mỗi sáng, đảm bảo tươi ngon và an toàn.
          </p>
        </div>

        <div className="pt-6">
          <h2 className="text-2xl font-semibold mb-2">Cam Kết Chất Lượng</h2>
          <p>Không tăng trọng – Không thuốc tăng trưởng</p>
          <p>Giao hàng tận nơi khu vực toàn quốc</p>
        </div>

        <div>
          <ProductCarousel productList={dataDetails} phone={phone} />
        </div>

        <div>
          <ProductCarousel
            title="Dê nguyên con làm sẵn"
            productList={dataNguyen}
            phone={phone}
            showNext={false}
          />
        </div>

        <div>
          <ProductCarousel
            title="Dê hơi, dê thịt"
            productList={dataHoi}
            phone={phone}
            showNext={false}
          />
        </div>

        <div className="pt-6">
          <h2 className="text-2xl font-semibold mb-2">Đặt hàng ngay</h2>
          <p>
            Liên hệ với chúng tôi qua số điện thoại hoặc Zalo bên dưới để đặt
            hàng nhanh chóng.
          </p>
          <p className="text-blue-600">
            <a href={`tel:${phone}`}>📞 Gọi: {phone}</a>
          </p>
          <p className="text-blue-600">
            <a href={`https://zalo.me/${phone}`} target="_blank">
              💬 Nhắn Zalo: {phoneText}
            </a>
          </p>
          <p className="text-blue-600">
            <a href={facebook} target="_blank">
              📘 Facebook
            </a>
          </p>
        </div>

        <div className="pt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.833805302617!2d107.68264336698843!3d12.428196095500919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317239006873086b%3A0x7476bc9e58fe253d!2zVHLhuqFpIETDqiDEkOG6r2sgTWls!5e0!3m2!1svi!2s!4v1749289596984!5m2!1svi!2s"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </main>

      <footer className="bg-gray-100 text-center text-sm py-4 mt-10">
        © 2025 Thịt Dê Nhà Nuôi | Zalo:{" "}
        <a
          className="text-blue-600"
          href={`https://zalo.me/${phone}`}
          target="_blank"
        >
          {phoneText} 💬
        </a>
      </footer>
    </div>
  );
};

export default HomPage;
