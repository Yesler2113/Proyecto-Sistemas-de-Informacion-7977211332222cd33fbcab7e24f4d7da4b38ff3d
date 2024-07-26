import styled, { keyframes } from "styled-components";
import logo1 from "../Image/Muni.png";
import logo2 from "../Image/Aguas.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// const inputclassNamees = 'w-2/3 border-b-2 border-blue-500 focus:outline-none focus:border-blue-700';
const wave = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(50%, 50%, 0);
  }
`;

const WavesContainer = styled.div`
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: -100%;
    left: -50%;
    background: linear-gradient(
      45deg,
      rgba(0, 123, 255, 0.6),
      rgba(0, 80, 255, 0.6)
    );
    opacity: 0.7;
    border-radius: 50%;
    animation: ${wave} 30s infinite linear;
    pointer-events: none;
  }

  &::after {
    animation-delay: 15s;
  }
`;

export const ValidationPage = () => {
  const [loginForm, setLoginForm] = useState({
    user: "",
    password: "",
  });

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://192.168.1.47:7055/api/account/generate-password-reset-token",
        {
          username,
        }
      );
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
    Navigate("/home");
  };

  return (
    <WavesContainer>
      <div className="max-w-[500px] bg-white bg-opacity-80 rounded-lg shadow-lg p-8 z-10 flex flex-col items-center ">
        <div className="text-center mb-1">
          <h1 className="text-4xl font-bold mb-4">BIENVENIDO</h1>

          {/* LOGO */}
          <div className="flex justify-center">
            <div className="mb-auto">
              <img src={logo1} alt="Logo 1" className="h-28 w-64 mx-2 p-5" />
            </div>

            <div className="mt-5">
              <img src={logo2} alt="Logo 2" className="h-20 w-15 mx-2" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Inicia sesión en tu cuenta
          </h2>
          <form className="flex justify-center" onSubmit={handleSubmit}>
            <div>
              {/* USUARIO */}
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold mb-2"
                >
                  Email:
                </label>
                <input
                  type="Email"
                  id="username"
                  className="w-80 rounded-md bg-transparent border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
                  value={loginForm.user}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, user: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold mb-2"
                >
                Pin:
                </label>
                <input
                  type="number"
                  id="username"
                  className="w-80 rounded-md bg-transparent border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
                  value={loginForm.user}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, user: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold mb-2"
                >
                  Nueva Contraseña:
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-80 rounded-md bg-transparent border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, user: e.target.value })
                  }
                />
              </div>
              <div className="flex-row">
              <button type="submit" className="w-1/2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 ml-20 m-5">
                Iniciar
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </WavesContainer>
  );
};

export default ValidationPage;