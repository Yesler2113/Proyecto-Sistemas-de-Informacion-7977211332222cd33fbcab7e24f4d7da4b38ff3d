import { GoArrowLeft } from "react-icons/go";
import { GoCalendar } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { GoReport } from "react-icons/go";
import { GoFile } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export const NavItem = ({ icon, title, onClick, open }) => (
  <li
    className="text-black text-sm flex items-center gap-x-4 cursor-pointer 
        p-2 hover:bg-[#EBF4F6] rounded-md mt-2"
    onClick={onClick}
  >
    <span className="block float-left text-2xl">{icon}</span>
    <span className={`block duration-100 ${open ? "visible" : "hidden"}`}>
      <span className="text-lg">{title}</span>
    </span>
  </li>
);

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen">
      <div
        className={`bg-white p-5 pt-8 ${
          open ? "w-56" : "w-20"
        } duration-300 relative flex flex-col`}
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
        }}
      >
        <GoArrowLeft
          className={`bg-[#27AAE1] text-blue-ligth text-2xl rounded-full absolute -right-3 
                    top-9 border border-blue-ligth cursor-pointer ${
                      !open && "rotate-180"
                    }`}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex mb-6">
          <h1 className={`text-[#27AAE1] font-bold ${!open && "hidden"}`}>
            App Aguas
          </h1>
        </div>

        <nav className="flex-grow">
          <ul>
            <NavItem 
              icon={<IoHomeOutline />}
              onClick={() => navigate("/home")}
              open={open}
              title={"Inicio"}
            />
            <NavItem
              icon={<GoFile />}
              onClick={() => navigate("/Comunicados")}
              open={open}
              title={"Comunicados"}
            />
            <NavItem
              icon={<GoCalendar />}
              onClick={() => navigate("/calendarizacion")}
              open={open}
              title={"Candelarización y Distribución"}
            />
            <NavItem
              icon={<GoPerson />}
              onClick={() => navigate("/User")}
              open={open}
              title={"Usuario"}
            />
            <NavItem
              icon={<GoReport />}
              onClick={() => navigate("/Reportes")}
              open={open}
              title={"Reportes"}
            />
          </ul>
        </nav>

        <ul className="mt-auto">
          <NavItem
            icon={<CiLogout />} 
            onClick={handleLogout}
            open={open}
            title={"Cerrar Sesion"}
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;