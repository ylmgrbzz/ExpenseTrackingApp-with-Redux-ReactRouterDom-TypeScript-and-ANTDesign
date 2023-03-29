import React from "react";
import { Form, Input, Result, Button } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { message } from "antd";
import api from "../utils/api";
import { LoginForm } from "../types/user";
import { login } from "../store/actions/userActions";
// import { AppState } from "../store";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const showError = (errorMessage: string) => {
    message.error(errorMessage);
  };

  const showSuccess = (successMessage: string) => {
    message.success(successMessage);
  };

  const { data, loading, error } = useSelector((state: any) => state.user);

  //   const onFinish = (values: LoginForm) => {
  //     dispatch(login(values));
  //   };

  const onFinish = async (values: LoginForm) => {
    try {
      console.log("values", values);
      await api.post("/users/login", values);
      navigate("/");
    } catch (error) {
      console.log({ error });
      showError((error as any).response.data.errorMessage);
    }
  };

  useEffect(() => {
    error && showError(error);
  }, [error]);

  useEffect(() => {
    data.username && showSuccess("You have successfully logged in!");
  }, [data.username]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [data]);

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      //   onFinishFailed={onFinishFailed}
    >
      <h2 style={{ textAlign: "center", marginBottom: 40 }}>Please login</h2>
      <Result
        status="success"
        title="You successfully signed up!"
        subTitle="Please login using your credentials."
      />
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
