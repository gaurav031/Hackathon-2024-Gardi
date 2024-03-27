import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import login from "../../img/login.png";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { loginActions } from "../../store/loginStore";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleClick = () => {
    navigate("/home");
    dispatch(loginActions.login());
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img src={login} alt="Login" />
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Welcome back</p>
          <p>Login to the Dashboard</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleClick}
              className="login-form-button"
            >
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
