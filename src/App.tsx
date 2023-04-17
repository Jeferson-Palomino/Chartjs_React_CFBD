import Post from "./components/Post";
import { useEffect, useState } from "react";
import { records } from "./service/pocketbase-service";
import  ChartJS  from "./components/ChartJS";
import { Route, Routes } from 'react-router-dom'; 
import Inputs from "./components/Inputs";

function App() {

  return (
    <main className="flex flex-col gap-3">
        <div>
          <ChartJS/>
        </div>
        <div>
          <Inputs/>
        </div>

      </main>
    
  );
}

export default App;
