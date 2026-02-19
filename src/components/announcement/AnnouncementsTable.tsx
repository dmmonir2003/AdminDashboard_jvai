// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useState } from "react";
// import { Table, Button, Typography, Space, message, Popconfirm } from "antd";
// import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
// import AnnouncementFormModal from "./AnnouncementForm";

// const { Title, Text } = Typography;

// export default function AnnouncementsTable() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedAnnouncement, setSelectedAnnouncement] = useState<any>(null);

//   const [dataSource, setDataSource] = useState([
//     {
//       key: "1",
//       title: "System Maintenance Tonight",
//       audience: "All Users",
//       date: "Jan 24, 2026 · 5:30 PM",
//       description: "Expect downtime between 12 AM and 4 AM.",
//     },
//     {
//       key: "2",
//       title: "New Premium Features",
//       audience: "Zebu Uddin",
//       date: "Jan 24, 2026 · 5:30 PM",
//       description: "Check out the new dashboard analytics.",
//     },
//     {
//       key: "3",
//       title: "New Items Updated",
//       audience: "All Users",
//       date: "Jan 24, 2026 · 5:30 PM",
//       description: "Inventory has been refreshed.",
//     },
//     {
//       key: "4",
//       title: "New Year Announcements",
//       audience: "Rahim Ullha",
//       date: "Jan 24, 2026 · 5:30 PM",
//       description: "Happy 2026 to everyone!",
//     },
//   ]);

//   const handleDelete = (key: string) => {
//     setDataSource(dataSource.filter((item) => item.key !== key));
//     message.success("Announcement deleted successfully");
//   };

//   const columns = [
//     {
//       title: "Title",
//       dataIndex: "title",
//       key: "title",
//       render: (text: string) => <span style={{ fontWeight: 600 }}>{text}</span>,
//     },
//     { title: "Audience", dataIndex: "audience", key: "audience" },
//     { title: "Date", dataIndex: "date", key: "date" },
//     {
//       title: "Action",
//       key: "action",
//       align: "right" as const,
//       render: (_: any, record: any) => (
//         <Space size="middle">
//           <Button
//             icon={<EditOutlined />}
//             onClick={() => {
//               setSelectedAnnouncement(record);
//               setIsModalOpen(true);
//             }}
//             style={{ borderRadius: "6px" }}
//           >
//             Edit
//           </Button>
//           <Popconfirm
//             title="Delete announcement?"
//             onConfirm={() => handleDelete(record.key)}
//             okText="Yes"
//             cancelText="No"
//           >
//             <Button
//               danger
//               icon={<DeleteOutlined />}
//               style={{
//                 borderRadius: "6px",
//                 borderColor: "#ffccc7",
//                 color: "#ff4d4f",
//               }}
//             >
//               Delete
//             </Button>
//           </Popconfirm>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div
//       style={{
//         padding: "40px",
//         backgroundColor: "#f9fafb",
//         minHeight: "100vh",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginBottom: "24px",
//         }}
//       >
//         <div>
//           <Title level={2} style={{ margin: 0 }}>
//             Announcements
//           </Title>
//           <Text type="secondary">
//             Create and manage announcements sent to your users as notifications.
//           </Text>
//         </div>
//         <Button
//           type="primary"
//           icon={<PlusOutlined />}
//           size="large"
//           onClick={() => {
//             setSelectedAnnouncement(null);
//             setIsModalOpen(true);
//           }}
//           style={{
//             height: "45px",
//             borderRadius: "8px",
//             fontWeight: "bold",
//             background: "#1677ff",
//           }}
//         >
//           New Announcement
//         </Button>
//       </div>

//       <Table
//         columns={columns}
//         dataSource={dataSource}
//         pagination={{
//           total: 24,
//           showSizeChanger: false,
//           itemRender: (page, type, originalElement) => {
//             if (type === "prev") return <a>Previous</a>;
//             if (type === "next") return <a>Next</a>;
//             return originalElement;
//           },
//         }}
//         style={{
//           background: "#fff",
//           borderRadius: "12px",
//           border: "1px solid #f0f0f0",
//           overflow: "hidden",
//         }}
//       />

//       <AnnouncementFormModal
//         open={isModalOpen}
//         initialValues={selectedAnnouncement}
//         onCancel={() => setIsModalOpen(false)}
//         onFinish={(values) => {
//           console.log("Form Values:", values);
//           setIsModalOpen(false);
//           message.success(
//             selectedAnnouncement ? "Updated successfully" : "Sent successfully",
//           );
//         }}
//       />
//     </div>
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Table, Button, Typography, Space, Popconfirm, Card } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import AnnouncementFormModal from "./AnnouncementForm";
import "./AnnouncementsTable.css"; // Import CSS file
import { App } from "antd";

const { Title, Text } = Typography;

