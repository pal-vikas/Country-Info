import Country from "./pages/Country";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";
import CountryInfo from "./components/CountryInfo";

function App() {

  return (
    <>

      <Navbar />
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/country" element={<Country/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/:name" element={<CountryInfo/>}/>

          <Route path="*" element={<Error/>}/>
        </Routes>
      

    </>
  )
}

export default App
