import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedNews from './components/FeaturedNews'
import CategoryCards from './components/CategoryCards'
import LatestNews from './components/LatestNews'
import Curiosities from './components/Curiosities'
import Calendar from './components/Calendar'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <FeaturedNews />
        <CategoryCards />
        <LatestNews />
        <Curiosities />
        <Calendar />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
