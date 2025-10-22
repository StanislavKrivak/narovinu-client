import "./Img.scss";

type imgProps = {
src: string;
alt: string;
}

export function Img({src, alt,}:imgProps){
    return <img src={src} alt={alt}/>
}