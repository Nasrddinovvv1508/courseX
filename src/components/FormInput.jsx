import { Input } from "@material-tailwind/react";

export default function InputDefault({ label, type, name, className, status }) {
    return (
        <div className="w-full">
            {status ? (
                <Input
                    className={className}
                    type={type}
                    label={label}
                    name={name}
                    error
                />
            ) : (
                <Input
                    className={className}
                    type={type}
                    label={label}
                    name={name} />)}
        </div>
    );
}