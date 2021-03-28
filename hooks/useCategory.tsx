import { useContext } from 'react';
import { CategoryContext } from 'providers/CategoryProvider';

interface IAddNewCategory {
    category: string;
    color: string;
}

const useCategory = () => {
    const [state, setState] = useContext(CategoryContext);

    const deleteCategory = (id: number) => {
        setState(state.filter((obj) => obj.id !== id));
    };

    const addCategory = ({ category, color }: IAddNewCategory) => {
        setState([...state, { id: Math.random(), category, color }]);
    };

    const findById = (id: number) => {
        return state.find((cat) => cat.id === id);
    };

    return {
        categoryList: state,
        setCategoryList: setState,
        deleteCategory,
        addCategory,
        findById,
    };
};

export default useCategory;
