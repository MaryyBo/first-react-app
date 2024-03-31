/* Задача 3
При завантаженні компоненти сфокусуватись на інпуті
*/

import { useRef } from 'react';
import { useEffect } from 'react';
import { ref } from 'yup';


const InputComponent = () => {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <input
            type='text'
            placeholder='Введіть тут щось'
            ref={inputRef}
        />


    );
}

export default InputComponent;
