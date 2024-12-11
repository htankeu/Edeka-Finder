import { CaretLeftFilled, CaretRightFilled, ControlOutlined, SearchOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu, type MenuProps } from "antd";
import { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <SearchOutlined />, label: "Search" },
  { key: "2", icon: <ControlOutlined />, label: "Filter" },
  { key: "3", icon: <SettingOutlined />, label: "Settings" },
];

const SlideMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <>
      <div className="flex flex-row ml-3 z-99">
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
          className={`border rounded-full ${collapsed ? "py-5" : "py-20 pr-2"}`}
          style={{
            width: collapsed ? "50px" : "150px",
          }}
        />
        <div className="flex items-center justify-center">{collapsed ? <CaretRightFilled onClick={handleCollapse} /> : <CaretLeftFilled onClick={handleCollapse} />}</div>
      </div>
    </>
  );
};

export default SlideMenu;
