import { Button, Form, Input } from "antd";

const LoginForm = () => {
    const onFinish = (values : any) => {
        console.log(values);
    };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{maxWidth: 500}}  >
        <Form.Item label="Tên" name="name" rules={[{required: true, message: "Nhập tên!"}]}>
            <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{required: true, message: "Nhập email!"}]}>
            <Input />
        </Form.Item>
        <Form.Item label="Mật khẩu" name="password" rules={[{required: true, message: "Nhập mật khẩu!"}]}>
            <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
            Đăng nhập
        </Button>
    </Form>
  )
}

export default LoginForm