import { useRouter } from "next/router";
import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { queryRegister } from "src/service/auth";

export function RegisterForm() {
  const router = useRouter();

  const { mutate: onRegister, isLoading } = useMutation(queryRegister());

  const onFinish = (values) => {
    const data = { data: values };
    onRegister(data, {
      onSuccess: () => router.push("/auth/login"),
    });
  };

  return (
    <Form
      name="login"
      className="w-[100%]"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[
          {
            required: true,
            message: "Please input your full name!",
          },
        ]}
      >
        <Input placeholder="Full Name" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input placeholder="Password" />
      </Form.Item>
      <Form.Item className="mb-0 ">
        <div className="my-1 flex items-center justify-between">
          <Button htmlType="submit" loading={isLoading}>
            Register
          </Button>
          <Link href="/auth/register" className="text-[12px] text-[#1890ff]">
            Login Now
          </Link>
        </div>
      </Form.Item>
    </Form>
  );
}
