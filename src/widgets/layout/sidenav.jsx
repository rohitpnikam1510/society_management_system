import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    Avatar,
    Button,
    IconButton,
    Typography,
} from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "../../context";
import { useState } from "react";
import { SidebarNavList } from "../../components";

export function Sidenav({ brandImg, brandName, routes }) {
    const [userRole, setUserRole] = useState('admin');
    const [controller, dispatch] = useMaterialTailwindController();
    const { sidenavType, openSidenav } = controller;
    const sidenavTypes = {
        dark: "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900",
        white: "bg-white shadow-lg",
        transparent: "bg-transparent",
    };

    const renderSideNav = () => {
        const sideNavbar = routes.map(({ layout, role, title, pages }, key) => {
            // console.log('Title: ', title);
            // console.log('Layout: ', layout);
            // console.log('Pages: ', pages);
            if(layout === 'dashboard') {
                if(role === userRole) {
                    return( <SidebarNavList key={key} layout={layout} title={title} pages={pages} />)
                }
            } else {
                console.log('Comes in else part');
                
                return( <SidebarNavList key={key} layout={layout} title={title} pages={pages} />)
            }
        });

        return sideNavbar;
    }
    

    return (
        <aside
            className={`${sidenavTypes[sidenavType]} ${openSidenav ? "translate-x-0" : "-translate-x-80"
                } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
        >
            <div
                className={`relative border-b ${sidenavType === "dark" ? "border-white/20" : "border-blue-gray-50"
                    }`}
            >
                <Link to="/" className="flex items-center gap-4 py-6 px-8">
                    <Avatar src={brandImg} size="sm" />
                    <Typography
                        variant="h6"
                        color={sidenavType === "dark" ? "white" : "blue-gray"}
                    >
                        {brandName}
                    </Typography>
                </Link>
                <IconButton
                    variant="text"
                    color="white"
                    size="sm"
                    ripple={false}
                    className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
                    onClick={() => setOpenSidenav(dispatch, false)}
                >
                    <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
                </IconButton>
            </div>
            <div className="m-4">
                { renderSideNav() }
            </div>
        </aside>
    );
}

Sidenav.defaultProps = {
    brandImg: "/img/logo.png",
    brandName: "Digi-Society",
};

Sidenav.propTypes = {
    brandImg: PropTypes.string,
    brandName: PropTypes.string,
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
