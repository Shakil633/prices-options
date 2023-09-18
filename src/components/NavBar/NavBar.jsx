import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, stateOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];
  return (
    <nav className="bg-yellow-400 py-3">
      <div className="md:hidden text-3xl " onClick={() => stateOpen(!open)}>
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <RiMenu2Fill></RiMenu2Fill>
        )}
      </div>
      <ul
        className={` 
      md:flex absolute ${
        open ? "" : "hidden"
      } md:relative bg-yellow-400 py-3 px-3`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
