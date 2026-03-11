import { Table } from "antd";

function ProductTable() {
  const data = [
    { key: 1, id: 1, name: "Laptop", price: 20000, category: "Electronics" },
    { key: 2, id: 2, name: "Phone", price: 15000, category: "Electronics" },
    { key: 3, id: 3, name: "Mouse", price: 500, category: "Accessories" },
    { key: 4, id: 4, name: "Keyboard", price: 800, category: "Accessories" },
  ];

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Product Name", dataIndex: "name" },
    { title: "Price", dataIndex: "price" },
    { title: "Category", dataIndex: "category" },
  ];

  return <Table columns={columns} dataSource={data} pagination={{ pageSize: 3 }} />;
}

export default ProductTable;