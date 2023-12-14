import Formulario from "./Formulario"
import Alert from "./Alert"

export default function Registro({error, setSucces, setError, succes}) {
    return (
        <div className="registro">
            <Formulario error={error} setSucces={setSucces} setError={setError} />
            <Alert error={error} succes={succes} />
        </div>
    )
}