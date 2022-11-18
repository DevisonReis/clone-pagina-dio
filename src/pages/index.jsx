import React from 'react'
import { useState, /*useEffect,*/ useMemo, useCallback } from 'react'

const Teste = () => {
    const [age, setAge] = useState(30);
    const [name, setName] = useState(30);

    const changeAge = useCallback(() => {
        const newAge = 10 * age
        console.log('Idade atual',age, newAge)
        setAge(prev => prev === 30 ? 32 : 30)
    }, [age])

    const changeName = () => {
        setName(prev => prev === 'Devison' ? 'Jose' : 'Devison')
    }

    const calculo = useMemo(() => {
        console.log('calculou', age)
        return 10 * age
    }, [age])




    // useEffect(() => {
    //     alert('renderizei')
    // }, [name]); // é chamado sempre que um elemento é rerenderizado na tela, nesse caso é chamado quando o name é alterado

    
  return (
    <div>
        <p>Idade: {age}</p>
        <p>Nome: {name}</p>
        <button onClick={changeName}>Alterar nome</button>
        <br/>
        <button onClick={changeAge}>Alterar idade</button>
    </div>
  )
}

export { Teste }
