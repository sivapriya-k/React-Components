import logo from './logo.svg';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Tabs} from "./components/Tabs/Tabs";

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

const items = [
      {
        id: 'html',
        name: 'HTML',
        panel:
            'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
      },
      {
        id: 'css',
        name: 'CSS',
        panel:
            'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        panel:
            'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
      },
    ];

function App() {
  return (
    <div className="App">
        <Accordion contents={contents}/>
        <Tabs items={items} />
    </div>
  );
}

export default App;
