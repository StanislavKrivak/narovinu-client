import "./Button.scss";

type buttonProps = {
    text: string;
    onClick?: ()=> void;
}

export function Button({text, onClick}: buttonProps){
    return <button className="button" onClick={onClick}>{text}</button>
}