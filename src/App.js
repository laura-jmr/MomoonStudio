import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import ReachOut from "./pages/ReachOut/ReachOut";
import About from "./pages/About/About";
import NotFound from "./pages/404/NotFound";
import Marielle from "./pages/Marielle/Marielle";
import { Language } from "./components/Language";
import Imprint from "./pages/Imprint/Imprint";
import TermsConditions from "./pages/TermsConditions/TermsConditions";

function App() {
  return (
    <Language>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reachout" element={<ReachOut />} />
        <Route path="/portfolio/marielle-und-die-waldgeister" element={<Marielle />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/termsconditions" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Language>
  );
}

export default App;
