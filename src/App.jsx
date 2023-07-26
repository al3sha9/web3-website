
import 'bootstrap/dist/css/bootstrap.css';
import Hero from "./components/header"
import './App.css'
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return (
    <>
     <Hero />
    </>
  )
}

export default App
