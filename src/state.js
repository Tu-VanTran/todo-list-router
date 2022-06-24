import React,{useState, useEffect} from "react";

// import {ExerciseBox} from './exercise/exerciseBox';
import Form from "./form/Form2";
function App() {
  const [payload, setPayload] = useState();
  useEffect(() => {
    console.log(payload)
  })

  const handleChangePayload = (payload) =>{
    setPayload(payload);
  }
  return (
    <Form onPayloadChange = {handleChangePayload}/>
  );
}

export default App;
