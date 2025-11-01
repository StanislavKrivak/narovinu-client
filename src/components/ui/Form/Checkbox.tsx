import "./Checkbox.scss";

type CheckboxProps = {
    label: string;
    href?: string;
    link?: string;
    required: boolean;
}

export function Checkbox({label, href, link, required}:CheckboxProps){
    return(
        <label>
            <input 
                className="checkbox" 
                type="checkbox" 
                required={required}
            />{label}
            <a 
                className="linkCheckbox" 
                href={href} 
                target="_blank"
                rel="noopener noreferrer"
            >{link}</a>.
        </label>
    )
}