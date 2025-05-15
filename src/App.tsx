import About from './About'
import './App.scss'
import Navbar from './navbar'
import Projects from './Projects'
function App() {
  return (
    <div id='main'>
      {Navbar()}
      <div id='big-pic-div'>
        <h1>Andy Brown</h1>
        <img src="andrew.png"></img>
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
    </div>
  )
}

export default App
