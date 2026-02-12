import './App.css'
import { TranslationProvider } from './contexts/TranslationContext'
import Navbar from './layouts/Navbar/Navbar'
import Section from './layouts/Section/Section'
import SectionCard from './layouts/SectionCard/SectionCard'
import Portfolio from './layouts/Portfolio/Portfolio'
import Contact from './layouts/Contact/Contact'
import Footer from './layouts/Footer/Footer'

function App() {
  return (
    <TranslationProvider>
      <Navbar></Navbar>
      <main className="xl2:pt-0 xl:pt-0 lg:pt-0 sm:pt-0 md:pt-0">
        <Section></Section>
        <SectionCard></SectionCard>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </TranslationProvider>
  )
}

export default App
