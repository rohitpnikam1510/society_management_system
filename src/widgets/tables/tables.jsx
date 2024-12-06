import React from "react";
import { Typography, Switch } from "@material-tailwind/react";

export function Tables({ tableHeader, tableBody }) {

    const renderTableHeaders = () => {
        return (
            <tr>
                {["sr.no", "society name", "area", "city", "pincode", "status"].map((el) => (
                    <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                        <Typography
                            variant="small"
                            className="text-[11px] font-bold uppercase text-blue-gray-400"
                        >
                            {el}
                        </Typography>
                    </th>
                ))}
            </tr>
        );
    }

    const renderTableBody = () => {
        return (
            <>
                <tr>
                    <td className="border-b border-blue-gray-50 py-3 px-5 text-left">1</td>
                    <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                        <Typography variant="h5">
                            Shiv-Darshan Row-House, Gate No-1
                        </Typography>
                        <Typography variant='small'>
                            Om Nagar, Dindoli-Kharwasa Road, Dindoli
                        </Typography>
                    </td>
                    <td className="border-b border-blue-gray-50 py-3 px-5 text-left">Dindoli</td>
                    <td className="border-b border-blue-gray-50 py-3 px-5 text-left">Surat</td>
                    <td className="border-b border-blue-gray-50 py-3 px-5 text-left">394210</td>
                    <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                        <Switch
                            id="custom-swich-component"
                            ripple={true}
                            color="green"
                            className="h-full w-full"
                            containerProps={{
                                className: "w-11 h-6",
                            }}
                            circleProps={{
                                className: "before:hidden left-0.5 border-none",
                            }}
                        />


                    </td>
                </tr>
                <tr>
                    <td className="border-b border-blue-gray-50 py-3 px-5 text-left">1</td>
                    <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                        <Typography variant="h5">
                            Shiv-Darshan Row-House, Gate No-2
                        </Typography>
                        <Typography variant='small'>
                            Om Nagar, Dindoli-Kharwasa Road, Dindoli
                        </Typography>
                    </td>
                    <td className="border-b border-blue-gray-50 py-3 px-5 text-left">Dindoli</td>
                    <td className="border-b border-blue-gray-50 py-3 px-5 text-left">Surat</td>
                    <td className="border-b border-blue-gray-50 py-3 px-5 text-left">394210</td>
                    <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                        <Switch
                            id="custom-swich-component-2"
                            ripple={true}
                            color="green"
                            className="h-full w-full"
                            containerProps={{
                                className: "w-11 h-6",
                            }}
                            circleProps={{
                                className: "before:hidden left-0.5 border-none",
                            }}
                        />


                    </td>
                </tr>
            </>
        );
    }

    return (
        <table className="w-full min-w-[640px] table-auto">
            <thead>
                {renderTableHeaders()}
                {renderTableBody()}
            </thead>
        </table>
    )
}