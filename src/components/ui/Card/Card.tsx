import "./Card.scss";

type cardProps = {
    src: string;
    alt: string;
    text: string;
}

export function Card( {src, alt, text}: cardProps){
    return (
        <div className="containerCard">
            <img src={src} alt={alt}/>
            <p>{text}</p>
        </div>
    )
}