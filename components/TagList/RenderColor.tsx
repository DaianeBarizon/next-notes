import React, { useMemo } from 'react';
import { Tag } from 'components/Tag';
import useCategory from 'hooks/useCategory';
import useTask from 'hooks/useTask';
import { Popconfirm } from 'antd';
export interface Props {
    title?: string;
    element: any;
}

export const RenderColor = ({ element }: Props) => {
    const { deleteCategory } = useCategory();
    const { hasTasksRelatedTo, deleteTasksByCategory } = useTask();

    const hasTasksRelated = useMemo(() => hasTasksRelatedTo(element.id), [
        element,
    ]);

    console.log('hasTasksRelated', hasTasksRelated);

    const handleDeleteTag = (id: number) => {
        deleteTasksByCategory(id);
        deleteCategory(element.id);
    };

    return hasTasksRelated ? (
        <Popconfirm
            title='Existem tasks vinculadas a essa categoria. Deseja deletá-las para continuar?'
            onConfirm={() => handleDeleteTag(element.id)}
            onCancel={undefined}
            okText='Sim'
            cancelText='Não'
        >
            <Tag category={element.category} backgroundColor={element.color} />
        </Popconfirm>
    ) : (
        <Tag
            eventTrigger={() => console.log('categoria excluída!')}
            closeTrigger={() => deleteCategory(element.id)}
            category={element.category}
            backgroundColor={element.color}
        />
    );
};
