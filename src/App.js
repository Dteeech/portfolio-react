import Home from "./views/Home.jsx";
import LeftProjects from "./views/Projects.jsx";
import { Me } from "./views/Me.jsx";
import { Cv } from "./views/Cv.jsx";

function App() {
  return (
    <div className="App">
      <main>
        <Home />
        <Me />
        <LeftProjects />
        <Cv />
        
      </main>
    </div>
  );
}

export default App;
