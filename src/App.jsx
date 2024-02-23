import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Welcome from "./components/Welcome";
import Training from "./components/Training";
import Facility from './components/Facility';
import Footer from "./components/Footer";
import Coaches from "./components/Coaches";


function App() {
 

  return (
    <>
      <Navbar/>
      <Banner/>
      <Welcome/>
      <Training/>
      <Facility/>
      <Coaches/>
      <Footer/>
    </>
  )
}

export default App
