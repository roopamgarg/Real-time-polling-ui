import * as React from 'react';
import { Form, Input, Button } from 'antd';
import OptionsForm from '../OptionsForm/OptionsForm';

interface Props {
    onFinish: (values: any) => void,
    loader: boolean
}

export function PollForm({ onFinish, loader }: Props) {
    return (
        <Form className="create-poll__form" onFinish={onFinish}>
            <Form.Item name="title"
                rules={[{ required: true, message: `Enter Title` }]}
            >
                <Input className="create-poll__input"

                    placeholder="Title" autoComplete="off" />
            </Form.Item>
            <Form.Item
                name="question"
                rules={[{ required: true, message: `Enter Question` }]}

            >
                <Input className="create-poll__input" placeholder="Enter Question" autoComplete="off" />
            </Form.Item>
            <OptionsForm />
            <Form.Item style={{ textAlign: 'right' }}>
                <Button className="create-poll__btn" loading={loader}  htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}
