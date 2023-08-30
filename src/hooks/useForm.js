import { useState } from "react";




export const useForm = ( initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

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