import Navbar from "./components/Navbar"
import Start from "./components/Start"
import MainSection from "./components/MainSection";
import ProductsSection from "./components/ProductsSection";
import SpeakerSection from "./components/SpeakerSection";
import BlogSection from "./components/BlogSection";
import Subwoofersection from "./components/Subwoofersection";
import Footer from "./components/Footer";
import AmplifierSection from "./components/AmplifierSection";

const App = () => {
  return (
    <div>
      <Start text="Free Delivery & 60-Day Returns* – Everyday!" />

      <Navbar />

      <MainSection />

      <ProductsSection />
      
      <SpeakerSection />

      <AmplifierSection />

      <BlogSection />

      <Subwoofersection />
      
      <Footer />

    </div>
  )
}

export default App