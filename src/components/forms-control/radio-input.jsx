import React from "react";
import { Radio } from "@material-tailwind/react";

export const RadioInput = ({
    label,
    name,
    value = "",
    onChange,
    ...props
}) => {
    return (
        <Radio
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            ripple={true}
            {...props}
        />
    )
};