import { CaretLeftFilled, CaretRightFilled, CommentOutlined, ControlOutlined, CustomerServiceOutlined, PlusOutlined, SearchOutlined, SettingOutlined } from "@ant-design/icons";
import { FloatButton, Menu, type MenuProps } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const SlideMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const navivgate = useNavigate();

  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  const handleSearchProduct = () => {
    navivgate("product/search");
  };

  const items: MenuItem[] = [
    { key: "1", icon: <SearchOutlined onClick={handleSearchProduct} />, label: "Search" },
    { key: "2", icon: <ControlOutlined />, label: "Filter" },
    { key: "3", icon: <SettingOutlined />, label: "Settings" },
  ];

  return (
    <>
      <FloatButton.Group trigger="hover" type="primary" style={{ insetInlineEnd: 94 }} icon={<PlusOutlined />}>
        <FloatButton icon={<SearchOutlined onClick={handleSearchProduct} />} />
        <FloatButton icon={<ControlOutlined />} />
        <FloatButton icon={<SettingOutlined />} />
      </FloatButton.Group>
    </>
  );
};

export default SlideMenu;
