import Hero from './components/Hero.tsx'
import Biography from './components/Biography.tsx'
import Timeline from './components/Timeline.tsx'
import Research from './components/Research.tsx'
import Gallery from './components/Gallery.tsx'
import Tributes from './components/Tributes.tsx'
import Footer from './components/Footer.tsx'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Biography />
        <Timeline />
        <Research />
        <Gallery />
        <Tributes />
      </main>
      <Footer />
    </>
  )
}
