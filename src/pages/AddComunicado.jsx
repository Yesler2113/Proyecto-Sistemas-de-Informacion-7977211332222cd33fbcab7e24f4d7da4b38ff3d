/*import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Add } from "@mui/icons-material";
import axios from "axios";

const AddComunicado = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const navigate = useNavigate();

  const handleTituloChange = (e) => setTitulo(e.target.value);
  const handleDescripcionChange = (content) => setDescripcion(content);

  const handlePublicar = () => {
    console.log('Publicando comunicado:', { titulo, descripcion });
  };

  export const AddComunicado = () => {
  const [comunicado, setComunicado] = useState({
    tittle: "",
    content: "",
  });

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  //agregar comunicado a la api

  const handdleSubmit = async (e) => {
    e.preventDefault();
    const { tittle: titulo, content: descripcion } = comunicado;
    try {
      const response = await axios.post(
        "https://localhost:7055/api/communicate",
        {
          titulo,
          descripcion,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Éxito:", response.data);
      if (response.data && response.data.data && response.data.data.token) {
        login(response.data.data.token);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    console.log("Publicando comunicado:", { titulo, descripcion });
  };


  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow">
        <Header />
        <div className="p-4 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-left">Nuevo Comunicado</h2>

          <div className="mb-4 flex items-center">
            <label htmlFor="titulo" className="font-bold text-gray-700 mr-4 w-32 text-left">Título:</label>
            <input
              type="text"
              id="titulo"
              value={comunicado.tittle}
                onChange={(e) => setComunicado({ ...comunicado, tittle: e.target.value })}
              className="flex-grow px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27AAE1]"
              placeholder="Ingrese el título del Comunicado"
            />
          </div>

          <div className="mb-6 flex items-center">
            <label htmlFor="descripcion" className="font-bold text-gray-700 mr-4 w-32 text-left">Descripción:</label>
            <div className="flex-grow border rounded-lg overflow-hidden" style={{ borderColor: '#27AAE1' }}>
              <ReactQuill
                theme="snow"
                value={comunicado.content}
                onChange={(e) => setComunicado({ ...comunicado, content: e.target.value })}
                modules={modules}
                formats={formats}
                className="bg-white"
                style={{ 
                  height: '300px',
                  border: 'none',
                }}
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handdleSubmit}
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

export default AddComunicado;*/
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import axios from "axios";

export const AddComunicado = () => {
  const [comunicado, setComunicado] = useState({
    tittle: "",
    content: "",
  });

  const navigate = useNavigate();

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  const handdleSubmit = async (e) => {
    e.preventDefault();
    const { tittle, content } = comunicado;
    try {
      const response = await axios.post(
        "https://localhost:7055/api/communicate",
        {
          tittle,
          content,
          type_statement: "Comunicado"
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Éxito:", response.data);
      alert("Comunicado publicado con éxito");
      navigate("/home");
      if (response.data && response.data.data && response.data.data.token) {
        login(response.data.data.token);
        navigate("/home");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response.data);
      } else {
        console.error("Error:", error.message);
      }
    }
    console.log("Publicando comunicado:", { tittle, content });
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow">
        <Header />
        <div className="p-4 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-left">Nuevo Comunicado</h2>

          <div className="mb-4 flex items-center">
            <label htmlFor="titulo" className="font-bold text-gray-700 mr-4 w-32 text-left">Título:</label>
            <input
              type="text"
              id="titulo"
              value={comunicado.tittle}
              onChange={(e) => setComunicado({ ...comunicado, tittle: e.target.value })}
              className="flex-grow px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27AAE1]"
              placeholder="Ingrese el título del Comunicado"
            />
          </div>

          <div className="mb-6 flex items-center">
            <label htmlFor="descripcion" className="font-bold text-gray-700 mr-4 w-32 text-left">Descripción:</label>
            <div className="flex-grow border rounded-lg overflow-hidden" style={{ borderColor: '#27AAE1' }}>
              <ReactQuill
                theme="snow"
                value={comunicado.content}
                onChange={(content) => setComunicado({ ...comunicado, content })}
                modules={modules}
                formats={formats}
                className="bg-white"
                style={{ 
                  height: '300px',
                  border: 'none',
                }}
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handdleSubmit}
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

export default AddComunicado;



