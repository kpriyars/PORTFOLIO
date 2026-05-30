import './App.css'
import Carvalho from './sections/Carvalho/Carvalho'; 
import PhotoSlideshow from './sections/PhotoSlideshow/PhotoSlideshow';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {

  return (
    <>
      <Carvalho />
      <PhotoSlideshow /> {/* ADDED THIS LINE */}
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
  
} 

export default App;