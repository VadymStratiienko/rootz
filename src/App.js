import { useEffect } from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import 'aos/dist/aos.css';
import AOS from 'aos';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
