import Card from './components/display-card/card'
import MainText from './components/MainText/MainText'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/skills/skills'
import Projects from './components/Projects/Projects'
import LastSec from './components/contact/lastSec'
import Copyright from './components/copyright/copyright'
import "./App.css"


function App() {



  return (
    <>
      <Navbar></Navbar>
      <div className='notResponsive'>
        <div className="main-intro" id="about">
          <MainText />
          <Card />
        </div>
      </div>
      <div className='responsiveAbout'>
        <div className="main-intro" id="about">
          <Card />
          <MainText />
        </div>
      </div>

      <hr style={{
        margin: '0 2%',
        opacity: "20%",
      }} />
      <Skills />
      <hr style={{
        margin: '0 2%',
        opacity: "20%",
      }} />
      <Projects />
      <hr style={{
        margin: '0 2%',
        opacity: "20%",
      }} />
      <LastSec />
      <Copyright />
    </>
  )
}

export default App
