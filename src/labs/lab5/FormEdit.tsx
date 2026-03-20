import { Form, Input, Button, Spin, message } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const EditStory = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  if (!id) return <p>Không tìm thấy ID</p>;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["story", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/stories/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data, form]);

  const mutation = useMutation({
    mutationFn: async (values: any) => {
      return axios.put(`http://localhost:3000/stories/${id}`, {
        ...values,
        id,
      });
    },
    onSuccess: () => {
      message.success("Cập nhật thành công!");
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      navigate("/");
    },
    onError: () => {
      message.error("Cập nhật thất bại!");
    },
  });

  const onFinish = (values: any) => {
    mutation.mutate(values);
  };

  if (isLoading) return <Spin />;
  if (isError) return <p>Lỗi khi tải dữ liệu</p>;

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} disabled={mutation.isPending}>
      {form.getFieldValue("image") && (
        <img
          src={form.getFieldValue("image")}
          alt=""
          style={{ width: 150, marginBottom: 10 }}
        />
      )}

      <Form.Item
        name="title"
        label="Tên truyện"
        rules={[{ required: true, message: "Không được để trống!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="author"
        label="Tác giả"
        rules={[{ required: true, message: "Không được để trống!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="image"
        label="Ảnh"
        rules={[{ type: "url", message: "Link không hợp lệ!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Mô tả">
        <Input.TextArea />
      </Form.Item>

      <Button
        type="primary"
        htmlType="submit"
        loading={mutation.isPending}
        disabled={!form.isFieldsTouched()}
      >
        Cập nhật
      </Button>
    </Form>
  );
};

export default EditStory;