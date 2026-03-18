import { Table, Image, Spin, Popconfirm } from "antd";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const StoryList = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, isError } = useQuery({
        queryKey: ["stories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/stories");
            return res.data;
        },

    });
    const handleDelete = async (id: number) => {
        await axios.delete(`http://localhost:3000/stories/${id}`);
        queryClient.invalidateQueries({ queryKey: ["stories"] });
    };
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },

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
        {
            title: "Tên truyện",
            dataIndex: "title",
        },
        {
            title: "Tác giả",
            dataIndex: "author",
        },
        {
            title: "Mô tả",
            dataIndex: "description",
        },
        {
            title: "Hành Động",
            render: (_: any, record: any) => (
                <Popconfirm
                    title="Xóa truyện"
                    description="Bạn có chắc muốn xóa không?"
                    onConfirm={() => handleDelete(record.id)}
                    okText="Xóa"
                    cancelText="Hủy"
                >
                    <button>Xóa</button>
                </Popconfirm>
            )
        }
    ];

    if (isLoading) return <Spin />;

    if (isError) return <p>Lỗi khi tải dữ liệu</p>;

    return <Table columns={columns} dataSource={data} />;
};

export default StoryList;