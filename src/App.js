import logo from './logo.svg';
import './App.css';
import { ComponentOne} from './components/ComponentOne';
import {  ComponentTwo } from './components/ComponentTwo';

function App() {
  return (
    <div>
    <ComponentOne name="A"/>
          <ComponentOne name="B"/>
          <ComponentOne name="C"/>
          <ComponentOne name="D"/>
          <ComponentOne name="E"/>
    {/* <ComponentTwo/> */}

    </div>
  );
}

export default App;
