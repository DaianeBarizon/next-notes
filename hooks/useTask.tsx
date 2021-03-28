import { useContext } from 'react';
import { TaskContext } from 'providers/TaskProvider';

interface IAddNewTask {
    description: string;
    category: number;
}

const useTask = () => {
    const [state, setState] = useContext(TaskContext);

    const hasTasksRelatedTo = (category: number) => {
        return !!state.find((task) => task.category === category);
    };

    const deleteTasksByCategory = (id: number) => {
        setState(state.filter((obj) => obj.category !== id));
    };

    const addNewTask = ({ description, category }: IAddNewTask) => {
        setState([...state, { id: Math.random(), description, category }]);
    };

    return {
        taskList: state,
        setTaskList: setState,
        hasTasksRelatedTo,
        deleteTasksByCategory,
        addNewTask,
    };
};

export default useTask;
