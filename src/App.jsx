import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PortalHeadlines from './components/PortalHeadlines'
import FanMode from './components/FanMode'
import SportsHighlights from './components/SportsHighlights'
import CategoryCards from './components/CategoryCards'
import WeekAgenda from './components/WeekAgenda'
import Curiosities from './components/Curiosities'
import Stories from './components/Stories'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import NewsModal from './components/NewsModal'
import './App.css'

function App() {
  const [selectedNews, setSelectedNews] = useState(null)

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <PortalHeadlines onReadMore={setSelectedNews} />
        <FanMode />
        <SportsHighlights onReadMore={setSelectedNews} />
        <CategoryCards />
        <WeekAgenda />
        <Curiosities />
        <Stories />
        <Newsletter />
      </main>
      <Footer />
      <NewsModal article={selectedNews} onClose={() => setSelectedNews(null)} />
    </div>
  )
}

export default App
