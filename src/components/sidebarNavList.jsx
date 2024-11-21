
import  { NavLink } from "react-router-dom";
import { Typography, Button  } from "@material-tailwind/react";
import { useMaterialTailwindController } from "../context";
export function SidebarNavList({ key, layout, title, pages}) {
    const [controller, dispatch] = useMaterialTailwindController();
    const { sidenavColor, sidenavType } = controller;

    return (
        <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
                <li className="mx-3.5 mt-4 mb-2">
                    <Typography
                        variant="small"
                        color={sidenavType === "dark" ? "white" : "blue-gray"}
                        className="font-black uppercase opacity-75"
                    >
                        {title}
                    </Typography>
                </li>
            )}
            {pages.map(({ icon, name, path }) => (
                <li key={name}>
                    <NavLink to={`/${layout}${path}`}>
                        {({ isActive }) => (
                            <Button
                                variant={isActive ? "gradient" : "text"}
                                color={
                                    isActive
                                        ? sidenavColor
                                        : sidenavType === "dark"
                                            ? "white"
                                            : "blue-gray"
                                }
                                className="flex items-center gap-4 px-4 capitalize"
                                fullWidth
                            >
                                {icon}
                                <Typography
                                    color="inherit"
                                    className="font-medium capitalize"
                                >
                                    {name}
                                </Typography>
                            </Button>
                        )}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

export default SidebarNavList;