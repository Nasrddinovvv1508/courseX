// react
import React, { memo } from "react";

// material-tailwind
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

// heroicons
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// react-router-dom
import { Link, NavLink } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

// src\components

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium custom-font"
      >
        <NavLink to={`/`} className="flex text-[17px] font-semibold items-center hover:text-[#f89f27] transition-colors">
          Home
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium custom-font"
      >
        <NavLink to={`/about`} className="flex text-[17px] font-semibold items-center hover:text-[#f89f27] transition-colors">
          About
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium custom-font"
      >
        <NavLink to={`/all-course`} className="flex text-[17px] font-semibold items-center hover:text-[#f89f27] transition-colors">
          All Courses
        </NavLink >
      </Typography>
    </ul>
  );
}

function NavbarSimple() {
  let { user } = useSelector((state) => state.user)

  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <Navbar className="mx-auto max-w-full px-10 py-3 custom-font">

        <div className="flex items-center justify-between ">
          <div className="flex items-center select-none">
            <Link to={"/"}>
              <Typography
                as="a"
                variant="h6"
                className="mr-4 cursor-pointer py-1.5 flex gap-2 items-center custom-font"
              >
                <img className="h-6 w-6 rounded-md" src="../assets/logo.jpg" alt="logo" />
                <p className="flex items-center gap-1 font-bold">
                  <span className="text-[#202a36] text-[25px]">Course</span>
                  <span className="text-[#fa8128] text-3xl -mb-1">X</span>
                </p>
              </Typography>
            </Link>
          </div>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className=" h-6 w-6  lg:hidden custom-font"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </header>
  );
}

export default memo(NavbarSimple);

//text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent