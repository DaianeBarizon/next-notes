import React, { useMemo } from 'react';
import { Box } from 'components/Box';
import { TaskList } from 'components/TaskList';
import useTask from 'hooks/useTask';

export const MyActivities = () => {
    const { taskList } = useTask();

    const TaskListMemo = useMemo(() => <TaskList />, [taskList]);

    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            p='4'
        >
            <Box as='h2' color='#fff'>
                Minhas atividades
            </Box>
            {TaskListMemo}
        </Box>
    );
};
