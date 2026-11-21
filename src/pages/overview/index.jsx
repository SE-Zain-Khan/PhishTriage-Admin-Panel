
import {
  Row,
  Col,
  Card,
  Statistic,
  Typography,
  Table,
  Tag,
  Space,
} from "antd";

import {
  BankOutlined,
  TeamOutlined,
  CreditCardOutlined,
  WarningOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const recentActivities = [
  {
    key: "1",
    activity: "New organization registered",
    organization: "Tech Solutions",
    status: "Pending",
    date: "Today",
  },
  {
    key: "2",
    activity: "Payment receipt submitted",
    organization: "Digital Systems",
    status: "Under Review",
    date: "Today",
  },
  {
    key: "3",
    activity: "Organization account created",
    organization: "Cloud Services",
    status: "Approved",
    date: "Yesterday",
  },
];

const columns = [
  {
    title: "Activity",
    dataIndex: "activity",
    key: "activity",
  },
  {
    title: "Organization",
    dataIndex: "organization",
    key: "organization",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      const color =
        status === "Approved"
          ? "success"
          : status === "Pending"
          ? "warning"
          : "processing";

      return <Tag color={color}>{status}</Tag>;
    },
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
];

export default function Overview() {
  return (
    <div>
      {/* Page Heading */}
      <Space direction="vertical" size={4}>
        <Title level={3} style={{ margin: 0 }}>
          Dashboard Overview
        </Title>

        <Text type="secondary">
          Monitor your PhishTriage platform from one place.
        </Text>
      </Space>

      {/* Statistics Cards */}
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Organizations"
              value={0}
              prefix={<BankOutlined />}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Users"
              value={0}
              prefix={<TeamOutlined />}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Pending Payments"
              value={0}
              prefix={<CreditCardOutlined />}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Reported Threats"
              value={0}
              prefix={<WarningOutlined />}
            />
          </Card>
        </Col>
      </Row>

      {/* Recent Activities */}
      <Card
        title="Recent Platform Activities"
        style={{ marginTop: 24 }}
      >
        <Table
          columns={columns}
          dataSource={recentActivities}
          pagination={false}
          scroll={{ x: true }}
        />
      </Card>
    </div>
  );
}
