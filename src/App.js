import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import {publicRoute} from './routes/publicRoute'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <>
      <Navbar>
       <Routes>
         {
           publicRoute.map(({path, Component})=><Route path={path} element={<Component/>}/>)
         }
       </Routes>
      </Navbar>

    </>
  );
}

export default App;
