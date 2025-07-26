
import Navbar from "./components/Navbar.tsx"
import HeroSection from "./components/HeroSection.tsx"
import FeaturedSection from "./components/FeaturedSection.tsx"
import Workflow from "./components/Workflow.tsx"
import Pricing from "./components/Pricing.tsx"
import Testimonials from "./components/Testimonials.tsx"
import Footer from "./components/Footer.tsx"

function App() {

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeaturedSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>

    </>
  )
}

export default App
