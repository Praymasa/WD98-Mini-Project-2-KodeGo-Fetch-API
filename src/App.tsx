import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Menu } from "./pages/Menu";
import { Services } from "./pages/Services";
import { ContactUs } from "./pages/ContactUs";
import { OrderSection } from "./pages/OrderSection";
import { Navigation } from "./component/Navigation";
import { OrderCartProvider } from "./context/OrderCartContext";
import "./App.css";
import { Footer } from "./component/Footer";

function App() {
  return (
    <OrderCartProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/orderSection" element={<OrderSection />} />
      </Routes>
      <Footer />
    </OrderCartProvider>
  );
}

export default App;
