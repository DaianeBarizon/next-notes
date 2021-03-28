import React from 'react';
import { RenderColor } from './RenderColor';

interface Props {
    categoryList: any;
}

export const TagList = ({ categoryList }: Props) => {
    return categoryList.map((obj, index): any => (
        <RenderColor key={index} element={obj} />
    ));
};
