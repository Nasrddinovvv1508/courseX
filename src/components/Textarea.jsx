import { Textarea } from "@material-tailwind/react";

export default function TextareaDefault({ label }) {
    return (
        <div className="w-full">
            <Textarea label={label} />
        </div>
    );
}