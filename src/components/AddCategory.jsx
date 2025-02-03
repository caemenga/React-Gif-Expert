import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState( '' );

    const onInputChange = (event) => {
        // console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);

        if(inputValue.trim() <=1) return;
        
        onNewCategory(inputValue.trim())
        
        // setCategories(categories =>  [inputValue, ...categories ]);
        setInputValue('')
        
    }

  return (
    <form onSubmit={ onSubmit }>
        
        <input 
         type="text"
         placeholder="Buscar un gif" 
         value={inputValue}
         onChange={ (event) => onInputChange(event)}
     
        />

    </form>

  )
}
