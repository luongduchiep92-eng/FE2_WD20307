import { Button, Checkbox, Form, Input } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Category } from "./types";

function CategoryAdd() {
  const mutation = useMutation({
    mutationFn: async (values: Category) => {
      const { data } = await axios.post(
        "http://localhost:3000/categories",
        values
      );
      return data;
    },
  });

  const onFinish = (values: Category) => {
    mutation.mutate(values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Không được bỏ trống!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item name="active" valuePropName="checked">
        <Checkbox>Active</Checkbox>
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={mutation.isPending}>
        Submit
      </Button>
    </Form>
  );
}

export default CategoryAdd;