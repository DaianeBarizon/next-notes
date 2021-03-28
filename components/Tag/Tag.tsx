import React from 'react';
import { Box } from 'components/Box';
import { ButtonTag } from './styles';

interface ITag {
    category: string;
    closable?: boolean;
    eventTrigger?: unknown;
    closeTrigger?: unknown;
    addTrigger?: unknown;
}

export const Tag = ({
    category,
    eventTrigger,
    closeTrigger,
    addTrigger,
    closable = true,
    ...props
}: ITag | any) => {
    return (
        <ButtonTag as='a' onClick={eventTrigger} {...props}>
            <Box display='flex' alignItems='center'>
                <Box as='span' mr='10px'>
                    {category}
                </Box>
                {closable ? (
                    <Box as='a' color='#fff' onClick={closeTrigger}>
                        x
                    </Box>
                ) : (
                    <Box as='a' color='#fff' onClick={addTrigger}>
                        +
                    </Box>
                )}
            </Box>
        </ButtonTag>
    );
};
