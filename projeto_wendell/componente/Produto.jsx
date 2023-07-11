export default function Produto({ imagem, texto}) {
    return (
        <>
            <img src={imagem} alt="amendoim" width="150px" height="300px" />
            <h1>{texto}</h1>
        </>
    )
}