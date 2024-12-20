import { useEffect, useRef, useState } from "react";
import type { IProduct } from "../../bridge/Interfaces/product.interface";
import productServices from "../../services/product.services";
import { Card, Skeleton, Space, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import international from "../../Intl";
import { PushpinOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const ListProductsOverview: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [listProducts, setListProducts] = useState<IProduct[]>([]);
  const [numProducts, setNumProducts] = useState<number>(0);
  const navigate = useNavigate();
  const active = false;
  const size = "default";
  const avatarShape = "circle";

  const handleProductSelect = (productId: any, currentPosition: number[], targetPosition: number[], rackPosition: number[][]) => {
    navigate(`/${productId}/map`, { state: { currentPosition: currentPosition, targetPosition: targetPosition, rackPosition: rackPosition } });
  };

  const handleProductBuy = (product: IProduct) => {
    const values: string | null = localStorage.getItem("products");
    if (values != null) {
      const products = JSON.parse(values) as IProduct[];
      products.push(product);
      setNumProducts(products.length);
      localStorage.setItem("products", JSON.stringify(products));
      return;
    }
    const products: IProduct[] = [];
    products.push(product);
    setNumProducts(products.length);
    localStorage.setItem("products", JSON.stringify(products));
  };

  useEffect(() => {
    const fetchProducts = () => {
      productServices
        .getProducts()
        .then((products) => {
          setListProducts(products);
        })
        .catch((error) => {
          throw Error(error);
        })
        .finally(() => {
          {
            setLoading(false);
          }
        });
    };

    fetchProducts();
    console.log(listProducts);
  }, []);
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll flex justify-center flex-wrap flex-row gap-3">
        {loading && (
          <Space>
            <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
            <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
            <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
          </Space>
        )}
        {!loading &&
          listProducts.map((product) => {
            return (
              <div onClick={() => {}}>
                <Card hoverable style={{ width: window.innerWidth / 3, height: 210 }} cover={<img alt={`${product.ProductName}`} src={`/src/images/${product.ProductName.toLowerCase()}.jpg`} />}>
                  <div className="text-right">
                    <h3 className="text-sm font-bold text-red-500">{international.formatCurrency(product.price)}</h3>
                  </div>

                  <div className="flex items-center justify-center">
                    <Card.Meta title={`${product.ProductName}`} />
                  </div>

                  <div className="flex flex-row justify-between mt-3">
                    <div className="border rounded-full flex items-center justify-center p-2 bg-btn-secondary">
                      <ShoppingCartOutlined
                        style={{ color: "black", fontSize: "15px" }}
                        onClick={() => {
                          handleProductBuy(product);
                        }}
                      />
                    </div>
                    <div className="border rounded-full flex items-center justify-center p-2 bg-btn-secondary">
                      <PushpinOutlined
                        style={{ color: "black" }}
                        twoToneColor={"black"}
                        onClick={() => {
                          handleProductSelect(product.ProductId, [1, 1], product.ray.rack.coordonates[0], product.ray.rack.coordonates);
                        }}
                      />
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ListProductsOverview;
