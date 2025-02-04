import './App.css'
import HeroSection from './components/hero-section';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
}

export default App;
