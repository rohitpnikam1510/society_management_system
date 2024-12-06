/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Spinner,
} from '@material-tailwind/react';
import { PlusIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import { Tables } from '../../widgets/tables';
import { RadioInput, SelectOptionInput, TextInput } from '../../components';
import DialogBox from '../../components/dialog/dialog';
import { NumberValidation, TextValidation } from '../../helpers';
import { AddSocietyFormData, Cities, States } from '../../utils';

export function Societies() {
    const [openAddSocietyModal, setOpenAddSocietyModal] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState(AddSocietyFormData);

    // Trigger an effect when formData.city changes
    useEffect(() => {
        console.log("City has changed to:", formData.city);
        // Add your logic here (e.g., fetching city-related data)
        const getState = Cities.filter((city, index) => city.value === parseInt(formData.city.value));
        console.log("Get the state value:", getState[0]?.state);

        setFormData((prevState) => ({
            ...prevState,
            state: {
                ...prevState.state,
                value: getState[0]?.state ? getState[0].state : ``,
            },
        }));

        console.log(formData);
    }, [formData.city]); // Track changes to city


    const handleOpenAddSocietyModal = () => {
        console.log(formData);
        resetForm(); // Reset the form when the dialog closes
        setOpenAddSocietyModal(!openAddSocietyModal);
    };

    const submitAddSociety = () => {
        setIsSubmitted(true);
        const isFormValidate = validateForm();

        if (isFormValidate) {
            console.log("Form Data");
            console.log(formData);
            const formInputValues = {};
            Object.keys(formData).map((input) => {
                formInputValues[input] = formData[input].value;
                return true;
            });

            console.log("Form Input Values:");
            console.log(formInputValues);

            setIsSubmitted(false);
            handleOpenAddSocietyModal();
        } else {
            setIsSubmitted(false);
        }
    }

    const validateForm = () => {
        let isValid = true;
        const tempFormData = { ...formData };
        Object.keys(formData).map((input) => {

            const { validations } = formData[input];
            if (validations.category === "text") {

                let { status, message } = TextValidation(formData[input]);
                if (!status) {
                    tempFormData[input].validationMessage = message;
                    isValid = false;
                } else {
                    tempFormData[input].validationMessage = "";
                }
            } else if (validations.category === "number") {
                let { status, message } = NumberValidation(formData[input]);
                if (!status) {
                    tempFormData[input].validationMessage = message;
                    isValid = false;
                } else {
                    tempFormData[input].validationMessage = "";
                }
            }

            return formData[input];
        });

        setFormData(tempFormData);

        return isValid;
    }

    const resetForm = () => {
        setFormData(AddSocietyFormData);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                value: name === "pincode" ? parseInt(value) : value,
            },
        }));
    }

    const handleSelectChange = (e) => {
        const [name, value] = e.split('_');
        console.log('Name: ', name, 'Value: ', name, '_', value);
        setFormData((prevState) => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                value: parseInt(value),
            },
        }));
    }

    const renderSocietyTypesInput = () => {
        const societyTypes = [
            {
                key: "gates",
                value: "Multiple Gates"
            }, {
                key: "wings",
                value: "Apartment with Blocks/Wings",
            }, {
                key: "none",
                value: "None"
            }
        ];

        const societyTypesInputs = societyTypes.map((socType, index) => {
            return (
                <RadioInput
                    label={socType.value}
                    name="type"
                    value={socType.key}
                    onChange={handleInputChange}
                    checked={formData.type.value === socType.key}
                />
            );
        });

        return societyTypesInputs;

    }

    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
                <CardHeader variant="gradient" color='blue-gray' className='mb-8 p-4'>
                    <div className="flex items-center justify-between">
                        <Typography variant="h6" color="white">
                            List of Societies
                        </Typography>
                        <Button
                            // variant="outlined"
                            size="sm"
                            className="flex items-center gap-1"
                            ripple={true}
                            color="white"
                            onClick={() => handleOpenAddSocietyModal()}
                        >
                            Add
                            <PlusIcon className="h-5 w-5" />
                        </Button>
                    </div>
                </CardHeader>
                <CardBody className="p-2">
                    <Tables />
                </CardBody>
            </Card>
            <DialogBox
                title="Add New Society"
                open={openAddSocietyModal}
                onClose={handleOpenAddSocietyModal}
                footer={
                    <>
                        <Button
                            variant="text"
                            color='red'
                            onClick={() => handleOpenAddSocietyModal()}
                            className="mr-1"
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="gradient"
                            color="green"
                            onClick={() => submitAddSociety()}
                            disabled={isSubmitted}
                        >
                            {isSubmitted ? (
                                <div className="flex items-center gap-2">
                                    <Spinner className="h-5 w-5 text-white" />
                                    Loading
                                </div>
                            ) : (
                                "Submit"
                            )}

                        </Button>
                    </>
                }
            >
                <div>
                    <TextInput
                        label={formData.name.label}
                        name="name"
                        value={formData.name.value}
                        onChange={handleInputChange}
                        validationMessage={formData.name.validationMessage}
                        error={formData.name.validationMessage && formData.name.validationMessage !== "" ? true : false}
                    />
                </div>
                <div>
                    <Typography
                        color={formData.type.validationMessage ? "red" : "Gray"}
                    >Does this society have any of the following?</Typography>
                </div>
                <div className="flex">
                    {renderSocietyTypesInput()}
                </div>
                <div className="!mt-0 space-y-0">
                    {formData.type.validationMessage && (
                        <Typography
                            variant="small"
                            color={formData.type.validationMessage ? "red" : "gray"}
                            className="flex items-center gap-1 font-normal"
                        >
                            <InformationCircleIcon className="h-5 w-5" />
                            {formData.type.validationMessage}
                        </Typography>
                    )}

                </div>
                <div>
                    <TextInput
                        label={formData.address_line_1.label}
                        name="address_line_1"
                        value={formData.address_line_1.value}
                        onChange={handleInputChange}
                        validationMessage={formData.address_line_1.validationMessage}
                        error={formData.address_line_1.validationMessage && formData.address_line_1.validationMessage !== "" ? true : false}
                    />
                </div>
                <div>
                    <TextInput
                        label={formData.address_line_2.label}
                        name="address_line_2"
                        value={formData.address_line_2.value}
                        onChange={handleInputChange}
                        validationMessage={formData.address_line_2.validationMessage}
                        error={formData.address_line_2.validationMessage && formData.address_line_2.validationMessage !== "" ? true : false}
                    />
                </div>
                <div>
                    <TextInput
                        label={formData.landmark.label}
                        name="landmark"
                        value={formData.landmark.value}
                        onChange={handleInputChange}
                        validationMessage={formData.landmark.validationMessage}
                        error={formData.landmark.validationMessage && formData.landmark.validationMessage !== "" ? true : false}
                    />
                </div>
                <div className="flex gap-4">
                    <div className="w-full">
                        <TextInput
                            label={formData.area.label}
                            name="area"
                            value={formData.area.value}
                            onChange={handleInputChange}
                            validationMessage={formData.area.validationMessage}
                            error={formData.area.validationMessage && formData.area.validationMessage !== "" ? true : false}
                        />
                    </div>
                    <div className="w-full">
                        <SelectOptionInput
                            label={formData.city.label}
                            name="city"
                            options={Cities}
                            value={formData.city.value ? `city_${formData.city.value}` : ``}
                            onChange={(e) => handleSelectChange(e)}
                            validationMessage={formData.city.validationMessage}
                            error={formData.city.validationMessage && formData.city.validationMessage !== "" ? true : false}
                        />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-full">
                        <TextInput
                            label={formData.pincode.label}
                            name="pincode"
                            type="number"
                            value={formData.pincode.value}
                            onChange={handleInputChange}
                            className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            validationMessage={formData.pincode.validationMessage}
                            error={formData.pincode.validationMessage && formData.pincode.validationMessage !== "" ? true : false}
                        />
                    </div>
                    <div className="w-full">
                        <SelectOptionInput
                            label={formData.state.label}
                            name="state"
                            options={States}
                            value={formData.state.value ? `state_${formData.state.value}` : ``}
                            onChange={(e) => handleSelectChange(e)}
                            validationMessage={formData.state.validationMessage}
                            error={formData.state.validationMessage && formData.state.validationMessage !== "" ? true : false}
                        />
                    </div>
                </div>
            </DialogBox>
        </div>
    );
}