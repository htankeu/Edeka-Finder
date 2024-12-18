import { useEffect, useState } from "react";
import type { IProduct } from "../../bridge/Interfaces/product.interface";
import productServices from "../../services/product.services";
import { Card, Skeleton, Space } from "antd";
import { useNavigate } from "react-router-dom";

const ListProductsOverview: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [listProducts, setListProducts] = useState<IProduct[]>([]);
  const navigate = useNavigate();
  const active = false;
  const size = "default";
  const avatarShape = "circle";

  const handleProductSelect = (productId: any) => {
    navigate(`/${productId}/map`);
  };

  useEffect(() => {
    const fetchProducts = () => {
      productServices.getProducts().then((products) => {
        setListProducts(products);
        setLoading(false);
      });
    };

    fetchProducts();
  }, []);
  return (
    <>
      <div className="overflow-x-hidden overflow-y-scroll flex flex-wrap flex-row gap-3">
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
              <Card
                hoverable
                style={{ width: window.innerWidth / 3 }}
                cover={
                  <img
                    alt={`${product.ProductName}`}
                    src={`src/images/${product.ProductName.toLowerCase()}.jpg`}
                    onClick={() => {
                      handleProductSelect(product.ProductId);
                    }}
                  />
                }
              >
                <Card.Meta title={`${product.ProductName}`} description={`${product.Description}`} />
              </Card>
            );
          })}
      </div>
    </>
  );
};

export default ListProductsOverview;
