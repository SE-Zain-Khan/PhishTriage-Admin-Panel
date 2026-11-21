
import {
  Layout,
  Avatar,
  Typography,
  Space,
  Badge,
  Dropdown,
  Button,
} from "antd";

import {
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Header: AntHeader } = Layout;
const { Text } = Typography;

export default function AdminHeader() {
  const profileItems = [
    {
      key: "profile",
      label: "My Profile",
      icon: <UserOutlined />,
    },
    {
      key: "settings",
      label: "Settings",
      icon: <SettingOutlined />,
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: "Sign Out",
      icon: <LogoutOutlined />,
      disabled: true,
    },
  ];

  return (
    <AntHeader
      style={{
        background: "#FFFFFF",
        padding: "0 24px",
        height: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        borderBottom: "1px solid #EEEEEE",
      }}
    >
      <Space size={24}>
        <Badge dot color="blue">
          <BellOutlined
            style={{ fontSize: 20, cursor: "pointer" }}
          />
        </Badge>

        <Dropdown
          menu={{ items: profileItems }}
          placement="bottomRight"
        >
          <Space style={{ cursor: "pointer" }}>
            <Avatar
              icon={<UserOutlined />}
              style={{ background: "#4F8CFF" }}
            />

            <div>
              <Text strong>Platform Admin</Text>
              <br />
              <Text type="secondary" style={{ fontSize: 12 }}>
                Administrator
              </Text>
            </div>
          </Space>
        </Dropdown>
      </Space>
    </AntHeader>
  );
}
