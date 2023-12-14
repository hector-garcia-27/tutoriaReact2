import { useState } from "react"

export default function Formulario({error, setError, setSucces}) {

    const regexParaNombre = /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/
    const regexParaEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const [nombre, setNombre] = useState("")

    const [email, setEmail] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        if (nombre.length === 0) {
            return setError("El campo de nombre no puede estar vacio")
        } else if (!regexParaNombre.test(nombre)) {
            return setError("El nombre no puede contener numeros ni simbolos")
        } else if (email.length === 0) {
            return setError("El campo de email no puede estar vacio")
        } else if (!regexParaEmail.test(email)) {
            return setError("El email debe ser como el ejemplo")
        }
        setSucces("todo ok")
        setError("")
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)} style={{ display: "flex", flexDirection: "column" }}>
                <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input type="text" placeholder="nombre@ejemplo.com" value={email} onChange={(a) => setEmail(a.target.value)} />
                <button type="submit">Mostrar nombre</button>

            </form>
        </>
    )
}