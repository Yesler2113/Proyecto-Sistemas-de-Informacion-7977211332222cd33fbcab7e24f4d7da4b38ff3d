import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; 

mapboxgl.accessToken = 'pk.eyJ1IjoiYWd1YXMyMDI0IiwiYSI6ImNseXZxaWRzcDA1OG4ya3BwcGlpbWhjMnEifQ.NOJa2LBJ6EtC4EBwSk2rSA';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
