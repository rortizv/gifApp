import { useState } from "react";


// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const trimmedValue = inputValue.trim();
        if (trimmedValue.length < 2) return;
        onNewCategory(trimmedValue);
        setInputValue('');
    }

    return (
        <form className="display-col"
                onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                value={ inputValue }
                onChange={ onInputChange }
                placeholder="Search..."
            />
        </form>
    )
}