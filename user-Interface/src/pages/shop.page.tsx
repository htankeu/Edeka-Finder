import { useEffect, useState } from "react";
import HeaderNav from "../components/nav/Header-nav.component";
import type { IProduct } from "../bridge/Interfaces/product.interface";
import international from "../Intl";
import { Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const Shop: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBuyedProducts = () => {
      const values: string | null = localStorage.getItem("products");
      if (values != null) {
        const results = JSON.parse(values) as IProduct[];
        setProducts(results);
        setLoading(false);
      }
    };

    fetchBuyedProducts();
  }, []);

  return (
    <>
      <div className="bg-zinc-800 w-screen h-screen">
        <HeaderNav isHome={true} isConnect={true} />
        <div className="flex flex-col items-center justify-center overflow-x-hidden overflow-y-scroll">
          {products.map((product) => (
            <div>
              <Card style={{ width: 300 }}>
                <div className="grid grid-cols-6 gap-2">
                  <div className="col-span-2">
                    <img src={`/src/images/${product.ProductName.toLowerCase()}.jpg`} />
                  </div>
                  <div className="flex flex-col items-center justify-center col-span-3">
                    <h1 className="font-semibold">{product.ProductName}</h1>
                    <h1 className="font-bold">{international.formatCurrency(product.price)}</h1>
                  </div>
                  <div className="flex items-center">
                    <DeleteOutlined style={{ fontSize: "20px" }} />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
