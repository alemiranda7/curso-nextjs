function gerarLista(){
    return (
        <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
        </div>
    )
}

export default function lista() {
    return(
        <div>
            {gerarLista()}
        </div>
    )
}