import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { Ubication } from "../components/Ubication";


const AddCalendarizacionPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);

  const navigate = useNavigate();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSectorChange = (sector) => {
    setSelectedSector(sector);
  };

  const handlePublicar = () => {
    console.log('Publicando calendarizacion');
  };

  const sectors = [
    { label: "Bo. Santa Teresa", value: "Bo. Santa Teresa" },
    { label: "Col. Santa Rosa", value: "Col. Santa Rosa" },
    { label: "Col. Loma Linda", value: "Col. Loma Linda" },
    { label: "Col. Santa Eduviges", value: "Col. Santa Eduviges" },
    { label: "Línea de Pinchazo", value: "Línea de Pinchazo" },
    { label: "Res. María Auxiliadora", value: "Res. María Auxiliadora" },
    { label: "Bo. San Antonio", value: "Bo. San Antonio" },
    { label: "Línea del Duende", value: "Línea del Duende" },
  ];

  const [viewport, setViewport] = useState({
    latitude: 15.0000000,
    longitude: -86.5000000,
    zoom: 5,
    width: '600px',
    height: '600px'
  });

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow scroll-m-32">
        <Header />
        <div className="flex flex-col items-center mt-5">

          <h1 className="font-bold text-2xl mb-5">Nuevo Calendario y Distribución</h1>

          <div className="flex flex-col lg:flex-row w-11/12 border-2 border-[#27AAE1] rounded-md p-3">
            <div>
              <div className="relative">
                {/* FECHA */}
                <div className="flex flex-col w-full justify-center col-span-8 p-10">
                  <div className="flex flex-col w-full lg:w-1/2 items-center justify-center text-center">
                    <h2 className="font-bold text-lg mb-1">Fecha</h2>
                    <input
                      type="date"
                      className="w-2/3 border-2 border-[#27AAE1] rounded-md p-2"
                      onChange={(e) => handleDateChange(e.target.value)}
                    />
                  </div>

                  {/* SELECT ZONAS */}
                  <div className="flex flex-col w-full lg:w-1/2 items-center justify-center text-center">
                    <h2 className="font-bold text-lg mb-1 mt-3">Barrio o Sector</h2>
                    <div className="flex flex-col border-2 border-[#27AAE1] rounded-md p-9 w-2/3 lg:w-auto">
                      <h3 className="font-bold mb-2">Zona Alta</h3>
                      <select
                        onChange={(e) => handleSectorChange(e.target.value)}
                        className="border-2 border-gray-300 rounded-md p-2 mb-2"
                      >
                        <option value="">Seleccione un barrio o sector</option>
                        {sectors.map((sector) => (
                          <option key={sector.value} value={sector.value}>
                            {sector.label}
                          </option>
                        ))}
                      </select>
                      <h3 className="font-bold mb-2">Zona Media Alta</h3>
                      <select
                        onChange={(e) => handleSectorChange(e.target.value)}
                        className="border-2 border-gray-300 rounded-md p-2 mb-2"
                      >
                        <option value="">Seleccione un barrio o sector</option>
                        {sectors.map((sector) => (
                          <option key={sector.value} value={sector.value}>
                            {sector.label}
                          </option>
                        ))}
                      </select>
                      <h3 className="font-bold mb-2">Zona Baja</h3>
                      <select
                        onChange={(e) => handleSectorChange(e.target.value)}
                        className="border-2 border-gray-300 rounded-md p-2"
                      >
                        <option value="">Seleccione un barrio o sector</option>
                        {sectors.map((sector) => (
                          <option key={sector.value} value={sector.value}>
                            {sector.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* OBSERVACIONES */}
                  <div className="flex flex-col lg:w-1/2 items-center justify-center text-center">
                    <h2 className="font-bold text-lg mb-1 mt-3">Observaciones</h2>
                    <input
                      className="w-80 border-2 border-[#27AAE1] rounded-md p-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* MAPA */}
              <div className="relative left-15 mt-5">
                <Ubication />
              </div>
            </div>

          </div>
          <div className="flex space-x-4 m-4">
            <button
              onClick={handlePublicar}
              className="px-6 py-2 bg-[#27AAE1] text-white font-semibold rounded-lg shadow-md hover:bg-[#1A6DAE] focus:outline-none focus:ring-2 focus:ring-[#27AAE1] focus:ring-opacity-75 transition duration-300"
            >
              Publicar
            </button>
            <button
              onClick={() => navigate("/home")}
              className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-300"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCalendarizacionPage;
