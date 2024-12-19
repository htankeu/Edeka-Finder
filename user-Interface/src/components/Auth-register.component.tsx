import { ArrowRightOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input, Space } from "antd";
import { useState } from "react";

const Register: React.FC<{ toogle: () => void }> = (Toogle) => {
  const onFinish = (values: any) => {
    console.log("OKAY");
  };

  return (
    <>
      <div className="w-screen h-screen text-white bg-zinc-800 flex flex-col gap-9 mt-20 items-center">
        <h1 className="font-bold text-xl">Registrierung</h1>
        <Form name="login" initialValues={{ remember: true }} style={{ maxWidth: 460 }} onFinish={onFinish}>
          <div className="flex flex-col lg:flex-row lg:gap-5">
            <Form.Item name="Firstname" rules={[{ required: true, message: "Vorname eintragen" }]}>
              <Space.Compact>
                <Button icon={<UserOutlined style={{ color: "#000" }} className="decoration-black" />} className="bg-btn-primary"></Button>
                <Input placeholder="Vorname" className="px-10" />
              </Space.Compact>
            </Form.Item>
            <Form.Item name="Lastname" rules={[{ required: true, message: "Nachname eintragen" }]}>
              <Space.Compact>
                <Button icon={<UserOutlined color="#000" />} className="bg-btn-primary"></Button>
                <Input placeholder="Nachname" className="px-10" />
              </Space.Compact>
            </Form.Item>
          </div>

          <Form.Item name="Email" rules={[{ required: true, message: "Mail eintragen" }]}>
            <Space.Compact style={{ width: "100%" }}>
              <Button icon={<MailOutlined color="#000" />} className="bg-btn-primary"></Button>
              <Input placeholder="Mail Addresse" className="px-10" />
            </Space.Compact>
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: "Passwort eintragen" }]} className="text-white">
            <Space.Compact style={{ width: "100%" }}>
              <Button icon={<LockOutlined color="#000" />} className="bg-btn-primary"></Button>
              <Input.Password placeholder="Passwort" className="px-8" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
            </Space.Compact>
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Passwort eintragen" }]} className="text-white">
            <Space.Compact style={{ width: "100%" }}>
              <Button icon={<LockOutlined color="#000" />} className="bg-btn-primary"></Button>
              <Input.Password placeholder="Passwort bestätigen" className="px-8" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
            </Space.Compact>
          </Form.Item>

          <Form.Item className="lg:flex justify-center">
            <div className="flex flex-col gap-1 mt-9">
              <Button block type="primary" icon={<ArrowRightOutlined color="#000" />} className="bg-btn-primary text-black font-semibold lg:px-16" htmlType="submit">
                Registrieren
              </Button>
              <div className="flex flex-col text-center text-white gap-1 my-6">
                <p>Ich habe bereits einen Konto.</p>
                <a className="text-center text-white" onClick={Toogle.toogle}>
                  <p className="text-blue-500 italic text-lg">Log in !</p>
                </a>
              </div>
            </div>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Register;
