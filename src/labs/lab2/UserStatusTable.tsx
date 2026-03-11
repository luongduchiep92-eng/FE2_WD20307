import { Table, Tag, Button, Space } from "antd";

function UserStatusTable() {
  const data = [
    { key: 1, id: 1, name: "Hiệp", email: "hiep@gmail.com", status: "active" },
    { key: 2, id: 2, name: "Nam", email: "nam@gmail.com", status: "inactive" },
  ];

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },

    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) =>
        status === "active" ? <Tag color="green">Active</Tag> : <Tag color="red">Inactive</Tag>,
    },

    {
      title: "Action",
      render: () => (
        <Space>
          <Button type="primary">Edit</Button>
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
}

export default UserStatusTable;