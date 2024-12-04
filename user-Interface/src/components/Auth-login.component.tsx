import { ArrowRightOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input, Space } from "antd";

const Login: React.FC<{ toogle: () => void }> = (Toogle) => {
  const onFinish = (values: any) => {
    console.log("OKAY");
  };

  return (
    <>
      <div className="w-screen h-screen text-white bg-zinc-800 flex flex-col gap-10 justify-center items-center">
        <h1 className="font-bold text-xl">Login</h1>
        <Form name="login" initialValues={{ remember: true }} style={{ maxWidth: 460 }} onFinish={onFinish}>
          <Form.Item name="identifier" rules={[{ required: true, message: "Email" }]}>
            <Space.Compact>
              <Button icon={<MailOutlined color="#000" />} className="bg-btn-primary"></Button>
              <Input placeholder="Email" className="px-10" />
            </Space.Compact>
          </Form.Item>

          <div className="flex flex-col gap-0">
            <Form.Item name="password" rules={[{ required: true, message: "Password" }]} className="text-white">
              <Space.Compact>
                <Button icon={<LockOutlined color="#000" />} className="bg-btn-primary"></Button>
                <Input placeholder="Password" className="px-10" />
              </Space.Compact>
            </Form.Item>
            <div className="text-right">
              <a className="text-white">Forgot password</a>
            </div>
          </div>

          <Form.Item className="text-white">
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle className="text-white">
                <Checkbox className="text-white">Remember me</Checkbox>
              </Form.Item>
            </Flex>
          </Form.Item>

          <Form.Item>
            <div className="flex flex-col gap-1">
              <Button block type="primary" icon={<ArrowRightOutlined color="#000" />} className="bg-btn-primary text-black font-semibold" htmlType="submit">
                Log in
              </Button>
              <a className="text-center text-white my-2" onClick={Toogle.toogle}>
                <p>Register now!</p>
              </a>
            </div>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
