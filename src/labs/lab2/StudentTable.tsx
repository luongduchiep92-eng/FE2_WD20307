import { Table } from "antd";

function StudentTable() {
  const data = [
    { key: 1, id: 1, name: "Hiệp", age: 20, major: "IT" },
    { key: 2, id: 2, name: "Nam", age: 21, major: "Marketing" },
  ];

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
    { title: "Major", dataIndex: "major" },
  ];

  return <Table columns={columns} dataSource={data} />;
}

export default StudentTable;