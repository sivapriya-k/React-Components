import logo from './logo.svg';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";

const contents= [
  {
    id: 'html',
    title: 'HTML',
    content: 'hypertext markup language'
  },
  {
    id: 'css',
    title: 'CSS',
    content: 'cascading style sheets'
  },
  {
    id: 'js',
    title: 'Javascript',
    content: 'Javascript scripting Language'
  },
]
function App() {
  return (
    <div className="App">
        <Accordion contents={contents}/>
    </div>
  );
}

export default App;
