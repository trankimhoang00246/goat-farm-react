import { useEffect, useState } from "react";
import type { Product, ProductPrice } from "../api/interface";
import { Button, Card } from "antd";
import { LeftOutlined, PhoneOutlined, RightOutlined } from "@ant-design/icons";
import goatImage from "../../public/de_2con.jpg";

interface IProps {
  productList: Product[];
  phone: string;
}

const ProductCarousel = ({ productList, phone }: IProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const displayCount = 4;
  const total = productList.length;

  // Tạm dừng auto slide khi người dùng điều khiển
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    if (isManual) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + displayCount) % total);
    }, 5000);

    return () => clearInterval(interval);
  }, [isManual, total]);

  useEffect(() => {
    if (!isManual) return;

    const interval = setInterval(() => {
      setIsManual(false);
    }, 5000);

    return () => clearInterval(interval);
  }, [isManual]);

  const handlePrev = () => {
    setIsManual(true);
    setStartIndex((prev) => (prev - displayCount + total) % total);
  };

  const handleNext = () => {
    setIsManual(true);
    setStartIndex((prev) => (prev + displayCount) % total);
  };

  const productsToShow = [...productList, ...productList].slice(
    startIndex,
    startIndex + displayCount
  );

  const findFirst = (prices: ProductPrice[]): string => {
    if (prices.length > 0) {
      return prices[0].price;
    }
    return "Liên hệ";
  };

  const findLast = (prices: ProductPrice[]): string => {
    if (prices.length > 0) {
      return prices[prices.length - 1].price;
    }
    return "Liên hệ";
  };

  return (
    <div className="py-8 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Sản phẩm nổi bật
      </h2>

      <div className="flex justify-end mb-4 gap-2">
        <Button icon={<LeftOutlined />} onClick={handlePrev} />
        <Button icon={<RightOutlined />} onClick={handleNext} />
      </div>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {productsToShow.map((product, index) => (
          <Card
            key={index}
            hoverable
            cover={
              <img
                alt={product.name}
                src={goatImage}
                className="h-48 w-full object-cover"
              />
            }
            className="shadow-md rounded-lg border border-gray-100 flex flex-col justify-between"
            bodyStyle={{ padding: "16px" }}
          >
            <div>
              <h3 className="text-base md:text-lg font-semibold text-center text-gray-700 h-[50px]">
                {product.name}
              </h3>
              <p className="text-center text-sm md:text-base text-red-600 font-medium my-2">
                <span className={"text-orange-500"}>
                  {findLast(product.price)} - {findFirst(product.price)} đ/kg
                </span>
              </p>
            </div>
            <Button
              type="primary"
              icon={<PhoneOutlined />}
              className="w-full bg-red-500 hover:bg-red-600 border-none mt-4"
              href={`tel:${phone}`}
            >
              {phone}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