export default function AnnouncementsTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<any>(null);
  const { message } = App.useApp();
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      title: "System Maintenance Tonight",
      audience: "All Users",
      date: "Jan 24, 2026 · 5:30 PM",
      description: "Expect downtime between 12 AM and 4 AM.",
    },
    {
      key: "2",
      title: "New Premium Features",
      audience: "Zebu Uddin",
      date: "Jan 24, 2026 · 5:30 PM",
      description: "Check out the new dashboard analytics.",
    },
    {
      key: "3",
      title: "New Items Updated",
      audience: "All Users",
      date: "Jan 24, 2026 · 5:30 PM",
      description: "Inventory has been refreshed.",
    },
    {
      key: "4",
      title: "New Year Announcements",
      audience: "Rahim Ullha",
      date: "Jan 24, 2026 · 5:30 PM",
      description: "Happy 2026 to everyone!",
    },
  ]);

  const handleDelete = (key: string) => {
    setDataSource(dataSource.filter((item) => item.key !== key));
    message.success("Announcement deleted successfully");
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text: string) => <span style={{ fontWeight: 600 }}>{text}</span>,
    },
    { title: "Audience", dataIndex: "audience", key: "audience" },
    { title: "Date", dataIndex: "date", key: "date" },
    {
      title: "Action",
      key: "action",
      align: "right" as const,
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedAnnouncement(record);
              setIsModalOpen(true);
            }}
            style={{ borderRadius: "6px" }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Delete announcement?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              danger
              icon={<DeleteOutlined />}
              style={{
                borderRadius: "6px",
                borderColor: "#ffccc7",
                color: "#ff4d4f",
              }}
            >
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // Mobile Card View - rendered inline, not as a component
  const renderMobileCards = () => (
    <div className="mobile-card-view">
      {dataSource.map((record) => (
        <Card
          key={record.key}
          style={{
            marginBottom: "16px",
            borderRadius: "12px",
            border: "1px solid #f0f0f0",
          }}
        >
          <div style={{ marginBottom: "12px" }}>
            <Text
              strong
              style={{
                fontSize: "16px",
                display: "block",
                marginBottom: "8px",
              }}
            >
              {record.title}
            </Text>
            <Space
              orientation="vertical"
              size="small"
              style={{ width: "100%" }}
            >
              <div>
                <Text type="secondary" style={{ fontSize: "12px" }}>
                  Audience:{" "}
                </Text>
                <Text style={{ fontSize: "14px" }}>{record.audience}</Text>
              </div>
              <div>
                <Text type="secondary" style={{ fontSize: "12px" }}>
                  Date:{" "}
                </Text>
                <Text style={{ fontSize: "14px" }}>{record.date}</Text>
              </div>
            </Space>
          </div>
          <Space
            size="small"
            style={{ width: "100%", justifyContent: "flex-end" }}
          >
            <Button
              icon={<EditOutlined />}
              onClick={() => {
                setSelectedAnnouncement(record);
                setIsModalOpen(true);
              }}
              style={{ borderRadius: "6px" }}
            >
              Edit
            </Button>
            <Popconfirm
              title="Delete announcement?"
              onConfirm={() => handleDelete(record.key)}
              okText="Yes"
              cancelText="No"
            >
              <Button
                danger
                icon={<DeleteOutlined />}
                style={{
                  borderRadius: "6px",
                  borderColor: "#ffccc7",
                  color: "#ff4d4f",
                }}
              >
                Delete
              </Button>
            </Popconfirm>
          </Space>
        </Card>
      ))}
    </div>
  );

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
      }}
      className="announcements-container"
    >
      <div
        className="header-content"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "24px",
        }}
      >
        <div>
          <Title level={2} style={{ margin: 0 }}>
            Announcements
          </Title>
          <Text type="secondary">
            Create and manage announcements sent to your users as notifications.
          </Text>
        </div>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          onClick={() => {
            setSelectedAnnouncement(null);
            setIsModalOpen(true);
          }}
          style={{
            height: "45px",
            borderRadius: "8px",
            fontWeight: "bold",
            background: "#1677ff",
          }}
        >
          New Announcement
        </Button>
      </div>

      {/* Desktop Table View */}
      <div className="desktop-table-view">
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={{
            total: 24,
            showSizeChanger: false,
            itemRender: (page, type, originalElement) => {
              if (type === "prev") return <a>Previous</a>;
              if (type === "next") return <a>Next</a>;
              return originalElement;
            },
          }}
          style={{
            background: "#fff",
            borderRadius: "12px",
            border: "1px solid #f0f0f0",
            overflow: "hidden",
          }}
        />
      </div>

      {/* Mobile Card View */}
      {renderMobileCards()}

      <AnnouncementFormModal
        open={isModalOpen}
        initialValues={selectedAnnouncement}
        onCancel={() => setIsModalOpen(false)}
        onFinish={(values) => {
          console.log("Form Values:", values);
          setIsModalOpen(false);
          message.success(
            selectedAnnouncement ? "Updated successfully" : "Sent successfully",
          );
        }}
      />
    </div>
  );
}
