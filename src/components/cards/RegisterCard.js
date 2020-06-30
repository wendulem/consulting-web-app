import React from "react";
import { Card, Button, Form, Input } from "antd";
//import ThemeContext from "../context/ThemeContext";
//import axios from "axios";

function RegisterCard() {
  //probably wanna rename this context at some point too lazy now
  // this need an import (below)
  // const context = useContext(ThemeContext);
  // const { token, setToken } = context;

  const onFinish = (values) => {
    // var formData = new FormData();
    // formData.append('username', values.username);
    // formData.append('password', values.password);

    console.log("Success:", values);
    // axios
    //   .post("http://localhost:3000/users", formData)
    //   .then((res) => {
    //     console.log("test");
    //     //setToken(res.token);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
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
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default RegisterCard;
