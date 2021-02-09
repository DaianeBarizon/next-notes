import { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import { Box } from 'components/Box';
import { TaskList } from 'components/TaskList';
import { TagList } from 'components/TagList';

import styled from 'styled-components';

const Title = styled.h1`
    color: ${(props) => props.theme.colors.darkBlue[50]};
    font-weight: 300;
    letter-spacing: 1px;
    margin-top: 30px;
`;

const categoryList = [
    { id: 10, category: 'Trabalho' },
    { id: 20, category: 'Estudos' },
    { id: 30, category: 'Negócios' },
    { id: 40, category: 'Lazer' },
    { id: 50, category: 'Compras' },
    { id: 60, category: 'Outros' },
];

const initialList = [
    { id: 1, title: 'Fazer Café', category: 'Trabalho' },
    { id: 2, title: 'Estudar matemática', category: 'Estudos' },
    { id: 3, title: 'Estudar React Native', category: 'Estudos' },
    { id: 4, title: 'Jogar lixo fora', category: 'Trabalho' },
    { id: 5, title: 'Levar o cachorro para passear', category: 'Trabalho' },
    { id: 6, title: 'Fazer compras', category: 'Compras' },
    { id: 7, title: 'Fazer pizza', category: 'Lazer' },
    {
        id: 8,
        title: 'Conversar com o cliente e fechar proposta',
        category: 'Negócios',
    },
];

export default function Home() {
    const [todoList, setTodoList] = useState(initialList);
    const [searchField, setSearchField] = useState('');
    const [addTask, setAddTask] = useState('');
    const [category, handleCategoryChange] = useState('');

    const MemorizatedList = useMemo(() => <TaskList list={todoList} />, [
        todoList,
    ]);

    useEffect(() => {
        searchField.length === 0 && setTodoList(initialList);

        searchField.length > 3 &&
            setTodoList(
                todoList.filter((todo) => {
                    console.log('todo', todo, searchField);
                    return todo.title.includes(searchField);
                })
            );
    }, [searchField]);

    const handleAddTasks = (e) => {
        console.log('entrou!', addTask, category);
        e.preventDefault();

        setTodoList([
            ...todoList,
            {
                id: Math.random(),
                title: addTask,
                category: category,
            },
        ]);
        setAddTask('');
    };

    return (
        <Box alignItems='center'>
            <Head>
                <title>Notes</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Box display='flex' flexDirection='column' alignItems='center'>
                <Title>Tasks</Title>
                <input
                    type='text'
                    value={searchField}
                    onChange={(event) => setSearchField(event.target.value)}
                    placeholder='Pesquisar'
                />
                {MemorizatedList}
                <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='center'
                    alignItems='center'
                >
                    {todoList.map((item, index) => (
                        <TagList key={index} category={item.category} />
                    ))}
                </Box>

                <form>
                    <select
                        defaultValue={category}
                        onChange={(event) =>
                            handleCategoryChange(event.target.value)
                        }
                    >
                        {categoryList.map((item) => (
                            <option key={item.id} value={item.category}>
                                {item.category}
                            </option>
                        ))}
                    </select>
                    <input
                        type='text'
                        value={addTask}
                        onChange={(event) => setAddTask(event.target.value)}
                        placeholder='Escreva sua tarefa'
                    />
                    {addTask ? (
                        <button type='submit' onClick={handleAddTasks}>
                            Adicionar
                        </button>
                    ) : null}
                </form>
            </Box>
        </Box>
    );
}
