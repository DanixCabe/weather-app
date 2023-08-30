import { useState } from "react";

const ArrayDays = ['','','','','','','']

export const useDate = ( initialForm = {}) => {

    const [formState, setFormState] = useState();

    const onInputChange = (name, {nativeEvent}) =>{
        const value = nativeEvent.text
        setFormState({
            ...formState,
            [name]: value
        });
    }

    
    const onResetForm = () =>{
        setFormState(initialForm);
    }
    

    return {
        ...formState,
        formState,
        onResetForm,
        setFormState,
        onInputChange,
    }


}