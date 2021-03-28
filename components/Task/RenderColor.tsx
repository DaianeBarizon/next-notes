import React, { useMemo } from 'react';
import { Circle } from './styles';
import useCategory from 'hooks/useCategory';

export interface Props {
    title?: string;
    category?: number;
}

export const RenderColor = ({ category }: Props) => {
    const { findById } = useCategory();

    const ColorMemoized = useMemo(() => findById(category), [category]);

    return <Circle color={ColorMemoized.color} />;
};
