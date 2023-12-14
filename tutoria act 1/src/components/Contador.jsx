import { useState } from 'react'
import { sumar } from './sumar';
function Contador() {

    const [numero, setNumero] = useState(0);

    function restar() {
        if (numero !== 0) {
            setNumero((previo) => previo - 1)
        }
    };

    return (
        <>
            <h1>Contador</h1>
            <p>{numero}</p>
            <button onClick={() => sumar(numero, setNumero)}>Sumar</button>
            <button onClick={restar}>Restar</button>
        </>
    )
}

export default Contador
