import { Button, type MenuProps } from "antd";
import edekaFinder from "../../assets/logo-edeka.png";
import { BarcodeOutlined, MenuFoldOutlined, MenuOutlined, SettingOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <SettingOutlined />, label: "Settings" },
  { key: "2", icon: <UserOutlined />, label: "Profile" },
];

const HeaderNav: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleCollapsed = () => setCollapsed(!collapsed);
  const handleScan = () => {
    navigate("/scan");
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <img src={edekaFinder.src} width={100} />
        <div className="flex flex-row gap-3">
          <Button type="primary" onClick={handleScan} style={{ marginBottom: 16 }}>
            <BarcodeOutlined />
          </Button>
          <Button type="primary" onClick={handleScan} style={{ marginBottom: 16 }}>
            <ShoppingCartOutlined />
          </Button>
          <div className="mr-3">
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
              {!collapsed ? <MenuOutlined /> : <MenuFoldOutlined />}
            </Button>
            {/* <Menu defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} mode="inline" theme="dark" inlineCollapsed={collapsed} items={items} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
