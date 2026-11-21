
import { Layout, Menu, Typography } from "antd";
import {
  DashboardOutlined,
  CreditCardOutlined,
  BankOutlined,
  TeamOutlined,
  WalletOutlined,
  SafetyOutlined,
  HistoryOutlined,
} from "@ant-design/icons";

import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;
const { Text } = Typography;

const menuItems = [
  {
    key: "/admin",
    icon: <DashboardOutlined />,
    label: "Overview",
  },
  {
    key: "/admin/payment-reviews",
    icon: <CreditCardOutlined />,
    label: "Payment Reviews",
  },
  {
    key: "/admin/organizations",
    icon: <BankOutlined />,
    label: "Organizations",
  },
  {
    key: "/admin/users",
    icon: <TeamOutlined />,
    label: "Users",
  },
  {
    key: "/admin/subscriptions",
    icon: <WalletOutlined />,
    label: "Plans & Subscriptions",
  },
  {
    key: "/admin/reported-emails",
    icon: <SafetyOutlined />,
    label: "Reported Emails",
  },
  {
    key: "/admin/audit-logs",
    icon: <HistoryOutlined />,
    label: "Audit Log",
  },
];

export default function Sidebar({ collapsed, setCollapsed }) {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedKey =
    location.pathname === "/admin"
      ? "/admin"
      : location.pathname;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      width={250}
      theme="dark"
      style={{
        minHeight: "100vh",
        background: "#141C2E",
      }}
    >
      {/* Brand */}
      <div
        style={{
          height: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          borderBottom: "1px solid #293449",
        }}
      >
        <SafetyOutlined
          style={{ fontSize: 25, color: "#4F8CFF" }}
        />

        {!collapsed && (
          <Text
            strong
            style={{ color: "white", fontSize: 19 }}
          >
            PhishTriage
          </Text>
        )}
      </div>

      {/* Navigation */}
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        items={menuItems}
        onClick={({ key }) => navigate(key)}
        style={{
          marginTop: 20,
          background: "#141C2E",
          borderInlineEnd: "none",
        }}
      />
    </Sider>
  );
}
