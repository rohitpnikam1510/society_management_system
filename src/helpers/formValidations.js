export const TextValidation = ({
    label,
    value,
    validations
}) => {

    if (validations.isRequired && value === "") {
        console.log("Check required");
        return { status: false, message: `${label && label.length <= 20 ? label : `This field`} is required.` };
    }

    if ((validations.minLength && value.lengh < validations.minLength) || (validations.maxLength && value.lengh > validations.maxLength)) {
        console.log("Check length");
        return {
            status: false,
            message: `${label && label.length <= 20 ? label : `This field`} must be at least ${validations.minLength} characters and must not exceed ${validations.maxLength} characters.`
        }
    }

    return { status: true, message: '' };
};

export const NumberValidation = ({
    label,
    value,
    validations
}) => {

    if (validations.isRequired && value === "") {
        // return { status: false, message: `${label && label.length <= 20 ? label : `This field`} is required.` };
        return { status: false, message: `This field is required.` };
    }

    if (typeof value !== "number") {
        return {
            status: false, message: `Please enter only numeric characters.`
        }
    }

    if (value.toString().length < validations.minLength || value.toString().lengthssss > validations.maxLength) {

        return {
            status: false,
            message: `${label && label.length <= 20 ? label : `This field`} must be ${validations.minLength} characters and must not exceed ${validations.maxLength} characters.`
        };
    }

    return { status: true, message: '' };
};