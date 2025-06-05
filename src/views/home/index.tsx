import { Button, Card } from "antd";
import SeoHelmet from "../../components/SeoHelmet";
import { PhoneOutlined } from "@ant-design/icons";

import goatImage from "../../../public/de_2con.jpg";
import { useState } from "react";
import type { Product } from "../../api/interface";

const HomPage = () => {
  const [dataDetails, setDataDetails] = useState<Product[]>([]);
  const [dataNguyen, setDataNguyen] = useState<Product[]>([]);

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

      <main className="p-6 max-w-4xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Giới Thiệu Trại Dê</h2>
          <p>
            Chúng tôi là trại chăn nuôi dê tại{" "}
            <strong>xã Đắk Mil huyện Đắk Nông</strong>, với quy trình nuôi tự
            nhiên, không tăng trọng, không thuốc kháng sinh. Thịt dê được giết
            mổ mỗi sáng, đảm bảo tươi ngon và an toàn.
          </p>
        </div>

        <div></div>
      </main>

      <footer className="bg-gray-100 text-center text-sm py-4 mt-10">
        © 2025 Thịt Dê Nhà Nuôi | Zalo: 0123 456 789
      </footer>
    </div>
  );
};

export default HomPage;
