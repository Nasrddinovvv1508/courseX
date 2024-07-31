import { Textarea } from "@material-tailwind/react";

export default function TextareaDefault({ label, name, status }) {
    return (
        <div className="w-full">
            {status ? (
                <Textarea
                    label={label}
                    name={name}
                    error
                />
            ) : (
                <Textarea
                    label={label}
                    name={name}
                />
            )}
        </div>
    );
}