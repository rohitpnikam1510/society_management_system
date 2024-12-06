import React from "react";
import { Input, Typography } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export const TextInput = ({
    label,
    name,
    value = "",
    onChange,
    type = "text",
    validationMessage = "",
    ...props

}) => {
    return (
        <>
            <Input
                label={label}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                color="gray"
                size="lg"
                {...props}
            />
            {validationMessage && (
                <Typography
                    variant="small"
                    color={validationMessage ? "red" : "gray"}
                    className="flex items-center gap-1 font-normal"
                >
                    <InformationCircleIcon className="h-5 w-5" />
                    {validationMessage}
                </Typography>
            )}
        </>
    );
};