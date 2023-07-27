
import 'bootstrap/dist/css/bootstrap.css';
import Hero from "./components/header"
import './App.css'
import { useEffect } from 'react';
import Imagine from './components/imagine';

function App() {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return (
    <>
     <Hero />
     <Imagine />
    </>
  )
}

export default App
