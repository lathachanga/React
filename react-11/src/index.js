import ReactDom from 'react-dom'
import App from './App'
//ReactDom.render(1,2)
//ReactDom.render(what you want to render,where you want to render)
//ReactDom.render("Hello",document.getElementById("abc"))
//ReactDom.render(<h1>hello good Afternoon</h1>,document.getElementById("abc"))
//ReactDom.render(<div><h1>hello good morning</h1><h1>hello good Afternoon</h1><h1>hello good night</h1></div>,document.getElementById("abc"))
ReactDom.render(<App/>,document.getElementById("abc"))