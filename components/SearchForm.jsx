import React from 'react';
import { Button, Form, Input } from 'antd';

export default function SearchForm({onFinish}) {

    return (
        <Form 
        name="searchForm"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        >
            <Form.Item label="Search Term" name="searchTerm"
                rules={[
                    {
                        required: true,
                        message: 'Please input the term to search for.',
                    },
                ]}>
                <Input placeholder="Search Term"/>
            </Form.Item>

            <Form.Item label="Number of Songs" name="limit"
                rules={[
                    {
                        required: true,
                        message: 'Please input the number of songs to search for.',
                    },
                ]}>
                <Input placeholder="limit"/>
            </Form.Item>
            
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
    </Form.Item>
  </Form>
    )
}