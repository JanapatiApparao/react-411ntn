import React from "react";
import "./style.css";
import FunComponet from './Components/FunComponent'
import ClassComponet from './Components/ClassComponent'

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happens :)</p>
      <FunComponet />
      <ClassComponet />
    </div>
  );
}
