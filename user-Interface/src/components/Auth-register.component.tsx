import { ArrowRightOutlined, LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input } from "antd";

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
              <Input prefix={<UserOutlined />} placeholder="Firstname" />
            </Form.Item>
            <Form.Item name="Lastname" rules={[{ required: true, message: "Lastname" }]}>
              <Input prefix={<UserOutlined />} placeholder="Lastname" />
            </Form.Item>
          </div>

          <Form.Item name="Email" rules={[{ required: true, message: "Email" }]}>
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: "Password" }]} className="text-white">
            <Input prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Password" }]} className="text-white">
            <Input prefix={<LockOutlined />} placeholder="Password confirm" />
          </Form.Item>

          <Form.Item className="lg:flex justify-center">
            <Button block type="primary" icon={<ArrowRightOutlined />} className="bg-btn-primary text-black font-semibold lg:px-16" htmlType="submit">
              Register
            </Button>
            <a href="" className="text-center text-white my-2" onClick={Toogle.toogle}>
              <p>Log in !</p>
            </a>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Register;
