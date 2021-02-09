import React from 'react';
import { Tag } from './Tag';

interface Props {
    category: string;
}

export const TagList = ({ category }: Props) => {
    return <RenderColor category={category} />;
};

const RenderColor = ({ category }: Props) => {
    switch (category) {
        case 'Trabalho':
            return <Tag category='Trabalho' color='#E14A00' />;
        case 'Estudos':
            return <Tag category='Estudos' color='#BB252C' />;
        case 'Negócios':
            return <Tag category='Negócios' color='#005D00' />;
        case 'Lazer':
            return <Tag category='Lazer' color='#0025A1' />;
        case 'Compras':
            return <Tag category='Compras' color='#FAB341' />;
        default:
            return <Tag category='Outros' color='#CE234B' />;
    }
};
