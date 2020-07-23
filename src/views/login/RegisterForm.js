import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import "./index.scss"


class RegisterForm extends Component {

    constructor(props) {
      super(props)
      this.state = {
  
      };
    }

    
    onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
  
    render() {
  
      return (
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={() => this.onFinish}
        >

            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请输入密码"/>
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: '请输入确认密码!' }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请输入确认密码"/>
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: '请输入验证码!' }]}>
            <Row gutter={13}>
                <Col span={15}>
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请输入验证码"/>
                </Col>
                <Col span={9}>
                <Button type="primary" htmlType="submit" danger>
                    获取验证码
                </Button>
                </Col>
            </Row>
            </Form.Item>

            <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" block>
                登 录
            </Button>
            </Form.Item>
        </Form>

      )
    }
  
  }
  
  export default RegisterForm;