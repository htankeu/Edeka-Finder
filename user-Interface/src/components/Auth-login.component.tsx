import { ArrowRightOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input } from "antd";

const Login: React.FC<{toogle:()=>void}> = (Toogle) => {
  const onFinish = (values: any) => {
    console.log("OKAY");
  };

  return (
    <>
      <div className="w-screen h-screen text-white bg-zinc-800 flex flex-col gap-9 justify-center items-center">
        <h1 className="font-bold text-xl">Login</h1>
        <Form name="login" initialValues={{ remember: true }} style={{ maxWidth: 460 }} onFinish={onFinish}>
          <Form.Item name="identifier" rules={[{ required: true, message: "Email" }]}>
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: "Password" }]} className="text-white">
            <Input prefix={<LockOutlined />} placeholder="Password" />
            <a href="" className="text-right">
              <p>Forgot password</p>
            </a>
          </Form.Item>

          <Form.Item className="text-white">
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle className="text-white">
                <Checkbox className="text-white">Remember me</Checkbox>
              </Form.Item>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" icon={<ArrowRightOutlined />} className="bg-btn-primary text-black font-semibold" htmlType="submit">
              Log in
            </Button>
          <a href="" className="text-center text-white my-2" onClick={Toogle.toogle}><p>Register now!</p></a>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
