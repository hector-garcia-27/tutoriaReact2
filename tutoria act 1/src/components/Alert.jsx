export default function Alert({ error, succes }) {

    return (
        <>
            {error.length>0 &&  <h3 style={{ color: "red" }}>{error}</h3>}
            {succes.length>0 &&  <h3 style={{ color: "green"}}>{succes}</h3>}
        </>
    )
}