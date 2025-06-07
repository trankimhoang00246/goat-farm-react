import SeoHelmet from "../../components/SeoHelmet";

import { useEffect, useState } from "react";
import type { Product } from "../../api/interface";
import ProductCarousel from "../../components/ProductCarousel";

const HomPage = () => {
  const [dataDetails, setDataDetails] = useState<Product[]>([]);
  const [dataNguyen, setDataNguyen] = useState<Product[]>([]);
  const [phone, setPhone] = useState<string>("0862674748");
  const [facebook, setFacebook] = useState<string>(
    "https://www.facebook.com/hoang.trankim.9028"
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const details = await fetch("../../../public/data_detail.json");
    setDataDetails(await details.json());

    const nguyen = await fetch("../../../public/data_nguyen.json");
    setDataNguyen(await nguyen.json());
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

      <header className="bg-green-700 text-white p-6 text-center h-[250px] flex flex-col justify-center items-center bg-[url('../../../public/de_2con.jpg')] bg-center bg-cover bg-no-repeat">
        <h1 className="text-3xl font-bold">
          Thịt Dê Sạch Từ Trại – Giao hàng toàn quốc
        </h1>
        <p className="mt-2 text-lg">
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

        <div>
          <ProductCarousel productList={dataDetails} phone={phone} />
        </div>

        <div className="pt-6">
          <h2 className="text-2xl font-semibold mb-2">Cam Kết Chất Lượng</h2>
          <p>Không tăng trọng – Không thuốc tăng trưởng</p>
          <p>Giao hàng tận nơi khu vực toàn quốc</p>
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
              💬 Nhắn Zalo
            </a>
          </p>
          <p className="text-blue-600">
            <a href={facebook} target="_blank">
              📘 Facebook
            </a>
          </p>
        </div>
      </main>

      <footer className="bg-gray-100 text-center text-sm py-4 mt-10">
        © 2025 Thịt Dê Nhà Nuôi | Zalo: 0123 456 789
      </footer>
    </div>
  );
};

export default HomPage;
