import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Properties from "./components/Properties";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Properties />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}