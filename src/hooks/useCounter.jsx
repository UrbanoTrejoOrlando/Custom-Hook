import React, { useEffect, useState } from 'react'

const useCounter = (key, initialValue=0) => {
    const [counter, setCounter] = useState(
        ()=>{
            const guardado = localStorage.getItem(key);
            return guardado ? JSON.parse(guardado) : initialValue;
        }
    );

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(counter));
    },[counter, key])

    // Creacion de funciones
    const increment =()=> setCounter(counter+1);
    const decrement =()=> setCounter(counter-1);
    const reset =()=> setCounter(0);


    return {counter, increment, decrement, reset}

}

export default useCounter
 