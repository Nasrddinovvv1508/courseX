import React, { useEffect } from "react";
import {
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Alert,
    Input,
    Drawer,
    Card,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
    MagnifyingGlassIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import OpenSidebar from "./OpenSidebar";
import { Link } from "react-router-dom";

import { MdCreateNewFolder } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

let logout = async () => {
    if (confirm(`Are you sure you want to log out?`)) {
        signOut(auth).then(() => {
            toast.success(`See you later!`);
        }).catch((error) => {
            toast.error(error.message);
        });
    }
}


export default function SidebarWithBurgerMenu() {
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    // useEffect to handle body overflow when drawer is open
    useEffect(() => {
        document.body.style.overflow = isDrawerOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto"; // Cleanup overflow style on unmount
        };
    }, [isDrawerOpen]);

    return (
        <>
            <OpenSidebar openDrawer={openDrawer} isDrawerOpen={isDrawerOpen} />

            <Drawer open={isDrawerOpen} onClose={closeDrawer}>
                <Card
                    color="transparent"
                    shadow={false}
                    className="h-[calc(100vh-2rem)] w-full p-4"
                >
                    <div className="mb-2 flex items-center gap-4 p-4">
                        <Link to={"/"}>
                            <Typography
                                as="a"
                                variant="h6"
                                className="mr-4 cursor-pointer py-1.5 flex gap-2 items-center custom-font"
                            >
                                <img className="h-6 w-6 rounded-md select-none" src="../assets/logo.jpg" alt="logo" />
                                <p className="flex items-center gap-1 font-bold">
                                    <span className="text-[#202a36] text-[25px]">Course</span>
                                    <span className="text-[#fa8128] text-3xl -mb-1">X</span>
                                </p>
                            </Typography>
                        </Link>
                    </div>
                    <List>
                        <Accordion
                            open={open === 1}
                            icon={
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""
                                        }`}
                                />
                            }
                        >
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Analytics
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Reporting
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Projects
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            open={open === 2}
                            icon={
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                                        }`}
                                />
                            }
                        >
                            <ListItem className="p-0" selected={open === 2}>
                                <AccordionHeader
                                    onClick={() => handleOpen(2)}
                                    className="border-b-0 p-3"
                                >
                                    <ListItemPrefix>
                                        <MdCreateNewFolder className="h-5 w-5" />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal">
                                        Create
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                    <Link to={`/create-course`} className="">
                                        <ListItem className="flex items-center">
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            New Course
                                        </ListItem>
                                    </Link>

                                    <Link to={`/competition`} className="">
                                        <ListItem className="flex items-center">
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            Competition
                                        </ListItem>
                                    </Link>
                                </List>
                            </AccordionBody>
                        </Accordion>
                        <hr className="my-2 border-blue-gray-50" />
                        <ListItem>
                            <ListItemPrefix>
                                <FaCommentDots className="h-5 w-5" />
                            </ListItemPrefix>
                            New Comments
                            <ListItemSuffix>
                                <Chip
                                    value="14"
                                    size="sm"
                                    variant="ghost"
                                    color="blue-gray"
                                    className="rounded-full"
                                />
                            </ListItemSuffix>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <UserCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Profile
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <Cog6ToothIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Settings
                        </ListItem>
                        <ListItem
                            onClick={() => logout()}
                            className="text-red-600 hover:text-red-600 active:text-red-600">
                            <ListItemPrefix>
                                <PowerIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Log Out
                        </ListItem>
                    </List>
                    <Alert
                        open={openAlert}
                        className="mt-auto"
                        onClose={() => setOpenAlert(false)}
                    >
                        <CubeTransparentIcon className="mb-4 h-12 w-12" />
                        <Typography variant="h6" className="mb-1">
                            Upgrade to PRO
                        </Typography>
                        <Typography variant="small" className="font-normal opacity-80">
                            Upgrade to Material Tailwind PRO and get even more components,
                            plugins, advanced features and premium.
                        </Typography>
                        <div className="mt-4 flex gap-3">
                            <Typography
                                as="a"
                                href="#"
                                variant="small"
                                className="font-medium opacity-80"
                                onClick={() => setOpenAlert(false)}
                            >
                                Dismiss
                            </Typography>
                            <Typography
                                as="a"
                                href="#"
                                variant="small"
                                className="font-medium"
                            >
                                Upgrade Now
                            </Typography>
                        </div>
                    </Alert>
                </Card>
            </Drawer>
        </>
    );
}