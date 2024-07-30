import { Input } from "@material-tailwind/react";

export default function InputDefault({ label, type, name, className }) {
    return (
        <div className="w-full">
            <Input
                className={className && className}
                type={type}
                label={label}
                name={name}
            />
        </div>
    );
}