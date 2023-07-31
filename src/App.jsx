
import 'bootstrap/dist/css/bootstrap.css';
import Hero from "./components/header"
import './App.css'
import { useEffect } from 'react';
import Imagine from './components/imagine';
import Solution from './components/solution';

function App() {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return (
    <>
     <Hero />
     <Imagine />
     <Solution />
    </>
  )
}

export default App
