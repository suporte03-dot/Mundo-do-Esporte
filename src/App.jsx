import Header from './components/Header'
import Hero from './components/Hero'
import SpotlightOfTheDay from './components/SpotlightOfTheDay'
import FanMode from './components/FanMode'
import CategoryCards from './components/CategoryCards'
import LatestNews from './components/LatestNews'
import WeekAgenda from './components/WeekAgenda'
import Curiosities from './components/Curiosities'
import Stories from './components/Stories'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <SpotlightOfTheDay />
        <FanMode />
        <CategoryCards />
        <LatestNews />
        <WeekAgenda />
        <Curiosities />
        <Stories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
