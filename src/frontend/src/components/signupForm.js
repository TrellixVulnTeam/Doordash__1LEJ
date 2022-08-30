import { Button, Form, Input, message, Modal } from "antd";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { signup } from "../utils";

class SignupForm extends React.Component {
  state = { displayModal: false };

  handleCancel = () => {
    this.setState({ displayModal: false });
  };

  signupOnClick = () => {
    this.setState({ displayModal: true });
  };

  onFinish = (data) => {
    signup(data)
      .then(() => {
        this.setState({ displayModal: false });
        message.success("Sign Up Successful");
      })
      .catch((err) => {
        message.error(err.message);
      });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.signupOnClick}>
          Sign Up
        </Button>
        <Modal
          title="Register"
          visible={this.state.displayModal}
          onCancel={this.handleCancel}
          footer={null}
          destroyOnClose={true}
        >
          <Form
            name="normal_register"
            onFinish={this.onFinish}
            preserve={false}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>
            <Form.Item
              name="firstName"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input placeholder="Firstname" />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input placeholder="Lastname" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}

export default SignupForm;
