import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Profile />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
}
