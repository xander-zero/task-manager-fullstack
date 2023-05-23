import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Form, Input } from "antd";
import { signIn } from "next-auth/react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

export function LoginForm() {
  const router = useRouter();

  const onFinish = async (values) => {
    const { email, password } = values;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!res.error) router.push("/dashboard");
  };

  return (
    <Form
      name="login"
      className="w-[100%]"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
          {
            type: "email",
            message: "Email is not valid!",
          },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="admin@gmail.com" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="password" />
      </Form.Item>

      <Form.Item className="mb-0 ">
        <div className="my-1 flex items-center justify-between">
          <Button htmlType="submit" loading={isLoading}>
            Login
          </Button>
          <Link href="/auth/register" className="text-[12px] text-[#1890ff]">
            Register Now!
          </Link>
        </div>
      </Form.Item>
    </Form>
  );
}
