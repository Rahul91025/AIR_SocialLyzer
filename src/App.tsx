
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot/ChatBot';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Team />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;