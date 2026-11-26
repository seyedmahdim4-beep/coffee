import React, { useState } from 'react'

function useLocalStorage(key, defaultValue) {

 

    const [value, setValue] = useState(() => {
        const savedValue = localStorage.getItem(key);
        return savedValue ? savedValue : defaultValue
    }
    )

    const setLocal = (newValue) => {
        setValue(newValue)
        localStorage.setItem(key, newValue)
    }


    return [value, setLocal]
}

export default useLocalStorage

