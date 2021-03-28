import styled from 'styled-components';
import { Box } from 'components/Box';

export const Circle = styled(Box)`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background: transparent;
    border: 5px solid;
    border-color: ${({ color }) => color};
    margin-right: 10px;
`;
