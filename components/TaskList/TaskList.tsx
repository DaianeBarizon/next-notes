import React from 'react';
import { Box } from 'components/Box';
import { Task } from 'components/Task/Task';

interface Props {
    list: {
        id: number;
        title: string;
        category: string;
    }[];
}

export const TaskList = ({ list }: Props) => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='space-between'
            width={1000}
        >
            {list.map((item) => (
                <Task
                    key={item.id}
                    title={item.title}
                    category={item.category}
                />
            ))}
        </Box>
    );
};
