import React from 'react';
import { Box } from 'components/Box';

interface Props {
    category: string;
    color: string;
}

export const Tag = ({ category, color }: Props) => {
    return (
        <Box
            as='button'
            background={color}
            borderRadius={30}
            width={120}
            justifyContent='space-between'
            display='flex'
            alignItems='center'
            paddingTop={3}
            paddingBottom={3}
            paddingLeft={4}
            paddingRight={4}
            marginTop={10}
            marginBottom={10}
            marginLeft={3}
            marginRight={3}
        >
            <Box as='span' color='white'>
                {' '}
                {category}
            </Box>
            <Box as='a' href='#' color='white'>
                X
            </Box>
        </Box>
    );
};
