import { ArrowRightOutlined, LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input, Space } from "antd";

const Register: React.FC<{ toogle: () => void }> = (Toogle) => {
  const onFinish = (values: any) => {
    console.log("OKAY");
  };

  return (
    <>
      <div className="w-screen h-screen text-white bg-zinc-800 flex flex-col gap-9 justify-center items-center">
        <h1 className="font-bold text-xl">Register</h1>
        <Form name="login" initialValues={{ remember: true }} style={{ maxWidth: 460 }} onFinish={onFinish}>
          <div className="flex flex-col lg:flex-row lg:gap-5">
            <Form.Item name="Firstname" rules={[{ required: true, message: "Firstname" }]}>
              <Space.Compact>
                <Button icon={<UserOutlined />} className="bg-btn-primary"></Button>
                <Input placeholder="Firstname" />
              </Space.Compact>
            </Form.Item>
            <Form.Item name="Lastname" rules={[{ required: true, message: "Lastname" }]}>
              <Space.Compact>
                <Button icon={<UserOutlined />} className="bg-btn-primary"></Button>
                <Input placeholder="Lastname" />
              </Space.Compact>
            </Form.Item>
          </div>

          <Form.Item name="Email" rules={[{ required: true, message: "Email" }]}>
            <Space.Compact style={{ width: "100%" }}>
              <Button icon={<MailOutlined />} className="bg-btn-primary"></Button>
              <Input placeholder="Email" />
            </Space.Compact>
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: "Password" }]} className="text-white">
            <Space.Compact style={{ width: "100%" }}>
              <Button icon={<LockOutlined />} className="bg-btn-primary"></Button>
              <Input placeholder="Password" />
            </Space.Compact>
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Password" }]} className="text-white">
            <Space.Compact style={{ width: "100%" }}>
              <Button icon={<LockOutlined />} className="bg-btn-primary"></Button>
              <Input placeholder="Password confirm" />
            </Space.Compact>
          </Form.Item>

          <Form.Item className="lg:flex justify-center">
            <Button block type="primary" icon={<ArrowRightOutlined />} className="bg-btn-primary text-black font-semibold lg:px-16" htmlType="submit">
              Register
            </Button>
            <a className="text-center text-white my-2" onClick={Toogle.toogle}>
              <p>Log in !</p>
            </a>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Register;
