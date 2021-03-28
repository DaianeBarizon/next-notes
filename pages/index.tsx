import { Box } from 'components/Box';
import { MyActivities } from 'components/Templates/MyActivities';
import { Categories } from 'components/Templates/Categories';
import { AddNewTask } from 'components/Templates/AddNewTask';

export default function Home() {
    return (
        <Box p='4'>
            <MyActivities />
            <Categories />
            <AddNewTask />
        </Box>
    );
}
