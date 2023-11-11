
import React,{useState} from "react";
import {Cont, Input,Parra,Error,Succes} from "../elementos/Style";

const Formulario=()=>{
   
    const [user, changeUser]=useState("");
    const [password, changePassword]=useState("");
    const [error, changeError]=useState("");
    const [good, changeGood]=useState("");
    const onChange = (e)=>{

        if(e.target.id === "user"){
            changeUser(e.target.value);
           
        }else if(e.target.id === "pass"){
    
            changePassword(e.target.value);
    
        }
     };
    const validar=(e)=>{

     
   e.preventDefault();
   if(user !== "juan" || user === ""){
       changeError("There is something wrong in the user"); 
       document.getElementById("succes").style.display= "none";
       document.getElementById("error").style.display= "block";
    
    }else if(password!== "123" || password ===""){
    changeError("There is something wrong in the password"); 
    document.getElementById("succes").style.display= "none";
    document.getElementById("error").style.display= "block";
 
 }else{
    document.getElementById("error").style.display= "none";
    document.getElementById("succes").style.display= "block";
       changeError("");
       changeGood("All succesfully");
       
 }
    };

  return(


   <Cont onSubmit={validar}>
     <Parra>Formulario</Parra>
     <Input type="text" id="user" onChange={onChange} value={user} placeholder="Introduce your user"/>
     <Input type="password" id="pass" onChange={onChange} value={password} placeholder="Introduce your password"/>
     <Error id="error">{error}</Error>
     <Succes id="succes">{good} {user}</Succes>
     <Input sub type="submit" value="Send it" />
     

   </Cont>

  )


};


export default Formulario;