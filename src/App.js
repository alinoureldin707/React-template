import { BrowserRouter as Router } from "react-router-dom";
import PagesSwitch from "./PagesSwitch";

function App() {
  return (
    <Router basename="/">
      <p>Hello</p>
      <PagesSwitch />
    </Router>
  );
}

export default App;
