import React from 'react';
import { Box } from 'components/Box';
import styled from 'styled-components';

const DivWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.darkBlue[600]};
    padding: 20px;
    margin: 8px;
    max-width: 1200px;
    width: 100%;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid ${(props) => props.theme.colors.darkBlue[400]};
    color: ${(props) => props.theme.colors.darkBlue[50]};
`;

interface Props {
    title?: string;
    category?: string;
}

export const Task = ({ title, category }: Props) => {
    return (
        <DivWrapper>
            {title}
            <RenderColor category={category} />
        </DivWrapper>
    );
};

const RenderColor = ({ category }: Props) => {
    switch (category) {
        case 'Trabalho':
            return (
                <Box
                    background='#E14A00'
                    borderRadius={50}
                    width={1}
                    height={1}
                    p={1}
                />
            );
        case 'Estudos':
            return (
                <Box
                    background='#BB252C'
                    borderRadius={50}
                    width={1}
                    height={1}
                    p={1}
                />
            );
        case 'Negócios':
            return (
                <Box
                    background='#005D00'
                    borderRadius={50}
                    width={1}
                    height={1}
                    p={1}
                />
            );
        case 'Lazer':
            return (
                <Box
                    background='#0025A1'
                    borderRadius={50}
                    width={1}
                    height={1}
                    p={1}
                />
            );
        case 'Compras':
            return (
                <Box
                    background='#FAB341'
                    borderRadius={50}
                    width={1}
                    height={1}
                    p={1}
                />
            );
        default:
            return (
                <Box
                    background='#CE234B'
                    borderRadius={50}
                    width={1}
                    height={1}
                    p={1}
                />
            );
    }
};
