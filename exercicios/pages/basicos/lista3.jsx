function gerarLista() {
    const lista = []
    for (let i = 0; i <= 10; i++){
        lista.push(<span>{i}, </span>) 
    }

    return lista

    /*const lista = [
        <div>
            <span>0!</span>
            <span>1!</span>
            <span>2!</span>
            <span>3!</span>
            <span>4!</span>
            <span>5!</span>
            <span>6!</span>
            <span>7!</span>
            <span>8!</span>
            <span>9!</span>
        </div>
    ]

    return lista
    */
}

export default function lista() {
    return (
        <div>
            {gerarLista()}
        </div>
    )
}