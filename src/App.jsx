
import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/react-router";
import Overview from "./pages/overview";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { ConfigProvider, Typography, Card } from "antd";

import AdminLayout from "./components/layout/AdminLayout";

const { Title, Paragraph } = Typography;

// Temporary page component
function ModulePage({ title, description }) {
  return (
    <Card bordered={false}>
      <Title level={3}>{title}</Title>
      <Paragraph type="secondary">
        {description}
      </Paragraph>

      <Paragraph>
        Welcome to the PhishTriage {title} module.
        We will implement its functionality next.
      </Paragraph>
    </Card>
  );
}

// Application resources
const resources = [
  {
    name: "overview",
    list: "/admin",
    meta: { label: "Overview" },
  },
  {
    name: "payment-reviews",
    list: "/admin/payment-reviews",
    meta: { label: "Payment Reviews" },
  },
  {
    name: "organizations",
    list: "/admin/organizations",
    meta: { label: "Organizations" },
  },
  {
    name: "users",
    list: "/admin/users",
    meta: { label: "Users" },
  },
  {
    name: "subscriptions",
    list: "/admin/subscriptions",
    meta: { label: "Plans & Subscriptions" },
  },
  {
    name: "reported-emails",
    list: "/admin/reported-emails",
    meta: { label: "Reported Emails" },
  },
  {
    name: "audit-logs",
    list: "/admin/audit-logs",
    meta: { label: "Audit Log" },
  },
];

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4F8CFF",
          borderRadius: 8,
          fontFamily: "Inter, Arial, sans-serif",
        },
      }}
    >
      <BrowserRouter>
        <Refine
          routerProvider={routerProvider}
          resources={resources}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          <Routes>
            <Route index element={<Overview />} />
            <Route
              path="/admin"
              element={<AdminLayout />}
            >
              <Route
                index
                element={
                  <ModulePage
                    title="Overview"
                    description="Monitor your PhishTriage platform."
                  />
                }
              />

              <Route
                path="payment-reviews"
                element={
                  <ModulePage
                    title="Payment Reviews"
                    description="Review company payment submissions."
                  />
                }
              />

              <Route
                path="organizations"
                element={
                  <ModulePage
                    title="Organizations"
                    description="Manage registered organizations."
                  />
                }
              />

              <Route
                path="users"
                element={
                  <ModulePage
                    title="Users"
                    description="Manage platform users."
                  />
                }
              />

              <Route
                path="subscriptions"
                element={
                  <ModulePage
                    title="Plans & Subscriptions"
                    description="Monitor plans and subscriptions."
                  />
                }
              />

              <Route
                path="reported-emails"
                element={
                  <ModulePage
                    title="Reported Emails"
                    description="Monitor reported phishing emails."
                  />
                }
              />

              <Route
                path="audit-logs"
                element={
                  <ModulePage
                    title="Audit Log"
                    description="Track administrative activities."
                  />
                }
              />
            </Route>

            <Route
              path="/"
              element={<Navigate to="/admin" replace />}
            />

            <Route
              path="*"
              element={<Navigate to="/admin" replace />}
            />
          </Routes>
        </Refine>
      </BrowserRouter>
    </ConfigProvider>
  );
}
