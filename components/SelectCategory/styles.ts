import styled from 'styled-components';
import { Box } from 'components/Box';

export const Circle = styled(Box)`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: transparent;
    border: 3px solid;
    border-color: ${({ color }) => color};
    margin: 10px;
`;
