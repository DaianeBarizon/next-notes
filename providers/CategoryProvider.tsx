import React, { useState } from 'react';

interface ICategoryList {
    id: number;
    category: string;
    color: string;
}

const MockupCategoryList: ICategoryList[] = [
    { id: 1, category: 'Trabalho', color: '#129312' },
    { id: 2, category: 'Estudos', color: '#546545' },
    { id: 3, category: 'Negócios', color: '#789784' },
    { id: 4, category: 'Lazer', color: '#1597' },
    { id: 5, category: 'Compras', color: '#ec1919' },
    { id: 6, category: 'Outros', color: '#ccbb1e' },
];

const CategoryContext = React.createContext([]);

const CategoryProvider = (props) => {
    const [state, setState] = useState<ICategoryList[] | []>(
        MockupCategoryList
    );

    return (
        <CategoryContext.Provider value={[state, setState]}>
            {props.children}
        </CategoryContext.Provider>
    );
};

export { CategoryContext, CategoryProvider };
