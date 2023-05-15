import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Tabs} from "./components/Tabs/Tabs";
import {Tree} from "./components/DirectoryTree/Tree";

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

const folders = [
    {
        name: 'Folder1',
        icon: '🎉',
        children: [
            {
                name: 'Child1-1',
            },
            {
                name: 'Child1-2',
                children: [{
                    name: 'grandchild1-1'
                }]
            }
        ]
    },
    {
        name: 'Folder2',
        icon: '🎉',
        children: [
            {
                name: 'Child2-1',
            },
            {
                name: 'Child2-2',
                children: [{
                    name: 'grandchild2-1'
                }]
            }
        ]
    }
]
function App() {
  return (
    <div className="App">
        <Accordion contents={contents}/>
        <Tabs items={items} />
        <Tree data={folders} isRoot={true} />
    </div>
  );
}

export default App;
