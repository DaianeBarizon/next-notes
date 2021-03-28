import React from 'react';
import { Box } from 'components/Box';
import { Task } from 'components/Task';
import useTask from 'hooks/useTask';

export const TaskList = () => {
    const { taskList } = useTask();

    return (
        <Box width='100%'>
            {taskList.map((task) => (
                <Task
                    key={task.id}
                    description={task.description}
                    category={task.category}
                />
            ))}
        </Box>
    );
};
