import { Table } from "antd";

function UserTable() {
  const data = [
    { key: 1, name: "Hiệp", email: "hiep@gmail.com", role: "Admin" },
    { key: 2, name: "Nam", email: "nam@gmail.com", role: "User" },
  ];

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Role", dataIndex: "role" },
  ];

  return <Table columns={columns} dataSource={data} />;
}

export default UserTable;