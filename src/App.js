import "./App.css";
// import NavBar2 from "./components/NavBar2/NavBar2";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import SignUp from "./components/SignUp/SignUp";
import ECarousel from "./components/Carousel/ECarousel";
import RCarousel from "./components/Carousel/RCarousel";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Products />
      <RCarousel />
      <ECarousel />
      <SignUp />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
