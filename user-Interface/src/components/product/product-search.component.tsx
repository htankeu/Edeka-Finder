import { PushpinOutlined, ShopOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Input } from "antd";
import { useState } from "react";
import type { IProduct } from "../../bridge/Interfaces/product.interface";
import Search from "antd/es/transfer/search";
import type { ProductListFilter } from "../../bridge/models/product-list-filter.model";
import productServices from "../../services/product.services";
import international from "../../Intl";
import { useNavigate } from "react-router-dom";

const ProductSearch: React.FC = () => {
  const [listProducts, setListProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const [filterParams, setFilterParams] = useState<ProductListFilter>({
    search: "",
    categories: "",
    manufacturer: "",
    sort: "ASC",
    sortBy: "",
  });

  const handleFiltering = (filters: ProductListFilter) => {
    try {
      setLoading(true);
      productServices
        .getProducts(filters)
        .then((products) => {
          setListProducts(products);
        })
        .catch((error) => {
          throw Error(error);
        })
        .finally(() => {
          {
            if (filters.search !== "") setLoading(false);
          }
        });
    } catch (error) {
      setLoading(true);
      throw error;
    }
  };

  const handleSearchFilter = (searchterm: string) => {
    setFilterParams((filters: any) => ({ ...filters, search: searchterm }));
    handleFiltering({ ...filterParams, search: searchterm });
  };

  const handleProductSelect = (productId: any, currentPosition: number[], targetPosition: number[], rackPosition: number[][]) => {
    navigate(`/${productId}/map`, { state: { currentPosition: currentPosition, targetPosition: targetPosition, rackPosition: rackPosition } });
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-4 bg-zinc-800">
        <div className="flex flex-row justify-between px-2 bg-btn-primary py-3">
          <h1 className="text-btn-primary-blue font-bold">EDEKA Finder</h1>
          <ShopOutlined style={{ fontSize: "20px", color: "#145398" }} />
        </div>
        <div className="flex flex-col justify-center items-center gap-9">
          <div className="px-5">
            <Search placeholder="product search...." value={filterParams.search} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleSearchFilter(event.target.value)} />
          </div>

          <div className="overflow-x-hidden overflow-y-scroll flex justify-center flex-wrap flex-row gap-3">
            {!loading &&
              listProducts.map((product) => {
                return (
                  <div
                    onClick={() => {
                      handleProductSelect(product.ProductId, [1, 1], product.ray.rack.coordonates[0], product.ray.rack.coordonates);
                    }}
                  >
                    <Card hoverable style={{ width: window.innerWidth / 3, height: 210 }} cover={<img alt={`${product.ProductName}`} src={`/src/images/${product.ProductName.toLowerCase()}.jpg`} />}>
                      <div className="text-right">
                        <h3 className="text-sm font-bold text-red-500">{international.formatCurrency(product.price)}</h3>
                      </div>

                      <div className="flex items-center justify-center">
                        <Card.Meta title={`${product.ProductName}`} />
                      </div>

                      <div className="flex flex-row justify-between mt-3">
                        <div className="border rounded-full flex items-center justify-center p-2 bg-btn-secondary">
                          <ShoppingCartOutlined style={{ color: "black", fontSize: "15px" }} />
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
        </div>
      </div>
    </>
  );
};

export default ProductSearch;
