import { Button, Form, Input, Card } from "antd";

function RegisterForm() {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Card title="Form Đăng ký" style={{ maxWidth: 400 }}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form>
    </Card>
  );
}

export default RegisterForm;