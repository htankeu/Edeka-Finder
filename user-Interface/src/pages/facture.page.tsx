import { useEffect, useState } from "react";
import HeaderNav from "../components/nav/Header-nav.component";
import type { IProduct } from "../bridge/Interfaces/product.interface";
import { FloatButton, QRCode, Space, theme } from "antd";
import international from "../Intl";
import { HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Facture: React.FC = () => {
  const [totalPrice, setTotal] = useState<number>(0);
  const navigate = useNavigate();
  const { useToken } = theme;
  const { token } = useToken();
  useEffect(() => {
    const fetchBuyedProducts = () => {
      const values: string | null = localStorage.getItem("products");
      if (values != null) {
        const results = JSON.parse(values) as IProduct[];

        results.forEach((product) => {
          setTotal((prev) => prev + product.price);
        });
      }
    };

    fetchBuyedProducts();
  }, []);

  const handleGoHome = () => {
    navigate("/home");
    localStorage.clear();
  };

  return (
    <>
      <div className="bg-zinc-800 w-screen h-screen">
        <HeaderNav isHome={false} isConnect={true} />

        <div className="flex flex-col items-center">
          <h1 className="text-white font-bold">EDEKA</h1>
          <div className="h-full flex flex-col justify-center items-center mt-24 gap-5">
            <Space>
              <QRCode value="https://ant.design/" color={token.colorInfoText} bgColor={token.colorBgLayout} />
            </Space>
            <h1 className="text-white font-bold">Summe : {international.formatCurrency(totalPrice)}</h1>
          </div>
        </div>
        <div className="fixed bottom-10 left-1/4 text-white flex items-center justify-center font-bold">
          <h1 className="text-lg">DANKE IHR EDEKA-TEAM</h1>
        </div>
        <FloatButton icon={<HomeOutlined onClick={handleGoHome} />} type="primary" style={{ insetInlineEnd: 24 }} />
      </div>
    </>
  );
};

export default Facture;
