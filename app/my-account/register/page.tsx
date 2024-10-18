"use client";
import React, { useState } from "react";
import { Form, Input, Button, Checkbox, message, Spin } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import { useRouter } from "next/navigation";

const Register = () => {
  const [signup, setSignUp] = useState(true);
  const [loading, setLoading] = React.useState(false);
  const [form] = Form.useForm();
  const [signinForm] = Form.useForm();
  const router = useRouter();

  async function onFinish(values: any) {
    setLoading(true);
    try {
      console.log("onFinish");
      const resp = await fetch("/api/account/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const res = await resp.json();
      if (res["status"] == "200") {
        // go to personal profile page
        form.resetFields();
        router.push("/");
      } else {
        // show pop up to show error message
        message.error(res["message"] || "unknown error");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  async function onSignIn(values: any) {
    setLoading(true);
    try {
      console.log("onFinish");
      const resp = await fetch("/api/account/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const res = await resp.json();
      if (res["status"] == "200") {
        // go to personal profile page
        form.resetFields();
        router.push("/");
      } else {
        // show pop up to show error message
        message.error(res["message"] || "unknown error");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "100px auto",
        padding: "24px",
        border: "1px solid #f0f0f0",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      {signup ? (
        <>
          <h2 style={{ textAlign: "center" }}>Sign Up</h2>
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{ remember: true }}
            scrollToFirstError
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
                { min: 6, message: "Password must be minimum 6 characters." },
              ]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                { required: true, message: "Please confirm your Password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Confirm Password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" disabled={loading} block>
                Register
              </Button>
            </Form.Item>
            <p>
              already have an account?
              <span
                onClick={() => {
                  setSignUp(false);
                }}
                style={{ color: "#00f", cursor: "pointer" }}
              >
                sign in
              </span>
            </p>
          </Form>
          {loading && (
            <div style={{ marginTop: "10px" }}>
              <Spin />
              <p>正在注册，请稍候...</p>
            </div>
          )}
        </>
      ) : (
        <>
          <h2 style={{ textAlign: "center" }}>Sign in</h2>
          <Form
            form={signinForm}
            name="signin"
            onFinish={onSignIn}
            initialValues={{ remember: true }}
            scrollToFirstError
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Username or email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
                { min: 6, message: "Password must be minimum 6 characters." },
              ]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" disabled={loading} block>
                Sign In
              </Button>
            </Form.Item>
            <p>
              don't have an account?
              <span
                onClick={() => {
                  setSignUp(true);
                }}
                style={{ color: "#00f", cursor: "pointer" }}
              >
                sign in
              </span>
            </p>
          </Form>
        </>
      )}
    </div>
  );
};

export default Register;
