import { Button, Form, Input, InputNumber } from "antd";

const RegisterForm = () => {
    const onFinish = (values : any) => {
        console.log(values);
    };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{maxWidth: 500}}  >
        <Form.Item label="Tên" name="name" rules={[{required: true, message: "Nhập tên!"}]}>
            <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{required: true, message: "Nhập email!"},
            {type:"email", message: "email không đúng định dạng"}
        ]}>
            <Input />
        </Form.Item>
        <Form.Item label="Phone" name="phone" rules={[{required: true, message: "Nhập số điện thoại!"}]}>
            <InputNumber />
        </Form.Item>
        <Form.Item label="Mật khẩu" name="password" rules={[{required: true, message: "Nhập mật khẩu!"},
            {min: 6, message: "Mật khẩu tối thiểu 6 kí tự!"}
        ]}>
            <Input.Password />
        </Form.Item>
        <Form.Item
        label="Confirm Password"
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          { required: true, message: "Nhập lại mật khẩu!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("Mật khẩu xác nhận không khớp!")
              );
            },
          }),
        ]}
        >
            <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit">
            Đăng kí
        </Button>
    </Form>
  )
}

export default RegisterForm