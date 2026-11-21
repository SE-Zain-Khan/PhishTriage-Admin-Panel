
import { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import AdminHeader from "./header";

const { Content } = Layout;

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>

      {/* Sidebar */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* Main Application */}
      <Layout>

        {/* Top Header */}
        <AdminHeader />

        {/* Page Content */}
        <Content
          style={{
            margin: 24,
            padding: 24,
            background: "#F5F7FA",
            minHeight: 280,
            borderRadius: 8,
          }}
        >
          <Outlet />
        </Content>

      </Layout>
    </Layout>
  );
}
