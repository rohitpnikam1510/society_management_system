import React from "react";
import { Select, Option, Typography } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export const SelectOptionInput = ({
    label,
    name,
    options,
    value = undefined,
    onChange,
    validationMessage = "",
    ...props
}) => {
    return (
        <>
            <Select
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                {...props}
            >
                {options.map((option) => (
                    <Option key={option.value} value={`${name}_${option.value}`}>
                        {option.label}
                    </Option>
                ))}
            </Select>
            {
                validationMessage && (
                    <Typography
                        variant="small"
                        color={validationMessage ? "red" : "gray"}
                        className="flex items-center gap-1 font-normal"
                    >
                        <InformationCircleIcon className="h-5 w-5" />
                        {validationMessage}
                    </Typography>
                )
            }
        </>
    );
};