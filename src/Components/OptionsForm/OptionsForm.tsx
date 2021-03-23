import React, { useState } from 'react';
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';
const OptionsForm = () => {
    
    const showCancel = (pos: number, field: any, remove: (name: string) => void) => {
        if (pos > 1) {
            return (
                <MinusCircleOutlined
                    style={{ marginLeft: 8 }}
                    onClick={() => {
                        remove(field.name);
                    }}
                />
            )
        }
    }
    const renderOptionFields = (fields: any, { add, remove }: any) => {

        return (
            <div>
                {fields.map((field: any, key: number) => (
                    <Space key={nanoid()} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 8 }} align="center">
                        <Form.Item

                            name={[field.name, 'text']}
                            fieldKey={[field.fieldKey, 'text']}
                            rules={[{ required: true, message: `Enter Option ${key + 1}` }]}
                        >

                            <Input className="create-poll__option" placeholder={`Option ${key + 1}`} />
                        </Form.Item>
                        {showCancel(key, field, remove)}

                    </Space>

                ))}

                <Form.Item style={{ textAlign: 'left' }}>
                    <Button
                        type="dashed"
                        onClick={() => {
                            add();
                        }}
                    >
                        <PlusOutlined /> Add Option
                    </Button>
                </Form.Item>
            </div>
        );


    }
    return (
        <div style={{ marginTop: '1rem' }}>
            <Form.List name="questions">
                {renderOptionFields}
            </Form.List>

        </div>
    );
};
export default OptionsForm;