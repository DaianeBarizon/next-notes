import React from 'react';
import { Box } from 'components/Box';
import { Form, Input, Button, Select } from 'antd';
import useCategory from 'hooks/useCategory';
import useTask from 'hooks/useTask';

const { Option } = Select;

export const AddNewTask = () => {
    const { categoryList } = useCategory();
    const { addNewTask } = useTask();

    const onFinish = ({ description, category }: any) => {
        addNewTask({ description, category });
    };

    return (
        <Box>
            <Form
                onFinish={onFinish}
                style={{
                    flexDirection: 'row',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '50px',
                }}
                initialValues={{ category: 'Selecione' }}
            >
                <Form.Item
                    label='Digita sua task'
                    name='description'
                    style={{ padding: '0 30px', color: '#fff' }}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Categoria'
                    name='category'
                    style={{ padding: '0 10px', color: '#fff' }}
                >
                    <Select>
                        {categoryList.map((cat) => (
                            <Option key={cat.id} value={cat.id}>
                                {cat.category}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Salvar
                    </Button>
                </Form.Item>
            </Form>
        </Box>
    );
};
