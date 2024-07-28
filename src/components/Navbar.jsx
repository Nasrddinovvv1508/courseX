import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

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

export default function NavbarSimple() {
  let { user } = useSelector((state) => state.user)

  console.log(user);

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
    <header>
      <Navbar className="mx-auto max-w-full px-10 py-3 custom-font">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to={"/"}>
            <Typography
              as="a"
              variant="h6"
              className="mr-4 cursor-pointer py-1.5 flex gap-2 items-center custom-font"
            >
              <img className="h-6 w-6 rounded-md" src="../assets/logo.jpg" alt="logo" />
              <p className="flex items-center gap-1 font-bold">
                <span className="text-[#202a36] text-[25px]">Course</span>
                <span className="text-[#f89f27] text-3xl -mb-1">X</span>
              </p>
            </Typography>
          </Link>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden custom-font"
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