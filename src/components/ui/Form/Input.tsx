import "./Input.scss";

type InputProps = {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    required: boolean;
}

export function Input({type, placeholder, value, onChange, name, required}:InputProps){
    return (
        <input 
            type={type}
            id={name}
            placeholder={placeholder}
            value={value} 
            onChange={onChange}
            name={name}
            required={required}
        />
    )
}