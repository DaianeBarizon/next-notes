import React from 'react';
import { Box } from 'components/Box';
import { Circle } from './styles';
import useCategory from 'hooks/useCategory';

export const SelectCategory = () => {
    const { categoryList } = useCategory();

    return (
        <Box
            background='gray'
            flexDirection='row'
            display='flex'
            alignItems='center'
        >
            <Circle color='blue.500' />
            <Box as='select' m='2'>
                {categoryList.map((item, index: number) => (
                    <Box as='option' value={item.category} key={index}>
                        {item.category}
                    </Box>
                ))}
                ;
            </Box>
        </Box>
    );
};
