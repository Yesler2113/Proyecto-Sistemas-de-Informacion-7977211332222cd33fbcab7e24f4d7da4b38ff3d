import Header from "../components/Header";
import { GrFormView } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Sidebar from "../components/Sidebar";

const ViewReportePage = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow">
        <Header />
        <div className="container mx-auto p-4">
          <div className="bg-white shadow-md rounded">
            <table className="w-full text-md bg-white shadow-md rounded">
              <thead>
                <tr className="border-b border-[#27AAE1] h-12">
                  <th className="text-left font-normal text-gray-500 p-2">Fecha</th>
                  <th className="text-left p-2">Reportes Recientes (Incidencia)</th>
                  <th className="text-left p-2">Clave Catastral</th>
                  <th className="text-left p-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#27AAE1] hover:bg-gray-100 h-12">
                  <td className="font-normal text-gray-400 p-2">10-Jun</td>
                  <td className="p-2">Corte</td>
                  <td className="font-normal text-gray-400 p-2">CL12-2F-18-12</td>
                  <td className="p-2">
                    <button className="bg-[#27AAE1] hover:bg-[#1A6DAE] text-white font-bold py-1 px-2 rounded mr-2">
                      <GrFormView fontSize={30} />
                    </button>
                    <button className="bg-[#6BCB77] hover:bg-[#36AE7C] text-white font-bold py-1 px-2 rounded">
                      <CiEdit fontSize={30} />
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2">
                      <MdOutlineDeleteOutline fontSize={30} />
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-[#27AAE1] hover:bg-gray-100 h-12">
                  <td className="text-left font-normal text-gray-400 p-2">07-Jul</td>
                  <td className="text-left p-2">Instalación</td>
                  <td className="font-normal text-gray-400 text-left p-2">CL12-2A-30-05</td>
                  <td className="p-2">
                    <button className="bg-[#27AAE1] hover:bg-[#1A6DAE] text-white font-bold py-1 px-2 rounded mr-2">
                      <GrFormView fontSize={30} />
                    </button>
                    <button className="bg-[#6BCB77] hover:bg-[#36AE7C] text-white font-bold py-1 px-2 rounded">
                      <CiEdit fontSize={30} />
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2">
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
  );
};

export default ViewReportePage;
