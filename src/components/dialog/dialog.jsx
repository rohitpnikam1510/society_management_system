import React from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    IconButton,
    Typography
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const DialogBox = ({
    title,
    open,
    onClose,
    children,
    footer
}) => {
    return (
        <Dialog size="md" open={open} handler={onClose} className="p-4">
            <DialogHeader className="relative m-0 block">
                <Typography variant="h4" color="blue-gray">{title}</Typography>
                <IconButton
                    size="sm"
                    variant="text"
                    className="!absolute right-3.5 top-3.5"
                    onClick={onClose}
                >
                    <XMarkIcon className="h-4 w-4 stroke-2" />
                </IconButton>
            </DialogHeader>
            <DialogBody className="space-y-4 pb-6">
                {children}
            </DialogBody>
            {footer && <DialogFooter>{footer}</DialogFooter>}
        </Dialog>
    );
};

export default DialogBox;