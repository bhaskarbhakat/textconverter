import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

function App() {
  return (
    <>
    <Router>
          <Navbar title="TextConverter" aboutText="About"/>
      <Switch>
          <Route path="/about">
          <div className="container my-2 col col-lg-9">
            <About title="Text Converter"/>
          </div>
          </Route>
          <Route path="/">
          <div className="container my-2 col col-lg-9">
            <TextForm heading="Convert your Text in a SINGLE click" />
          </div>
          </Route>
      </Switch>
    </Router>
    
    </>
  );
}
export default App;