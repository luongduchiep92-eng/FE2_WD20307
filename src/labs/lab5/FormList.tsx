import { Table, Image, Spin, Popconfirm, message, Button } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const StoryList = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) =>
      axios.delete(`http://localhost:3000/stories/${id}`),
    onSuccess: () => {
      message.success("Xóa thành công!");
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
    onError: () => {
      message.error("Xóa thất bại!");
    },
  });

  const columns = [
    { title: "ID", dataIndex: "id" },

    {
      title: "Ngày",
      dataIndex: "date",
      render: (date: string) =>
        date ? new Date(date).toLocaleDateString("vi-VN") : "",
    },

    {
      title: "Ảnh",
      dataIndex: "image",
      render: (url: string) => <Image src={url} width={60} />,
    },

    { title: "Tên truyện", dataIndex: "title" },
    { title: "Tác giả", dataIndex: "author" },
    { title: "Mô tả", dataIndex: "description" },

    {
      title: "Hành Động",
      render: (_: any, record: any) => (
        <>
          <Popconfirm
            title="Xóa truyện"
            description="Bạn có chắc muốn xóa không?"
            onConfirm={() => deleteMutation.mutate(record.id)}
            okText="Xóa"
            cancelText="Hủy"
          >
            <Button danger size="small" loading={deleteMutation.isPending}>
              Xóa
            </Button>
          </Popconfirm>

          <Link to={`edit/${record.id}`}>
            <Button type="primary" size="small" style={{ marginLeft: 10 }}>
              Sửa
            </Button>
          </Link>
        </>
      ),
    },
  ];

  if (isLoading) return <Spin />;
  if (isError) return <p>Lỗi khi tải dữ liệu</p>;

  return <Table columns={columns} dataSource={data} rowKey="id" />;
};

export default StoryList;