import Projects from "./views/Projects.jsx";
import { Cv } from "./views/Cv.jsx";
import { ContactForm } from "./views/ContactForm.jsx";
import { PresentationCard } from "./views/PresentationCard.jsx";

function App() {
  return (
    <div className="App">
      <main>
        <PresentationCard />
        <Projects />
        <Cv />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
