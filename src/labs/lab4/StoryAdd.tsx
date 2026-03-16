import { Button, Form, Input } from "antd";
import CategorySelect from "./CategorySelect";

function StoryAdd() {
  return (
    <Form layout="vertical">
      <Form.Item label="Title" name="title">
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item label="Danh mục" name="categoryId">
        <CategorySelect />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Thêm truyện
      </Button>
    </Form>
  );
}

export default StoryAdd;