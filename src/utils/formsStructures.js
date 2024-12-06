export const AddSocietyFormData = {
    name: {
        label: "Society Name",
        value: "",
        validations: {
            category: 'text',
            isRequired: true,
            minLength: undefined,
            maxLength: undefined
        }
    },
    type: {
        label: "Does this society have any of the following?",
        value: "",
        validations: {
            category: 'text',
            isRequired: true,
            minLength: undefined,
            maxLength: undefined
        }
    },
    address_line_1: {
        label: "Address Line 1",
        value: "",
        validations: {
            category: 'text',
            isRequired: true,
            minLength: undefined,
            maxLength: undefined
        }
    },
    address_line_2: {
        label: "Address Line 2",
        value: "",
        validations: {
            category: 'text',
            isRequired: false,
            minLength: undefined,
            maxLength: undefined
        }
    },
    landmark: {
        label: "Landmark (Optional)",
        value: "",
        validations: {
            category: 'text',
            isRequired: false,
            minLength: undefined,
            maxLength: undefined
        }
    },
    area: {
        label: "Area",
        value: "",
        validations: {
            category: 'text',
            isRequired: true,
            minLength: undefined,
            maxLength: undefined
        }
    },
    city: {
        label: "City",
        value: "",
        validations: {
            category: 'text',
            isRequired: true,
            minLength: undefined,
            maxLength: undefined
        }
    },
    state: {
        label: "State",
        value: "",
        validations: {
            category: 'text',
            isRequired: true,
            minLength: undefined,
            maxLength: undefined
        }
    },
    pincode: {
        label: "Pincode",
        value: "",
        validations: {
            category: 'number',
            isRequired: true,
            minLength: 6,
            maxLength: 6
        }
    },
}