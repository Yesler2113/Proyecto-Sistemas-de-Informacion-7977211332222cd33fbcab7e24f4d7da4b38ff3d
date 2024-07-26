import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const AddUserPage = () => {
    const navigate = useNavigate();
    const [permission, setPermission] = useState("");

    const handleRadioChange = (event) => {
        setPermission(event.target.value);
    };

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-grow">
                <Header />
                <div className="flex flex-col justify-center items-center p-3 w-full h-full md:h-screen overflow-y-scroll">
                    <h1 className="font-bold text-2xl m-6">Crear Nuevo Usuario</h1>
                    <form className="w-7/12 p-6 border-2 border-blue-400 rounded-lg shadow-md">
                        <div className="flex flex-col mb-4">
                            <label className="font-semibold mb-2">Usuario</label>
                            <input
                                className="border-2 w-full p-2 placeholder-gray-600 rounded-md outline-none"
                                placeholder="jPerez"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="font-semibold mb-2">Correo Electrónico</label>
                            <input
                                className="border-2 w-full p-2 placeholder-gray-600 rounded-md outline-none"
                                placeholder="Correo Electronico"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="font-semibold mb-2">Contraseña</label>
                            <input
                                className="border-2 w-full p-2 placeholder-gray-600 rounded-md outline-none"
                                placeholder="Contraseña"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="font-semibold mb-2">Primer Nombre</label>
                            <input
                                className="border-2 w-full p-2 placeholder-gray-600 rounded-md outline-none"
                                placeholder="Primer Nombre"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="font-semibold mb-2">Segundo Nombre</label>
                            <input
                                className="border-2 w-full p-2 placeholder-gray-600 rounded-md outline-none"
                                placeholder="Segundo Nombre"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="font-semibold mb-2">Permisos</label>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="view"
                                    name="permission"
                                    value="view"
                                    checked={permission === "view"}
                                    onChange={handleRadioChange}
                                    className="mr-2"
                                />
                                <label htmlFor="view" className="mr-4">Ver</label>
                                <input
                                    type="radio"
                                    id="edit"
                                    name="permission"
                                    value="edit"
                                    checked={permission === "edit"}
                                    onChange={handleRadioChange}
                                    className="mr-2"
                                />
                                <label htmlFor="edit">Editar</label>
                            </div>
                        </div>

                        <div className="mt-3 flex items-center justify-center">
                            <span
                                className="bg-[#27AAE1] hover:bg-blue-700 text-white rounded-md p-2 ml-7 cursor-pointer"
                            >
                                Crear Usuario
                            </span>

                            <span
                                className="text-white bg-red-500 hover:bg-red-600 rounded-md p-2 ml-7 cursor-pointer"
                                onClick={() => navigate('/home')}
                            >
                                Cancelar
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUserPage;

