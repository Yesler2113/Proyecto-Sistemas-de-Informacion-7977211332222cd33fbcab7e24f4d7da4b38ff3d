import { useState } from "react";
import { Modal } from "../components/Modal";
import Header from "../components/Header";
import { GrFormView } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="container mx-auto p-2 pt-3 md:p-3 lg:p-4">
          <button
            className="text-white flex flex-col shrink-0 grow-0 justify-around fixed bottom-0 right-0 right-5 rounded-lg
                      mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10"
            onClick={() => setShowModal(true)}
          >
            <div className="p-3 rounded-full border-4 border-white bg-[#1A6DAE] hover:bg-[#27AAE1] active:bg-[#1A6DAE] transition duration-200 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  fillRule="evenodd"
                  d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                ></path>
              </svg>
            </div>
          </button>

          <Modal onClose={handleClose} visible={showModal} />

          <div className="flex flex-wrap -mx-4">
            <div className="w-full p-4">
              <div className="bg-white shadow-md rounded">
                <table className="w-full text-md bg-white shadow-md rounded">
                  <thead>
                    <tr className="border-b border-[#27AAE1] h-12">
                      <th className="text-left font-normal text-gray-500 p-2">
                        Fecha
                      </th>
                      <th className="text-left p-2">Actividades Recientes</th>
                      <th className="text-left p-2">Usuario</th>
                      <th className="text-left p-2">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#27AAE1] hover:bg-gray-100 h-12">
                      <td className="font-normal text-gray-400 p-2">10-Jun</td>
                      <td className="p-2">Actividad 1</td>
                      <td className="font-normal text-gray-400 p-2">Usuario 1</td>
                      <td className="p-2 flex space-x-2">
                        <button className="bg-[#27AAE1] hover:bg-[#1A6DAE] text-white font-bold py-1 px-2 rounded">
                          <GrFormView fontSize={30} />
                        </button>
                        <button className="bg-[#6BCB77] hover:bg-[#36AE7C] text-white font-bold py-1 px-2 rounded">
                          <CiEdit fontSize={30} />
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                          <MdOutlineDeleteOutline fontSize={30} />
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b border-[#27AAE1] hover:bg-gray-100 h-12">
                      <td className="text-left font-normal text-gray-400 p-2">
                        07-Jul
                      </td>
                      <td className="text-left p-2">Actividad 2</td>
                      <td className="font-normal text-gray-400 text-left p-2">
                        Usuario 2
                      </td>
                      <td className="p-2 flex space-x-2">
                        <button className="bg-[#27AAE1] hover:bg-[#1A6DAE] text-white font-bold py-1 px-2 rounded">
                          <GrFormView fontSize={30} />
                        </button>
                        <button className="bg-[#6BCB77] hover:bg-[#36AE7C] text-white font-bold py-1 px-2 rounded">
                          <CiEdit fontSize={30} />
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                          <MdOutlineDeleteOutline fontSize={30} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
