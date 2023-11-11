import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Formulario from "./components/Formulario";



const App=()=>{

    return(

   <Formulario/>

    )

};


ReactDOM.createRoot(document.getElementById("contenedor")).render(<App/>);

