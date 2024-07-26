import { FiEyeOff } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import styled, { keyframes } from "styled-components";
import logo1 from "../Image/Muni.png";
import logo2 from "../Image/Aguas.jpg";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const buttonclassNamees = "w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300";

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

export const LoginPage = () => {
  const [loginForm, setLoginForm] = useState({
    user: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user, password } = loginForm;
    try {
      const response = await axios.post(
        "https://localhost:7055/api/account/login",
        {
          username: user,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Éxito:", response.data);
      if (response.data && response.data.data && response.data.data.token) {
        //localStorage.setItem("token", response.data.data.token);
        console.log("Token guardado en localStorage:", response.data.data.token);
        login({ username: user, token: response.data.data.token });
        navigate("/home");
      } else {
        console.error("No se recibió un token válido");
      }
    } catch (error) {
      console.error("Error:", error);
      // Maneja cualquier error de red o de servidor aquí
    }
  };

  return (
    <WavesContainer>
      <div className="max-w-[500px] bg-white bg-opacity-80 rounded-lg shadow-lg p-8 z-10 flex flex-col items-center ">
        <div className="text-center mb-1">
          <h1 className="text-4xl font-bold mb-4">BIENVENIDO</h1>

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
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold mb-2"
                >
                  Usuario:
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-80 rounded-md bg-transparent border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
                  value={loginForm.user}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, user: e.target.value })
                  }
                />
              </div>
              <div className="mb-6 relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold mb-2"
                >
                  Contraseña:
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-80 rounded-md bg-transparent border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
                    value={loginForm.password}
                    onChange={(e) =>
                      setLoginForm({ ...loginForm, password: e.target.value })
                    }
                  />
                  <span
                    onClick={handleShowPassword}
                    className="absolute inset-y-0 right-0 px-3 flex items-center cursor-pointer"
                  >
                    {showPassword ? <LuEye /> : <FiEyeOff />}
                  </span>
                </div>
              </div>
              <button type="submit" className={buttonclassNamees}>
                Ingresar
              </button>
            </div>
          </form>
          <p className="m-4">
            ¿Olvidaste tu contraseña?{" "}
            <button
              onClick={() => (window.location.href = "/Contraseña")}
              className="text-blue-500 p-4 underline"
            >
              Recupérala aquí
            </button>
          </p>
        </div>
      </div>
    </WavesContainer>
  );
};

export default LoginPage;

