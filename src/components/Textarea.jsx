import { Textarea } from "@material-tailwind/react";

export default function TextareaDefault({ label, name }) {
    return (
        <div className="w-full">
            <Textarea label={label} name={name} />
        </div>
    );
}