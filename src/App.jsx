import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/Home";
import Services from "./components/Service";
import ContactPage from "./components/Contact";
import AboutPage from "./components/About";
import TestimonialsPage from "./components/Testimonials";
import Allsecurtyguard from "./components/Allsecurityguard";
import { FaWhatsapp } from "react-icons/fa";
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Main content area */}
        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/all-types-of-security"
              element={<Allsecurtyguard />}
            />
            <Route path="/gallery" element={<TestimonialsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <a
          href="https://wa.me/919876543210" // Replace with your actual WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
        >
          <FaWhatsapp size={28} />
        </a>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
