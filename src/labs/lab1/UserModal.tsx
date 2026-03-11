import { Button, Modal, Form, Input } from "antd";
import { useState } from "react";

function UserModal() {
  const [open, setOpen] = useState(false);

  const onFinish = (values: any) => {
    console.log(values);
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Thêm User
      </Button>

      <Modal open={open} footer={null} onCancel={() => setOpen(false)} title="Thêm User">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>

          <Form.Item name="email" label="Email">
            <Input />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
}

export default UserModal;