import styled from 'styled-components';
import { Box } from 'components/Box';

export const ButtonTag = styled(Box)`
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 12px 15px;
    margin: 10px;
    min-width: 120px;
    border-radius: 30px;
    cursor: pointer;
    background-color: ${({ backgroundColor }: any) => backgroundColor};
    color: ${({ color }) => color || '#fff'};
    opacity: 1;
    transition: opacity 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    svg,
    path {
        fill: ${({ color }) => color || '#fff'};
        width: ${({ fontSize }) => fontSize || '14px'};
        height: auto;
    }
    :hover {
        opacity: 0.7;
    }
`;
