import React from 'react';
import { Box } from 'components/Box';
import { RenderColor } from './RenderColor';

export interface ITask {
    id?: number;
    description: string;
    category?: number;
}

export const Task = ({ description, category }: ITask) => {
    return (
        <Box
            backgroundColor='white'
            borderRadius='5px'
            border='1px solid taskColors.2'
            color='textDarkGray'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            p='3'
            mt='3'
            mr='3'
            width='100%'
        >
            <Box as='span' p='2'>
                {description}
            </Box>

            <RenderColor category={category} />
        </Box>
    );
};
