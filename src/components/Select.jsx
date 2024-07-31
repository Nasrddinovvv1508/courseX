import React, { useState } from 'react';
import { Select, Option } from "@material-tailwind/react";

const SelectComponent = ({ label, name }) => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (e) => {
        setSelectedValue(e);
        console.log(e);
    };

    return (
        <div className="w-full">
            <Select label={label} name={name} value={selectedValue} onChange={handleChange}>
                <Option value="Mentor 1">Mentor 1</Option>
                <Option value="Mentor 2">Mentor 2</Option>
                <Option value="Mentor 3">Mentor 3</Option>
            </Select>
        </div>
    );
};

export default SelectComponent; 