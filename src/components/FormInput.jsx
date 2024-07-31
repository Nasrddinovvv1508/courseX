import { Input } from "@material-tailwind/react";

export default function InputDefault({ label, type, name, className, status, size }) {
    return (
        <div className="w-full">
            {status ? (
                <Input
                    className={`${className}`}
                    type={type}
                    label={label}
                    name={name}
                    error
                    size={size}
                />
            ) : (
                <Input
                    className={className}
                    type={type}
                    label={label}
                    name={name}
                    size={size} />)}
        </div>
    );
}