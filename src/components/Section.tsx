import './Section.css';

interface SelectionProps{
    titulo1: string,
    titulo2: string
}

function Section({ titulo1, titulo2}: SelectionProps){
    return(
        <>
            <div className="container-section">
                <p> {titulo1}</p>
            </div>

            <div className="container-section">
                <p> {titulo2} </p>
            </div>
        </>
    )
}
export default Section;