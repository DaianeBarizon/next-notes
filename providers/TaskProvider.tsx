import React, { useState } from 'react';

interface ITaskList {
    id: number;
    description: string;
    category: number;
}

const MockupTasks: ITaskList[] = [
    { id: 1, description: 'Fazer café', category: 1 },
    { id: 2, description: 'Estudar matemática', category: 2 },
    { id: 3, description: 'Estudar React Native', category: 2 },
    { id: 4, description: 'Jogar lixo fora', category: 1 },
    {
        id: 5,
        description: 'Levar o cachorro para passear',
        category: 1,
    },
    { id: 6, description: 'Fazer compras', category: 3 },
    { id: 7, description: 'Fazer pizza', category: 4 },
    {
        id: 8,
        description: 'Conversar com o cliente e fechar proposta',
        category: 5,
    },
];

const TaskContext = React.createContext([]);

const TaskProvider = (props) => {
    const [state, setState] = useState<ITaskList[] | []>(MockupTasks);

    return (
        <TaskContext.Provider value={[state, setState]}>
            {props.children}
        </TaskContext.Provider>
    );
};

export { TaskContext, TaskProvider };
