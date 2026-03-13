import { Button, Form, Input, InputNumber } from "antd";

const ProductForm = () => {
    const onFinish = (values: any) => {
        console.log(values);
    }
  return (
    <Form onFinish={onFinish} layout="vertical">
        <Form.Item label="Tên sản phẩm" name="name" rules={[{required: true, message: "Nhập tên sản phẩm"}]}>
            <Input />
        </Form.Item>
        <Form.Item label="Giá sản phẩm" name="price" rules={[{required: true, message: "Nhập giá sản phẩm"}]}>
            <InputNumber style={{width: "100%"}} />
        </Form.Item>
        <Form.Item label="Mô tả sản phẩm" name="description">
            <Input.TextArea rows={4} />
        </Form.Item>
        <Button htmlType="submit" type="primary">
            Thêm sản phẩm
        </Button>
    </Form>
  )
}

export default ProductForm