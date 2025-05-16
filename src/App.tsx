import About from './About'
import './App.scss'
import Blog from './Blog'
import Navbar from './navbar'
import Projects from './Projects'
function App() {
  return (
    <div id='main'>
      {Navbar()}
      <div id='all-content'>
        <div id='big-pic-div'>
          <h1>Andy Brown</h1>
          <img src="andrewV3.png"></img>
          <p id='blurb'>
            I combine cutting-edge technology with tried and true engineering practices to deliver <b>world-class</b> webapps.
          </p>
        </div>
        <div id="about">
          {About()}
        </div>
        <div id="projects">
          {Projects()}
        </div>
        <div id='blog'>
          {Blog()}
        </div>
        <div id='contact'>
          <h2><a href="mailto:andrewbrownconsult@gmail.com">andrewbrownconsult@gmail.com</a></h2>
          <h2><a href="https://www.linkedin.com/in/andrew-brown-b50592183/">Linkedin</a></h2>
          <h2> <a href="https://github.com/anDB123">Github</a></h2>
        </div>
      </div>
    </div >
  )
}

export default App
