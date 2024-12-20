import { Badge, Button, type MenuProps } from "antd";
import edekaFinder from "../../assets/edekaFinder-logo.png";
import { BarcodeOutlined, MenuFoldOutlined, MenuOutlined, SettingOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IProduct } from "../../bridge/Interfaces/product.interface";

type MenuItem = Required<MenuProps>["items"][number];
interface HeaderMenu {
  isHome: boolean;
  isConnect?: boolean;
  buyElems?: number;
}

const items: MenuItem[] = [
  { key: "1", icon: <SettingOutlined />, label: "Settings" },
  { key: "2", icon: <UserOutlined />, label: "Profile" },
];

const HeaderNav: React.FC<HeaderMenu> = (IsHome: HeaderMenu) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const [buyedProducts, setBuyedProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // const [productValues, setProductValues] = useState<string | null>(null);
  const [storedValue, setStoredValue] = useState(() => {
    // Initial fetch of the localStorage value
    return localStorage.getItem("products") || "";
  });

  const toggleCollapsed = () => setCollapsed(!collapsed);
  const handleScan = () => {
    navigate("/scan");
  };

  const handleToShop = () => {
    navigate("/shop");
  };

  useEffect(() => {
    const fetchBuyedProducts = () => {
      const values: string | null = localStorage.getItem("products");
      if (values != null) {
        const results = JSON.parse(values) as IProduct[];
        setBuyedProducts(results);
        setLoading(false);
      }
    };

    fetchBuyedProducts();
  }, [storedValue]);

  useEffect(() => {
    const handleStorageChange = (event: any) => {
      console.log("the evenet--------", event.key);
      if (event.key === "products") {
        console.log("localStorage value changed:", event.newValue);
        setStoredValue(event.newValue || "");
      }
    };

    // Add event listener
    window.addEventListener("storage", handleStorageChange);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <img src={edekaFinder.src} width={100} />
        <div className="flex flex-row gap-3">
          {IsHome.isHome && (
            <div className="flex flex-row gap-2">
              <Button type="primary" onClick={handleScan} style={{ marginBottom: 16 }}>
                <BarcodeOutlined />
              </Button>
              <Badge count={buyedProducts.length}>
                <Button type="primary" onClick={handleToShop} style={{ marginBottom: 16 }}>
                  <ShoppingCartOutlined />
                </Button>
              </Badge>
            </div>
          )}
          {IsHome.isConnect && (
            <div className="mr-3">
              <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {!collapsed ? <MenuOutlined /> : <MenuFoldOutlined />}
              </Button>
              {/* <Menu defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} mode="inline" theme="dark" inlineCollapsed={collapsed} items={items} /> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
