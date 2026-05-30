import './App.css'
import Carvalho from './sections/Carvalho/Carvalho'; 
import Glitter from './sections/Glitter/Glitter'; // 1. Import it
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {

  return (
    <>
      <Glitter /> {/* 2. Add it at the top */}
      <Carvalho />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
  
} 

export default App;
  
} 

export default App;