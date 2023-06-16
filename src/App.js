import Home from "./views/Home.jsx";
import LeftProjects from "./views/Projects.jsx";
import { Me } from "./views/Me.jsx";
import { Cv } from "./views/Cv.jsx";
import { ContactForm } from "./views/ContactForm.jsx";

function App() {
  return (
    <div className="App">
      <main>
        <Home />
        <Me />
        <LeftProjects />
        <Cv />
        <ContactForm />
        
      </main>
    </div>
  );
}

export default App;
