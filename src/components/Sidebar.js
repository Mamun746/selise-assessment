import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, HeartOutlined } from "@ant-design/icons";

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onCollapse = (isCollapsed) => {
    setIsCollapsed(isCollapsed);
  };
  return (
    <Layout.Sider
      style={{ minHeight: "100vh" }}
      collapsible
      collapsed={isCollapsed}
      onCollapse={onCollapse}
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/authors"> Author</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<HeartOutlined />}>
          <Link to="/favorite-authors"> Favorite Author</Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}
