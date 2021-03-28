import React, { useState, useMemo } from 'react';
import { Box } from 'components/Box';
import useCategory from 'hooks/useCategory';
import { TagList } from 'components/TagList';
import { Tag } from 'components/Tag';
import { Modal, Input, Form } from 'antd';

export const Categories = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { categoryList, addCategory } = useCategory();

    const CategoryListMemo = useMemo(
        () => <TagList categoryList={categoryList} />,
        [categoryList]
    );

    const handleCategory = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const onFinish = ({ category, color }: any) => {
        addCategory({ category, color });
        console.log('entrou aqui', category, color);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            pt='4'
            pb='4'
        >
            <Box as='h2' color='#fff'>
                Categorias
            </Box>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                flexDirection='row'
                boxShadow='shadows.xl'
            >
                {CategoryListMemo}
                <Tag
                    addTrigger={handleCategory}
                    category='Categoria'
                    closable={false}
                    backgroundColor='blue'
                />
                <Modal
                    title='Adicionar categoria'
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <Form onFinish={onFinish}>
                        <Form.Item
                            label='Digita sua categoria'
                            name='category'
                            style={{ padding: '0 10px', color: '#fff' }}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label='Digite a sua cor'
                            name='color'
                            style={{ padding: '0 10px', color: '#fff' }}
                        >
                            <Input />
                        </Form.Item>
                    </Form>
                </Modal>
            </Box>
        </Box>
    );
};
