import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import StartingPractice from './pages/StartingPractice'
import Chat from './pages/Chat'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/starting-practice" element={<StartingPractice />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

